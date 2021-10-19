/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import PageHeader from 'components/PageHeader'
import { Flex, Heading, LinkExternal } from '@rug-zombie-libs/uikit'
import { useDrFrankenstein } from 'hooks/useContract'
import { getDrFrankensteinAddress } from 'utils/addressHelpers'
import Page from '../../components/layout/Page'
import Table from './Table'
import '../Graves/Graves.Styles.css'
import { account, tombs } from '../../redux/get'
import { initialTombData, tomb } from '../../redux/fetch'
import { getId } from '../../utils'

const Tombs: React.FC = () => {
  const [update, setUpdate] = useState(false)
  const drFrankenstein = useDrFrankenstein()
  const [bnbInBusd,] = useState(0)
  const [updatePoolInfo, setUpdatePoolInfo] = useState(0)
  const [updateUserInfo, setUpdateUserInfo] = useState(0)

  useEffect(() => {
    if(updatePoolInfo === 0 && updateUserInfo === 0) {
      initialTombData(
        { update: updatePoolInfo, setUpdate: setUpdatePoolInfo },
        { update: updateUserInfo, setUpdate: setUpdateUserInfo },
      )
    }
  }, [drFrankenstein.methods, updatePoolInfo, updateUserInfo])

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
              Tombs
            </Heading>
            <Heading size='md' color='text'>
              Stake LP tokens to earn
            </Heading>
            <br/>
            <LinkExternal href="https://rugzombie.medium.com/migration-plan-to-apeswap-9ce001c85ab0">
              Learn more about the Apeswap Migration
            </LinkExternal>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <div>
          {tombs().sort((a, b) => a.id - b.id).map((t) => {
            return <Table pid={getId(t.pid)} updateResult={updateResult} updateAllowance={updateAllowance}
                          bnbInBusd={bnbInBusd}
                          isAllowance={isAllowance} key={t.id} />
          })}
        </div>
      </Page>
    </>
  )
}

export default Tombs
