/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import PageHeader from 'components/PageHeader'
import { Flex, Heading, LinkExternal } from '@rug-zombie-libs/uikit'
import { useDrFrankenstein, useMultiCall } from 'hooks/useContract'
import { getDrFrankensteinAddress } from 'utils/addressHelpers'
import Page from '../../components/layout/Page'
import Table from './Table'
import '../Graves/Graves.Styles.css'
import { account, tombs } from '../../redux/get'
import { initialTombData, tomb, initialTombOverlayData } from '../../redux/fetch'
import { getId } from '../../utils'

const Tombs: React.FC = () => {
  const [update, setUpdate] = useState(false)
  const drFrankenstein = useDrFrankenstein()
  const [updatePoolInfo, setUpdatePoolInfo] = useState(0)
  const [updateUserInfo, setUpdateUserInfo] = useState(0)
  const [updateOverlayPoolInfo, setUpdateOverlayPoolInfo] = useState(false)
  const [updateOverlayUserInfo, setUpdateOverlayUserInfo] = useState(false)

  useEffect(() => {
    if(updatePoolInfo === 0 && updateUserInfo === 0) {
      initialTombData(
        { update: updatePoolInfo, setUpdate: setUpdatePoolInfo },
        { update: updateUserInfo, setUpdate: setUpdateUserInfo },
      )
    }
  }, [updatePoolInfo, updateUserInfo])

  useEffect(() => {
    initialTombOverlayData(
      { update: updateOverlayPoolInfo, setUpdate: setUpdateOverlayPoolInfo },
      { update: updateOverlayUserInfo, setUpdate: setUpdateOverlayUserInfo },
    )
  }, [updateOverlayPoolInfo, updateOverlayUserInfo])

  const [isAllowance, setIsAllowance] = useState(false)
  const updateResult = (pid) => {
    tomb(
      pid,
      null,
      null,
      { update, setUpdate },
    )
  }

  const updateAllowance = (tokenContact, pid) => {
    tokenContact.methods.allowance(account(), getDrFrankensteinAddress()).call()
      .then(res => {
        if (parseInt(res.toString()) !== 0) {
          setIsAllowance(true)
        } else {
          setIsAllowance(false)
        }
        updateResult(pid)
      })
  }

  return (
    <>
      <PageHeader background='#101820'>
        <Flex justifyContent='space-between' flexDirection={['column', null, 'row']}>
          <Flex flexDirection='column' mr={['8px', 0]}>
            <Heading as='h1' size='xxl' color='secondary' mb='24px'>
              NFTombs
            </Heading>
            <Heading size='md' color='text'>
              Stake LP tokens to earn ZMBE and NFTs
            </Heading>
            <br/>
            <LinkExternal href="https://rugzombie.medium.com/introducing-non-fungible-tombs-ce3ce445d4b">
              Learn more about our NFTombs upgrade
            </LinkExternal>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <div>
          {tombs().sort((a, b) => a.id - b.id).map((t) => {
            return <Table pid={getId(t.pid)} updateResult={updateResult} updateAllowance={updateAllowance}
                          isAllowance={isAllowance} key={t.id} />
          })}
        </div>
      </Page>
    </>
  )
}

export default Tombs
