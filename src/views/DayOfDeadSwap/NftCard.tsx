import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, LinkExternal } from '@rug-zombie-libs/uikit'
import nfts from 'redux/nfts'
import { Artist } from 'redux/types'
import artists from 'config/constants/artists'

const StyledNftCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  box-shadow: rgb(204 246 108) 0px 0px 20px;
`
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

interface NftCardProps {
    name: string;
    rznftid: number;
    dodnftid: number;
    artist: Artist;
}

const NftCard: React.FC<NftCardProps> = ({ name, rznftid, dodnftid, artist }: NftCardProps) => {
    const rznft = nfts.find(a => a.id === rznftid);
    const dodnft = nfts.find(a => a.id === dodnftid);

    return (
        <StyledNftCard>
            <CardBody>
                <Heading size='lg' mb='24px'>{name} NFT Swap</Heading>
                <Heading size='lg' mb='24px'>{dodnft.name}</Heading>
                <>
                <div className="table-bottom">
                    <div className="w-95 mx-auto mt-3">
                        <div className="rug-indetails">
                            <div className="direction-column imageColumn">
                                <div className="sc-iwajpm dcRUtg">
                                    {dodnft.type === 'image' 
                                    ? (<img src={dodnft.path} alt="NFT" className="sc-cxNHIi bjMxQn" />) 
                                    : (<video width="100%" autoPlay loop><source src={dodnft.path} type="video/mp4"/></video>)}
                                </div>
                            </div>
                            <div className="direction-column">
                                <span className="indetails-type">{dodnft.description}</span>
                                <span className="indetails-title">
                                    <LinkExternal bold={false} small href={artist.twitter ? artist.twitter : artist.instagram}>
                                        View NFT Artist
                                    </LinkExternal>
                                </span>
                                <br/>
                            </div>
                        </div>
                    </div>                    
                </div>
                </>
            </CardBody>
        </StyledNftCard>
    )
}

export default NftCard
