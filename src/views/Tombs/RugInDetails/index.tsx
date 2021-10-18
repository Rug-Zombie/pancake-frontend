import { LinkExternal } from '@rug-zombie-libs/uikit'
import tokens from 'config/constants/tokens'
import { useDrFrankenstein, useTombOverlay } from 'hooks/useContract'
import React, { useEffect, useState } from 'react'
import { getFullDisplayBalance } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import numeral from 'numeral'
import Video from 'components/Video'
import { Carousel } from 'react-responsive-carousel'
import { nftById, tombByPid, tombOverlayByPid } from '../../../redux/get'
import { getAddress } from '../../../utils/addressHelpers'
import { APESWAP_ADD_LIQUIDITY_URL, AUTOSHARK_ADD_LIQUIDITY_URL, BASE_ADD_LIQUIDITY_URL } from '../../../config'
import { getId } from '../../../utils'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

interface RugInDetailsProps {
  pid: number,
  lpTokenPrice: BigNumber,
  tvl: BigNumber,
}

const RugInDetails: React.FC<RugInDetailsProps> = ({ pid, tvl, }) => {
  const tomb = tombByPid(pid)

  const { id, name, withdrawalCooldown, exchange, overlayId, poolInfo: { allocPoint } } = tomb
  const overlay = tombOverlayByPid(getId(overlayId))
  let nftombInfoDiv = null
  let nftombMintingTimeDiv = null
  if (overlay) {
    const { commonId, uncommonId, rareId, legendaryId, mintingTime } = overlay

    const commonNft = nftById(commonId)
    const uncommonNft = nftById(uncommonId)
    const rareNft = nftById(rareId)
    const legendaryNft = nftById(legendaryId)
    const nfts = [legendaryNft, rareNft, uncommonNft, commonNft]
    console.log('refresh')
    nftombInfoDiv = <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop className='direction-column imageColumn'>
      {nfts.map(nft => <div key={nft.id}>
        <div>
          <span className='indetails-type'>{nft.name}</span>

          <div className='sc-iwajpm dcRUtg'>
            {nft.type === 'image' ? (
              <img src={nft.path} alt='NFT' className='sc-cxNHIi bjMxQn' />
            ) : (
              <Video path={nft.path} />
            )}
          </div>
        </div>
        <div className='direction-column'>
          <span className='indetails-title'>
          <LinkExternal bold={false} small href={nft.artist}>View NFT Artist</LinkExternal>
        </span>
        </div>
      </div>)}
    </Carousel>

    nftombMintingTimeDiv = <span className='indetails-title'>
          NFT Minting Time:
          <span className='indetails-value'>{mintingTime}</span>
        </span>
  }


  // eslint-disable-next-line no-nested-ternary
  const quoteTokenUrl = tomb.quoteToken === tokens.wbnb ? tomb.exchange === 'Apeswap' ? 'ETH' : 'BNB' : getAddress(tomb.quoteToken.address)

  let addLiquidityUrl

  if (tomb.exchange === 'Apeswap') {
    addLiquidityUrl = `${APESWAP_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  } else if (tomb.exchange === 'Autoshark') {
    addLiquidityUrl = `${AUTOSHARK_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  } else {
    addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${quoteTokenUrl}/${getAddress(tomb.token.address)}`
  }

  return (
    <div key={id} className='rug-indetails'>
      {nftombInfoDiv}
      <div className='direction-column'>
        <span className='indetails-type'>{name} Tomb</span><br />
        <span className='indetails-title'>
          Withdrawal Cooldown:
          <span className='indetails-value'>{withdrawalCooldown}</span>
        </span>
        {nftombMintingTimeDiv}
        <span className='indetails-title'>
          Weight:
          <span className='indetails-value'>{allocPoint.div(100).toString()}X</span>
        </span>
        <span className='indetails-title'>
          Tomb TVL:
          <span className='indetails-value'>{numeral(tvl).format('($ 0.00 a)')}</span>
        </span>
        <LinkExternal href={addLiquidityUrl} className='indetails-title'>
          Pair on {exchange}
        </LinkExternal>
      </div>
    </div>
  )
}

export default RugInDetails
