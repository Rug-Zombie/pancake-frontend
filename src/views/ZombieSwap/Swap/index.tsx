import React from 'react';
import PageHeader from 'components/PageHeader'
import Page from 'components/layout/Page'
import { AutoColumn } from 'components/Column'
import { AutoRow } from 'components/Row'
import { Flex, Heading, LinkExternal } from '@rug-zombie-libs/uikit'

const ZombieSwap = () => {

    return (
        <>
        <PageHeader background='#101820'>
            <Flex justifyContent='space-between' flexDirection={['column', null, 'row']}>
                <Flex flexDirection='column' mr={['8px', 0]}>
                    <Heading as='h1' size='xxl' color='secondary' mb='24px'>
                        Zombie Swap
                    </Heading>
                    <Heading size='md' color='text'>
                        Powered by AutoShark
                    </Heading>
                    <br/>
                    <LinkExternal href="https://rugzombie.medium.com/introducing-non-fungible-tombs-ce3ce445d4b">
                        Learn more about AutoShark Swap As A Service
                    </LinkExternal>
                </Flex>
            </Flex>
        </PageHeader>
        <Page>
            <AutoColumn gap='md'>
                
            </AutoColumn>
        </Page>
        </>    
    )
}

export default ZombieSwap;