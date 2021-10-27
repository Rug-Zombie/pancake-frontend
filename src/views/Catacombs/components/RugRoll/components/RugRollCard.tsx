import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  Card,
  CardFooter, CardHeader,
  Flex, Text, CardBody,
} from '@catacombs-libs/uikit'
import { BigNumber } from 'bignumber.js'
import ruggedTokens from 'config/constants/ruggedTokens'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { ethers } from 'ethers'
import { BIG_ZERO } from '../../../../../utils/bigNumber'
import { useRugRollContract, useZombie } from '../../../../../hooks/useContract'
import { account, zombieBalance } from '../../../../../redux/get'
import { APESWAP_EXCHANGE_URL } from '../../../../../config'
import { getAddress, getRugRollAddress, getZombieAddress } from '../../../../../utils/addressHelpers'
import UnlockButton from '../../../../../components/UnlockButton'
import addresses from '../../../../../config/constants/contracts'
import '../RugRoll.Styles.css'
import tokens from '../../../../../config/constants/tokens'
import { getBep20Contract } from '../../../../../utils/contractHelpers'
import useWeb3 from '../../../../../hooks/useWeb3'
import useToast from '../../../../../hooks/useToast'
import { tokenByAddress } from '../../../../../utils/tokenHelper'


const StyledButton = styled(Button)`
  border: 2px solid white;
  color: white;
  width: 100%;
  margin-top: 24px;
  margin-right: 5px;
  margin-left: 5px;
`

interface ViewCardProps {
  onDismiss?: () => void,
}

const RugRollCard: React.FC<ViewCardProps> = () => {
  const web3 = useWeb3()
  const { toastSuccess } = useToast()
  const [burnAmount, setBurnAmount] = useState(BIG_ZERO)
  const rugRollContract = useRugRollContract()
  const zombie = useZombie()
  const [zombieApproval, setZombieApproval] = useState(BIG_ZERO)
  const [ruggedToken, setRuggedToken] = useState(ruggedTokens[0])
  const [rugApproved, setRugApproved] = useState(false)
  const wallet = account()
  const selectedRug = tokens[ruggedToken]

  const handleApproveZombie = () => {
    if (account()) {
      zombie.methods.approve(getAddress(addresses.rugRoll), ethers.constants.MaxUint256)
        .send({ from: account() }).then(() => {
        // update
        toastSuccess('ZMBE Approved')
      })
    }
  }

  useEffect(() => {
    if (wallet) {
      zombie.methods.allowance(account(), getRugRollAddress())
        .call().then(res => {
        setZombieApproval(new BigNumber(res.toString()))
      })
    }
  }, [burnAmount, wallet, zombie.methods, ruggedToken])

  useEffect(() => {
    rugRollContract.methods.getAmount().call()
      .then(
        res => {
          setBurnAmount(new BigNumber(res))
        })
  }, [rugRollContract.methods])

  useEffect(() => {
    if (wallet) {
      getBep20Contract(getAddress(selectedRug.address)).methods.allowance(wallet, getRugRollAddress())
        .call().then(res => {
        if (new BigNumber(res.toString()).gt(0)) {
          setRugApproved(true)
        }
      })
    }
  }, [selectedRug.address, wallet])

  const selectRuggedToken = (event) => {
    setRuggedToken(event.target.value)
    setRugApproved(false)
  }


  function ApproveRuggedToken() {
    getBep20Contract(getAddress(tokens[ruggedToken].address), web3).methods.approve(getRugRollAddress(), ethers.constants.MaxUint256)
      .send({ from: account() }).then(() => {
      setRugApproved(true)
      toastSuccess(`${selectedRug.symbol} Approved`)

    })
  }

  const rugRoll = () => {
    rugRollContract.methods.rugRoll(getAddress(selectedRug.address))
      .send({ from: account() }).then(res => {
        const receivedToken = tokenByAddress(res.events.Swapped.returnValues._returnedRug)
        toastSuccess(`Received ${receivedToken.symbol}`)
    })
  }

  // @ts-ignore
  return (
    <div>
      <Card className='card-active'>
        <CardHeader style={{ background: 'black', padding: '15px' }}>
          <Flex justifyContent='center' paddingTop='3%' style={{ color: 'white!important', fontSize: '25px' }}>
            Welcome to RugRoll...!!!
          </Flex>
        </CardHeader>
        <CardBody style={{ padding: '18px 30px' }}>
          <Flex justifyContent='center'
                style={{ color: 'white!important', lineHeight: 'normal', fontSize: '18px' }}>
            Burn {getFullDisplayBalance(burnAmount)} ZMBE (~$1) and deposit a rugged token to get another random rugged
            token.
          </Flex>
        </CardBody>
        <CardFooter>
          <Text pb='10px'>Select rugged token : </Text>
          <select onChange={selectRuggedToken} className='SelectRuggedToken'>
            {
              ruggedTokens.map(rugSymbol => {
                const rug = tokens[rugSymbol]
                return (
                  <option value={rugSymbol}>
                    {rug.symbol}
                  </option>
                )
              })
            }
          </select>
          {
            // eslint-disable-next-line no-nested-ternary
            account() ? zombieBalance().isZero() ?
              <Button mt='24px' as='a'
                      href={`${APESWAP_EXCHANGE_URL}/swap?outputCurrency=${getZombieAddress()}`}
                      variant='secondary' style={{ border: '2px solid white', width: '100%' }}>
                <Text color='white'>Get ZMBE</Text>
              </Button> : zombieApproval.isZero() ?
                <Button mt='24px' mr='5px'
                        onClick={handleApproveZombie}
                        as='a' variant='secondary'
                        style={{ border: '2px solid white', width: '100%' }}>
                  <Text color='white'> Approve ZMBE</Text>
                </Button> : null :
              <UnlockButton />
          }
          <Flex>
            {!rugApproved ? <StyledButton variant='secondary' onClick={ApproveRuggedToken}>
              Approve {tokens[ruggedToken].symbol}
            </StyledButton> : null}
            <StyledButton variant='secondary' onClick={rugRoll}>
              RUG ROLL
            </StyledButton>
          </Flex>

        </CardFooter>
      </Card>
    </div>
  )
}

export default RugRollCard
