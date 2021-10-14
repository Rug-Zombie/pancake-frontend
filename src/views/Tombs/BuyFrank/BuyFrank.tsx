import React, { useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip';
import { useWeb3React } from '@web3-react/core'
import { Button, useModal } from '@rug-zombie-libs/uikit';
import ModalInput from 'components/ModalInput/ModalInput';
import { useTombOverlay } from 'hooks/useContract'
import BigNumber from 'bignumber.js';
import tombOverlayAbi from 'config/abi/tombOverlay.json'
import { multicallv2 } from 'utils/multicall'
import StartMintingModal from '../StartMintingModal'
import { getAddress, getTombOverlayAddress } from '../../../utils/addressHelpers'
import { formatDuration } from '../../../utils/timerHelpers'
import { tombByPid, tombOverlayByPid } from '../../../redux/get'
import { APESWAP_ADD_LIQUIDITY_URL, AUTOSHARK_ADD_LIQUIDITY_URL, BASE_ADD_LIQUIDITY_URL } from '../../../config'
import tokens from '../../../config/constants/tokens'

interface BuyFrankProps {
  pid: number
}

const BuyFrank: React.FC<BuyFrankProps> = ({ pid }) => {
  const { account } = useWeb3React()
  const tombOverlay = useTombOverlay()
  const address = getTombOverlayAddress()
  const currentDate = Math.floor(Date.now() / 1000);
  const tomb = tombByPid(pid)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const overlay = tombOverlayByPid(tomb.overlayId[chainId])
  const { userInfo: { amount, tokenWithdrawalDate } } = tomb
  const initialWithdrawCooldownTime = tokenWithdrawalDate - currentDate;
  const [onPresent1] = useModal(<ModalInput inputTitle="Stake $ZMBE" />);
  const [nextMint, setNextMint] = useState('')
  const [nextMintRaw, setNextMintRaw] = useState(0)
  const [startedMinting, setStartedMinting] = useState(false)
  const [mintingReady, setMintingReady] = useState(false)
  const [mintingFee, setMintingFee] = useState(new BigNumber(0))
  const [updateUserInfo, setUpdateUserInfo] = useState(false)
  // eslint-disable-next-line no-nested-ternary
  const quoteTokenUrl = tomb.quoteToken === tokens.wbnb ? tomb.exchange === 'Apeswap' ? 'ETH' : 'BNB' : getAddress(tomb.quoteToken.address)

  const [onStartMinting] = useModal(
    <StartMintingModal
      pid={overlay.pid[chainId]}
      fee={mintingFee}
    />,
  );

  const handleFinishMinting = () => {
    tombOverlay.methods.finishMinting(overlay.pid[chainId]).send({ from: account })
  }

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
          setNextMint(formatDuration(new BigNumber(res.toString()).toNumber()))
          setNextMintRaw(new BigNumber(res.toString()).toNumber())
      })
      const calls = [
        { address, name: 'userInfo', params: [ overlay.pid[chainId], account ] },
        { address, name: 'mintingFee', params: [ ] },
      ]
      multicallv2(tombOverlayAbi, calls)
        .then((res) => {
          setStartedMinting(res[0].isMinting)
          setMintingReady(res[0].randomNumber > 0)
          setMintingFee(new BigNumber(res[1].toString()))
        })
      tombOverlay.methods.priceInBnb(mintingFee.toString()).call()
        .then((res2) => {
        setMintingFee(new BigNumber(res2))
      })
    } else {
      setNextMint(formatDuration(2**256 - 1))
      setNextMintRaw(2**256 - 1)
      setStartedMinting(false)
      setMintingReady(false)
      setMintingFee(new BigNumber(0))
    }
  }, [account, tombOverlay.methods, address, overlay.pid, chainId, mintingFee])

  let mintButton;
  if (startedMinting && !mintingReady) {
    mintButton = (<Button className='btn w-100'>Minting In Progress</Button>)    
  } else if (mintingReady) {
    mintButton = (<Button className='btn w-100' onClick={handleFinishMinting}>Finish Minting</Button>)    
  } else {
    mintButton = (<Button className='btn w-100' onClick={onStartMinting}>Start Minting</Button>)    
  }

  let mintTimer;
  if (nextMintRaw === (2**256 - 1)) {
    mintTimer = (<div className="small-text"><span className="white-color">Not Minting</span></div>)
  } else if (nextMintRaw === 0) {
    mintTimer = (<span className="total-earned text-shadow" data-tip data-for="nft-minting" data-text-color="black">NFT is Ready
      <ReactTooltip id="nft-minting" place="top" type="light" effect="solid" className="nftTimerPopup">
      Mint your NFT by harvesting or unstaking</ReactTooltip></span>)
  } else {
    mintTimer = (<div><div className="small-text"><span className="white-color">NFT Timer</span></div>
      <span className="total-earned text-shadow" style={{fontSize: "20px"}}>{nextMint}</span></div>)
  }

  let data;
  if (nextMintRaw === 0) {
    data = (<div className='frank-card'>{mintButton}</div>)
  } else {
    data = (!amount.isZero() ?
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
    </div>)
  }

  return data
}

export default BuyFrank