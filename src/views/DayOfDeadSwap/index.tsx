import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, BaseLayout } from '@rug-zombie-libs/uikit'
import PageHeader from 'components/PageHeader'
import artists from 'config/constants/artists'
import Page from 'components/layout/Page'
import NftCard from './NftCard'

const TableCards = styled(BaseLayout)`
  width: 100%;

  & > div {
    grid-column: span 12;
    width: 80%;
  }
`
const DisplayFlex = styled(BaseLayout)`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  grid-gap: 0px;
}`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const DayOfDeadSwap: React.FC = () => {
    return (
        <>
            <PageHeader background='#101820'>
                <Flex justifyContent='space-between' flexDirection={['column', null, 'row']}>
                    <Flex flexDirection='column' mr={['8px', 0]}>
                        <Heading as='h1' size='xxl' color='secondary' mb='24px'>
                            Day of the Dead NFT Swap
                        </Heading>
                        <Heading size='md' color='text'>
                            Convert your Rug Zombie NFTs into special edition Dead of the Dead NFTs
                        </Heading>
                    </Flex>
                </Flex>
            </PageHeader>
            <Page>
                <NftCard name='Common' artist={artists.RugZombie} rznftid={6} dodnftid={0} />
                <NftCard name='Unommon' artist={artists.RugZombie} rznftid={19} dodnftid={1} />
                <NftCard name='Rare' artist={artists.RugZombie} rznftid={29} dodnftid={2} />
            </Page>
        </>
    )
}

export default DayOfDeadSwap