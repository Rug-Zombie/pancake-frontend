import React, { useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import { useWeb3React } from '@web3-react/core'
import { Button, LinkExternal, useModal } from '@rug-zombie-libs/uikit'
import ModalInput from 'components/ModalInput/ModalInput'
import { useTombOverlay } from 'hooks/useContract'
import BigNumber from 'bignumber.js'
import tombOverlayAbi from 'config/abi/tombOverlay.json'
import { multicallv2 } from 'utils/multicall'
import StartMintingModal from '../StartMintingModal'
import { getAddress, getTombOverlayAddress } from '../../../utils/addressHelpers'
import { formatDuration } from '../../../utils/timerHelpers'
import { account, tombByPid, tombOverlayByPid } from '../../../redux/get'
import { APESWAP_ADD_LIQUIDITY_URL, AUTOSHARK_ADD_LIQUIDITY_URL, BASE_ADD_LIQUIDITY_URL } from '../../../config'
import tokens from '../../../config/constants/tokens'
import { getId } from '../../../utils'
import { DEFAULT_USER_INFO } from '../../../redux/tombOverlays'

interface BuyFrankProps {
  pid: number
}

const BuyFrank: React.FC<BuyFrankProps> = ({ pid }) => {
  const tombOverlay = useTombOverlay()
  const currentDate = Math.floor(Date.now() / 1000)
  const tomb = tombByPid(pid)
  const overlay = tombOverlayByPid(getId(tomb.overlayId))
  const { userInfo: { nftMintTime, isMinting, randomNumber }} = overlay || { userInfo: DEFAULT_USER_INFO }
  const { userInfo: { amount, tokenWithdrawalDate } } = tomb
  const mintingReady = randomNumber > 0
  const initialWithdrawCooldownTime = tokenWithdrawalDate - currentDate

  // eslint-disable-next-line no-nested-ternary
  const quoteTokenUrl = tomb.quoteToken === tokens.wbnb ? tomb.exchange === 'Apeswap' ? 'ETH' : 'BNB' : getAddress(tomb.quoteToken.address)

  const modal = overlay ? <StartMintingModal
    pid={getId(overlay.pid)}
  /> : null

  const [onStartMinting] = useModal(modal)

  const handleFinishMinting = () => {
    tombOverlay.methods.finishMinting(getId(overlay.pid)).send({ from: account() })
  }

  let addLiquidityUrl

  if (tomb.exchange === 'Apeswap') {
    addLiquidityUrl = `${APESWAP_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  } else if (tomb.exchange === 'Autoshark') {
    addLiquidityUrl = `${AUTOSHARK_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  } else {
    addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  }


  const pairLpDiv = <div className='frank-card'>
    <a href={addLiquidityUrl} target='_blank' rel='noreferrer'>
      <Button className='btn btn-disabled w-100'>Pair LP on {tomb.exchange}</Button>
    </a>
  </div>

  let mintButton
  console.log(mintingReady)
  if (isMinting && !mintingReady) {
    mintButton = (<Button className='btn w-100'>Minting In Progress</Button>)
  } else if (mintingReady) {
    mintButton = (<Button className='btn w-100' onClick={handleFinishMinting}>Finish Minting</Button>)
  } else {
    mintButton = (<Button className='btn w-100' onClick={onStartMinting}>Start Minting</Button>)
  }

  let mintTimer
  console.log(nftMintTime.toString())
  if (nftMintTime.eq(2 ** 256 - 1)) {
    mintTimer = (<div className='small-text'><span className='white-color'>Not Minting</span></div>)
  } else if (nftMintTime.isZero()) {
    mintTimer = mintButton
  } else {
    mintTimer = (<div>
      <div className='small-text'><span className='white-color'>NFT Timer</span></div>
      <span className='total-earned text-shadow' style={{ fontSize: '20px' }}>{formatDuration(nftMintTime.toNumber() - currentDate)}</span></div>)
  }

  let data

  if ((!overlay || nftMintTime.eq(2**256-1)) && amount.isZero()) {
    data = pairLpDiv
  } else {
    data = (!amount.isZero() ?
      <div className='frank-card'>
        <div className='space-between'>
          {/* eslint-disable-next-line no-nested-ternary */}
          {overlay ? mintTimer : currentDate >= tokenWithdrawalDate ?
            <span className='total-earned text-shadow'>No Withdraw Fees</span> :
            <div>
              <div className='small-text'>
                <span className='white-color'>5% Withdraw fee is active:</span>
              </div>
              <span className='total-earned text-shadow'>
              {formatDuration(initialWithdrawCooldownTime)}
                </span>
            </div>}
        </div>
      </div> : pairLpDiv)
  }

  return data
}

export default BuyFrank