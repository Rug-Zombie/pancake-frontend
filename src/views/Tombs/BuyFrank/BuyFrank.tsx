import React, { useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip';
import { useWeb3React } from '@web3-react/core'
import { Button, useModal } from '@rug-zombie-libs/uikit';
import ModalInput from 'components/ModalInput/ModalInput';
import { useTombOverlay } from 'hooks/useContract'
import BigNumber from 'bignumber.js';
import { formatDuration } from '../../../utils/timerHelpers'
import { tombByPid, tombOverlayByPid } from '../../../redux/get'
import { APESWAP_ADD_LIQUIDITY_URL, AUTOSHARK_ADD_LIQUIDITY_URL, BASE_ADD_LIQUIDITY_URL } from '../../../config'
import { getAddress } from '../../../utils/addressHelpers'
import tokens from '../../../config/constants/tokens'

interface BuyFrankProps {
  pid: number
}

const BuyFrank: React.FC<BuyFrankProps> = ({ pid }) => {
  const { account } = useWeb3React()
  const tombOverlay = useTombOverlay()
  const currentDate = Math.floor(Date.now() / 1000);
  const tomb = tombByPid(pid)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const overlay = tombOverlayByPid(tomb.overlayId[chainId])
  const { userInfo: { amount, tokenWithdrawalDate } } = tomb
  const initialWithdrawCooldownTime = tokenWithdrawalDate - currentDate;
  const [onPresent1] = useModal(<ModalInput inputTitle="Stake $ZMBE" />);
  const [nextMint, setNextMint] = useState('')
  const [nextMintRaw, setNextMintRaw] = useState(0)
  // eslint-disable-next-line no-nested-ternary
  const quoteTokenUrl = tomb.quoteToken === tokens.wbnb ? tomb.exchange === 'Apeswap' ? 'ETH' : 'BNB' : getAddress(tomb.quoteToken.address)

  let addLiquidityUrl

  if(tomb.exchange === 'Apeswap') {
    addLiquidityUrl = `${APESWAP_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  } else if(tomb.exchange === 'Autoshark') {
    addLiquidityUrl = `${AUTOSHARK_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  } else {
    addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  }

  useEffect(() => {
    if (account) {
      tombOverlay.methods.nftMintTime(overlay.pid[chainId]).call({ from: account })
        .then((res) => {
          console.log(res);
          setNextMint(formatDuration(new BigNumber(res).toNumber()))
          setNextMintRaw(new BigNumber(res).toNumber())
      })
    } else {
      setNextMint(formatDuration(2**256 - 1))
      setNextMintRaw(2**256 - 1)
    }
  }, [account, tombOverlay.methods, overlay.pid, chainId])

  let mintTimer;
  if (nextMintRaw === (2**256 - 1)) {
    mintTimer = (<div className="small-text"><span className="white-color">Not Minting: {nextMintRaw}</span></div>)
  } else if (nextMintRaw === 0) {
    mintTimer = (<span className="total-earned text-shadow" data-tip data-for="nft-minting" data-text-color="black">NFT is Ready
      <ReactTooltip id="nft-minting" place="top" type="light" effect="solid" className="nftTimerPopup">
      Mint your NFT by harvesting or unstaking</ReactTooltip></span>)
  } else {
    mintTimer = (<div><div className="small-text"><span className="white-color">NFT Timer</span></div>
      <span className="total-earned text-shadow" style={{fontSize: "20px"}}>{nextMint}</span></div>)
  }

  return (
    !amount.isZero() ?
      <div className="frank-card">
        <div className="space-between">
          {mintTimer}
          {currentDate >= tokenWithdrawalDate ?
            <span className="total-earned text-shadow">No Withdraw Fees</span> :
            <div>
              <div className="small-text">
                <span className="white-color">5% Withdraw fee is active:</span>
              </div>
              <span className="total-earned text-shadow">
                {formatDuration(initialWithdrawCooldownTime)}</span>
            </div>}
        </div>
      </div> :
      <div className='frank-card'>
        <div className='small-text'>
          <span className='white-color'>Supply LP</span>
        </div>
        <a href={addLiquidityUrl} target='_blank' rel='noreferrer'>
          <Button className='btn btn-disabled w-100' >Pair LP on {tomb.exchange}</Button>
        </a>
      </div>
  )
}

export default BuyFrank