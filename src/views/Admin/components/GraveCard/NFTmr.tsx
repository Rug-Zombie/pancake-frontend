import React from 'react'
import { Flex, TooltipText, IconButton, useModal, CalculateIcon, Skeleton, useTooltip } from '@rug-zombie-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { getPoolApr } from 'utils/apr'
import { getAddress } from 'utils/addressHelpers'
import { tokenEarnedPerThousandDollarsCompounding, getRoi } from 'utils/compoundApyHelpers'
import { useGetApiPrice } from 'state/hooks'
import Balance from 'components/Balance'
import ApyCalculatorModal from 'components/ApyCalculatorModal'
import { Pool } from 'state/types'
import { BASE_EXCHANGE_URL } from 'config'

interface NFTmrRowProps {
  pool: Pool
  stakingTokenPrice: number
  isAutoVault?: boolean
  compoundFrequency?: number
  performanceFee?: number
}
// NFT Minting Rate Row
const NFTmrRow: React.FC<NFTmrRowProps> = ({
  pool,
  stakingTokenPrice,
  isAutoVault = false,
  compoundFrequency = 1,
  performanceFee = 0,
}) => {
  const { t } = useTranslation()
  const { stakingToken, earningToken, totalStaked, isFinished, tokenPerBlock } = pool
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('NFT Mint Rate, is the number of NFT\'s created for this Grave every block.'),
    { placement: 'bottom-end' },
  )

  const earningTokenPrice = useGetApiPrice(earningToken.address ? getAddress(earningToken.address) : '')
  const apr = getPoolApr(
    stakingTokenPrice,
    earningTokenPrice,
    getBalanceNumber(totalStaked, stakingToken.decimals),
    parseFloat(tokenPerBlock),
  )

  // // special handling for tokens like tBTC or BIFI where the daily token rewards for $1000 dollars will be less than 0.001 of that token
  const isHighValueToken = Math.round(earningTokenPrice / 1000) > 0
  const roundingDecimals = isHighValueToken ? 4 : 2

  const earningsPercentageToDisplay = () => {
    if (isAutoVault) {
      const oneThousandDollarsWorthOfToken = 1000 / earningTokenPrice
      const tokenEarnedPerThousand365D = tokenEarnedPerThousandDollarsCompounding({
        numberOfDays: 365,
        farmApr: apr,
        tokenPrice: earningTokenPrice,
        roundingDecimals,
        compoundFrequency,
        performanceFee,
      })
      return getRoi({
        amountEarned: tokenEarnedPerThousand365D,
        amountInvested: oneThousandDollarsWorthOfToken,
      })
    }
    return apr
  }

  const apyModalLink =
    stakingToken.address &&
    `${BASE_EXCHANGE_URL}/#/swap?outputCurrency=${stakingToken.address[process.env.REACT_APP_CHAIN_ID]}`

  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      tokenPrice={earningTokenPrice}
      apr={apr}
      linkLabel={`${t('Get')} ${stakingToken.symbol}`}
      linkHref={apyModalLink || BASE_EXCHANGE_URL}
      earningTokenSymbol={earningToken.symbol}
      roundingDecimals={isHighValueToken ? 4 : 2}
      compoundFrequency={compoundFrequency}
      performanceFee={performanceFee}
    />,
  )

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef}>{t('NFT Mint Rate')}:</TooltipText>
      {isFinished || !apr ? (
        <Skeleton width="82px" height="32px" />
      ) : (
        <Flex alignItems="center">
          N/A
          <IconButton onClick={onPresentApyModal} variant="text" scale="sm">
            <CalculateIcon color="textSubtle" width="18px" />
          </IconButton>
        </Flex>
      )}
    </Flex>
  )
}

export default NFTmrRow