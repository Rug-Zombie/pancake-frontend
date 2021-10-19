import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {
    Button,
    Card,
    CardFooter, CardHeader,
    Flex, Text, CardBody,
} from '@catacombs-libs/uikit'
import { BigNumber } from 'bignumber.js'
import { BIG_ZERO } from '../../../../../utils/bigNumber'
import { useRugRollContract, useZombie } from '../../../../../hooks/useContract'
import {account, zombieBalance} from "../../../../../redux/get";
import {APESWAP_EXCHANGE_URL} from "../../../../../config";
import {getAddress, getZombieAddress} from "../../../../../utils/addressHelpers";
import {getFullDisplayBalance} from "../../../../../utils/formatBalance";
import UnlockButton from "../../../../../components/UnlockButton";
import addresses from "../../../../../config/constants/contracts";


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
    const [allowance, setAllowance] = useState(BIG_ZERO)
    const rugRoll = useRugRollContract()
    const zombie = useZombie()

    const handleBurnZombie = () => {
        if (account()) {
            // catacombs.methods.UnlockCatacombs().send({ from: account() }).then(() => {
            //     setBurned(!burned)
            //     setUnlocked(true)
            //     onDismiss()
            // })
        }
    }

    const handleApproveAndBurnZombie = () => {
        if (account()) {
            zombie.methods.approve(getAddress(addresses.rugRoll), burnAmount).send({ from: account() }).then(() => {
                console.log('approved')
            })
        }
    }

    useEffect(() => {
        rugRoll.methods.getAmount().call()
            .then(
                res => {
                    console.log(res, ' <========= burn amount.')
                    setBurnAmount(new BigNumber(res))
                })
    }, [rugRoll.methods])

    return (
        <div>
            <Card className="card-active">
                <CardHeader style={{ background: "black"}}>
                    <Flex justifyContent="center" paddingTop="5%" style={{ color: "white!important", fontSize: "25px" }}>
                        Welcome to RugRoll...!!!
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Flex justifyContent="center" padding="5%"
                          style={{ color: "white!important", lineHeight: "normal", fontSize: "21px" }}>
                        Burn zombie worth 1 BUSD and deposit a rugged token to get another random rugged token.
                    </Flex>

                </CardBody>
                <CardFooter>
                    <StyledButton variant="secondary">
                        Approve rugged token
                    </StyledButton>
                    {
                        // eslint-disable-next-line no-nested-ternary
                        account() ? zombieBalance().isZero() ?
                            <Button mt='24px' as='a' href={`${APESWAP_EXCHANGE_URL}/swap?outputCurrency=${getZombieAddress()}`}
                                    variant='secondary' style={{ border: '2px solid white', width: '100%'}}>
                                <Text color='white'>Get ZMBE</Text>
                            </Button> :
                            <Button mt='24px' onClick={allowance.gte(burnAmount) ? handleBurnZombie : handleApproveAndBurnZombie} as='a' variant='secondary'
                                    style={{ border: '2px solid white', width: '100%'}}>
                                <Text color='white'>Burn {getFullDisplayBalance(burnAmount).toString()} ZMBE</Text>
                            </Button> :
                            <UnlockButton />
                    }
                    <StyledButton variant="secondary">
                        RUG ROLL
                    </StyledButton>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RugRollCard;