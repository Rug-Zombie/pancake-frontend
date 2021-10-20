import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {
    Button,
    Card,
    CardFooter, CardHeader,
    Flex, Text, CardBody,
} from '@catacombs-libs/uikit'
import {BigNumber} from 'bignumber.js'
import {BIG_TEN, BIG_ZERO} from '../../../../../utils/bigNumber'
import {useRugRollContract, useZombie, useERC20} from '../../../../../hooks/useContract'
import {account, zombieBalance, ruggedTokens} from "../../../../../redux/get";
import {APESWAP_EXCHANGE_URL} from "../../../../../config";
import {getAddress, getRugRollAddress, getZombieAddress} from "../../../../../utils/addressHelpers";
import {getFullDisplayBalance} from "../../../../../utils/formatBalance";
import UnlockButton from "../../../../../components/UnlockButton";
import addresses from "../../../../../config/constants/contracts";
import '../RugRoll.Styles.css'


const StyledButton = styled(Button)`
    border: 2px solid white;
    color: white;
    width: 100%;
    margin-top: 24px;
`

interface ViewCardProps {
    onDismiss?: () => void,
}

const RugRollCard: React.FC<ViewCardProps> = () => {
    const [burnAmount, setBurnAmount] = useState(BIG_ZERO)
    const [burned, setBurned] = useState(false)
    const [receivedToken, setReceivedToken] = useState(false)
    const [ruggedToken, setRuggedToken] = useState(false)
    const [allowance, setAllowance] = useState(BIG_ZERO)
    const rugRollContract = useRugRollContract()
    const zombie = useZombie()
    const RuggedTokens = ruggedTokens()

    const handleApproveZombie = () => {
        if (account()) {
            zombie.methods.approve(getAddress(addresses.rugRoll), burnAmount).send({from: account()}).then(() => {
                console.log('approved')
            })
        }
    }

    useEffect(() => {
        rugRollContract.methods.getAmount().call()
            .then(
                res => {
                    setBurnAmount(new BigNumber(res))
                })
    }, [rugRollContract.methods])

    const selectRuggedToken = (event) => {
        setRuggedToken(event.target.value);
    }

    const approveRuggedToken = (event) => {
        console.log(ruggedToken)
        useERC20(String(ruggedToken)).methods.approve(getRugRollAddress(), BIG_TEN.pow(18)).send({from: account()}).then(res => {
            console.log(res)
        })
    }

    const rugRoll = (event) => {
        console.log(ruggedToken)
        console.log(burnAmount)
        rugRollContract.methods.rugRoll().send({from: account()}).then(res=> {
            console.log(res)
        })
    }

    // @ts-ignore
    return (
        <div>
            <Card className="card-active">
                <CardHeader style={{background: "black", padding: "15px"}} >
                    <Flex justifyContent="center" paddingTop="3%" style={{color: "white!important", fontSize: "25px"}}>
                        Welcome to RugRoll...!!!
                    </Flex>
                </CardHeader>
                <CardBody style={{padding: "18px 30px"}}>
                    <Flex justifyContent="center" style={{color: "white!important", lineHeight: "normal", fontSize: "21px"}}>
                        Burn zombie worth 1 BUSD and deposit a rugged token to get another random rugged token.
                    </Flex>
                </CardBody>
                <CardFooter>
                    <Text>Select rugged token : </Text>
                    <select onChange={selectRuggedToken} className="SelectRuggedToken">
                        {
                            RuggedTokens.map(token => {
                                return (
                                    <option value={token.address}>
                                        <img src={`images/tokens/${token.symbol}.png`} alt="rugicon" className="icon" />
                                        {token.symbol}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <StyledButton variant="secondary" onClick={approveRuggedToken}>
                        Approve rugged token
                    </StyledButton>
                    {
                        // eslint-disable-next-line no-nested-ternary
                        account() ? zombieBalance().isZero() ?
                            <Button mt='24px' as='a'
                                    href={`${APESWAP_EXCHANGE_URL}/swap?outputCurrency=${getZombieAddress()}`}
                                    variant='secondary' style={{border: '2px solid white', width: '100%'}}>
                                <Text color='white'>Get ZMBE</Text>
                            </Button> :
                            <Button mt='24px'
                                    onClick={allowance.gte(burnAmount) ? null : handleApproveZombie}
                                    as='a' variant='secondary'
                                    style={{border: '2px solid white', width: '100%'}}>
                                <Text color='white'>Burn {getFullDisplayBalance(burnAmount).toString()} ZMBE</Text>
                            </Button> :
                            <UnlockButton/>
                    }
                    {
                        receivedToken ? <Text mt="24px">You received&nbsp;{receivedToken}</Text>
                            : <Text mt="24px">You received&nbsp;<Text color="gray">Not rolled yet.</Text></Text>
                    }
                    {
                        receivedToken ? <img src={`images/tokens/${receivedToken}.png`} alt="rugicon" className="icon" />
                            : <></>
                    }
                    <StyledButton variant="secondary" onClick={rugRoll}>
                        RUG ROLL
                    </StyledButton>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RugRollCard;