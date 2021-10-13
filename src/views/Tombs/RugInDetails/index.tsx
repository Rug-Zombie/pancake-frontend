import { LinkExternal } from '@rug-zombie-libs/uikit'
import tokens from 'config/constants/tokens';
import { useDrFrankenstein, useTombOverlay } from 'hooks/useContract'
import React, { useEffect, useState } from 'react'
import { getFullDisplayBalance } from 'utils/formatBalance';
import BigNumber from 'bignumber.js';
import numeral from 'numeral'
import Video from 'components/Video'
import { tombByPid, tombOverlayByPid } from '../../../redux/get'
import { getAddress } from '../../../utils/addressHelpers'
import { APESWAP_ADD_LIQUIDITY_URL, AUTOSHARK_ADD_LIQUIDITY_URL, BASE_ADD_LIQUIDITY_URL } from '../../../config'

interface RugInDetailsProps {
  pid: number,
  bnbInBusd: number,
  lpTokenPrice: BigNumber,
  tvl: BigNumber,
  overlayId: number
}

const RugInDetails: React.FC<RugInDetailsProps> = ({
  pid, tvl, lpTokenPrice, overlayId
}) => {
  const drFrankenstein = useDrFrankenstein();
  const [unlockFee, setUnlockFee] = useState(0);
  const tomb = tombByPid(pid)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const overlay = tombOverlayByPid(tomb.overlayId[chainId])

  const { id, name, withdrawalCooldown, exchange, poolInfo: { allocPoint } } = tomb
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
    drFrankenstein.methods.unlockFeeInBnb(pid).call()
      .then((res) => {
        setUnlockFee(parseFloat(getFullDisplayBalance(new BigNumber(res), tokens.zmbe.decimals, 4)));
      })
  })

  return (
    <div key={id} className="rug-indetails">
      <div className="direction-column imageColumn">
        <div className="sc-iwajpm dcRUtg">
          {overlay.type_legendary === 'image' ? (
            <img src={overlay.path_legendary} alt="NFT" className="sc-cxNHIi bjMxQn" />
          ) : (
              <Video path={overlay.path_legendary}/>
            )}
        </div>
      </div>
      <div className="direction-column">
        <span className="indetails-type">{overlay.name_legendary}</span>
        <span className="indetails-title">{overlay.subtitle_legendary}</span>
        <span className="indetails-title">
          <LinkExternal bold={false} small href={overlay.artist_legendary.twitter}>View NFT Artist</LinkExternal>
        </span>
      </div>
      <div className="direction-column">
        <span className="indetails-type">{name} Tomb</span><br/>
        <span className="indetails-title">
          Withdrawal Cooldown:
          <span className="indetails-value">{withdrawalCooldown}</span>
        </span>
        <span className="indetails-title">
          NFT Minting Time:
          <span className="indetails-value">{overlay.mintingTime}</span>
        </span>
        <span className="indetails-title">
          Weight:
          <span className="indetails-value">{allocPoint.div(100).toString()}X</span>
        </span>
        <span className="indetails-title">
          Tomb TVL:
          <span className="indetails-value">{numeral(tvl).format('($ 0.00 a)')}</span>
        </span>
        <LinkExternal href={addLiquidityUrl} className="indetails-title">
          Pair on {exchange}
        </LinkExternal>
      </div>
    </div>
  )
}

export default RugInDetails
