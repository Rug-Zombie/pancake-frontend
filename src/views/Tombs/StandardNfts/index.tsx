import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@rug-zombie-libs/uikit'
import artists from 'config/constants/artists'
import { tomboverlay } from 'redux/get'
import NftCard from './NftCard'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;
  & > div {
    grid-column: span 8;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const StandardNfts = () => {
    const basic = tomboverlay(0)

    return(
        <>
            <Cards>
                <NftCard rarity='Common' subtitle={basic.subtitle_common} name={basic.name_common} artist={artists.RugZombie} path={basic.path_common} type={basic.type_common} />
                <NftCard rarity='Uncommon' subtitle={basic.subtitle_uncommon} name={basic.name_uncommon} artist={artists.RugZombie} path={basic.path_uncommon} type={basic.type_uncommon} />
                <NftCard rarity='Rare' subtitle={basic.subtitle_rare} name={basic.name_rare} artist={artists.RugZombie} path={basic.path_rare} type={basic.type_rare} />
                <NftCard rarity='Legendary' subtitle='Tomb Specific Legendary' name='Legendary NFT' artist={artists.RugZombie} path='images/rugZombie/question mark.png' type='image' />
            </Cards>
        </>
    )
}

export default StandardNfts;