import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, LinkExternal } from '@rug-zombie-libs/uikit'
import Video from 'components/Video'
import { Artist } from 'redux/types'

const StyledNftCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

interface NftCardProps {
    path: string,
    type: string,
    rarity: string,
    name: string,
    subtitle: string,
    artist: Artist
}

const NftCard: React.FC<NftCardProps> = ({ path, type, rarity, name, subtitle, artist }) => {
    return(
        <StyledNftCard>
            <CardBody>
                <div className="rug-indetails">
                    <div className="direction-column imageColumn">
                        <div className="sc-iwajpm dcRUtg">
                            {type === 'image' ? (<img src={path} alt="NFT" className="sc-cxNHIi bjMxQn" max-height='150' max-width='150' />) : (<Video max-width='150' max-height='150' path={path}/>)}
                        </div>
                    </div>
                    <div className="direction-column">
                        <span className="indetails-type">{rarity}</span>
                        <span className="indetails-type">{name}</span>
                        <span className="indetails-title">
                            <LinkExternal bold={false} small href={artist.twitter}>View NFT Artist</LinkExternal>
                        </span>
                    </div>
                    <div className="direction-column">
                        <span className="indetails-title">{subtitle}</span>
                    </div>
                </div>
            </CardBody>
        </StyledNftCard>
    )
}

export default NftCard