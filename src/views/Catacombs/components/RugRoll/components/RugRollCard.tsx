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
    const [receivedTokenText, setReceivedTokenText] = useState("Not rolled yet.")
    const rugRollContract = useRugRollContract()
    const zombie = useZombie()
    const RuggedTokens = ruggedTokens()

    const [approveZombieText, setApproveZombieText] = useState("Approve ZMBE")
    const [approveZombieButton, setApproveZombieButton] = useState(true)

    const [ruggedToken, setRuggedToken] = useState(false)
    const [approveRuggedTokenText, setApproveRuggedTokenText] = useState("Approve rugged token")

    const [rugRollText, setRugRollText] = useState("RUG ROLL")

    const handleApproveZombie = (event) => {
        setApproveZombieText("Approving transaction....")
        if (account()) {
            zombie.methods.approve(getAddress(addresses.rugRoll), burnAmount).send({from: account()}).then((r) => {
                console.log(r)
                setApproveZombieText('ZMBE approved')
                // setApproveZombieButton(false)
            })
        }
    }

    useEffect(() => {
        zombie.methods.allowance(account(), getRugRollAddress()).call().then(res => {
            if (res >= burnAmount) {
                setApproveZombieButton(false)
                setApproveZombieText("ZMBE approved")
            }
        })
    })

    useEffect(() => {
        rugRollContract.methods.getAmount().call()
            .then(
                res => {
                    console.log(res, " <======= burn amount")
                    setBurnAmount(new BigNumber(res))
                })
    }, [rugRollContract.methods])

    function CheckRuggedTokenAlreadyApproved(contractAddress) {
        useERC20(contractAddress).methods.allowance(account(), getRugRollAddress()).call().then(res => {
            if (res >= BIG_TEN.pow(18)) {
                setRuggedToken(false)
                setApproveRuggedTokenText("Rugged token approved")
            }
        })
    }

    const selectRuggedToken = (event) => {
        setRuggedToken(event.target.value)
        CheckRuggedTokenAlreadyApproved(event.target.value)
    }

    function ApproveRuggedToken() {
        setApproveRuggedTokenText("Confirming transaction...")
        useERC20(String(ruggedToken)).methods.approve(getRugRollAddress(), BIG_TEN.pow(18)).send({from: account()}).then(res => {
            // console.log(res)
            if (res) {
                setApproveRuggedTokenText("RuggedTokenApproved")
            }
        })
    }

    const rugRoll = (event) => {
        setRugRollText("Confirming transaction...")
        rugRollContract.methods.rugRoll().send({from: account()}).then(res => {
            // console.log(res)
            setRugRollText("RUG ROLL")
            setApproveZombieText("Approve ZMBE")
            setApproveRuggedTokenText("Approve rugged token")
            setReceivedTokenText(res)
        })
    }

    // @ts-ignore
    return (
        <div>
            <Card className="card-active">
                <CardHeader style={{background: "black", padding: "15px"}}>
                    <Flex justifyContent="center" paddingTop="3%" style={{color: "white!important", fontSize: "25px"}}>
                        Welcome to RugRoll...!!!
                    </Flex>
                </CardHeader>
                <CardBody style={{padding: "18px 30px"}}>
                    <Flex justifyContent="center"
                          style={{color: "white!important", lineHeight: "normal", fontSize: "21px"}}>
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
                                        <img src={`images/tokens/${token.symbol}.png`} alt="rugicon" className="icon"/>
                                        {token.symbol}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <StyledButton variant="secondary" onClick={ApproveRuggedToken}>
                        {approveRuggedTokenText}
                    </StyledButton>
                    {
                        // eslint-disable-next-line no-nested-ternary
                        account() ? zombieBalance().isZero() ?
                            <Button mt='24px' as='a'
                                    href={`${APESWAP_EXCHANGE_URL}/swap?outputCurrency=${getZombieAddress()}`}
                                    variant='secondary' style={{border: '2px solid white', width: '100%'}}>
                                <Text color='white'>Get ZMBE</Text>
                            </Button> :
                            <Button mt='24px' disabled={approveZombieButton}
                                    onClick={handleApproveZombie}
                                    as='a' variant='secondary'
                                    style={{border: '2px solid white', width: '100%'}}>
                                <Text color='white'>{approveZombieText}</Text>
                            </Button> :
                            <UnlockButton/>
                    }
                    <Text mt="24px">You received : &nbsp;{receivedTokenText}</Text>
                    <StyledButton variant="secondary" onClick={rugRoll}>
                        {rugRollText}
                    </StyledButton>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RugRollCard;