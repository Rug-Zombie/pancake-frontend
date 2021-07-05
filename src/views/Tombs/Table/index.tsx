import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@rug-zombie-libs/uikit'
import { BigNumber } from 'bignumber.js'
import FrankEarned from '../FrankEarned/FrankEarned'
import StartFarming from '../StartFarming/StartFarming'
import BuyFrank from '../BuyFrank/BuyFrank'
import RugInDetails from '../RugInDetails'
import TableList from './TableList'
import { useLpTokenPrice } from '../../../state/hooks'
import { useERC20 } from '../../../hooks/useContract'
import { getAddress, getDrFrankensteinAddress } from '../../../utils/addressHelpers'
import { getBalanceAmount } from '../../../utils/formatBalance'
import { BIG_ZERO } from '../../../utils/bigNumber'


const TableCards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;

  & > div {
    grid-column: span 12;
    width: 100%;
  }
`

interface TableData {
  id: number,
  name: string,
  withdrawalCooldown: string,
  artist?: any,
  stakingToken: any,
  pid: number,
  result : any,
  poolInfo: any,
  pendingZombie: any
  lpAddresses:any,
  quoteToken:any,
  token:any
}

interface TableProps {
  details: TableData,
  isAllowance: boolean,
  bnbInBusd: number,
  updateAllowance:any,
  updateResult:any,
  reservesUsd: any
}

const Table: React.FC<TableProps> = ({ details, isAllowance, bnbInBusd, updateResult, updateAllowance, reservesUsd }: TableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lpTokenPrice, setLpTokenPrice] = useState(0)
  const lpTokenContract = useERC20(getAddress(details.lpAddresses))
  const [totalLpTokenStaked, setTotalLpTokenStaked] = useState(BIG_ZERO)

  const openInDetails = (data) => {
    setIsOpen(data);
  }

  useEffect(() => {
    lpTokenContract.methods.totalSupply().call()
      .then((resSupply) => {
        const lpSupply = getBalanceAmount(resSupply)
        lpTokenContract.methods.balanceOf(getDrFrankensteinAddress()).call()
          .then((resStaked) => {
            setLpTokenPrice((reservesUsd[0].plus(reservesUsd[1])).div(lpSupply))
            setTotalLpTokenStaked(getBalanceAmount(resStaked))
          })

      })
  }, [lpTokenContract.methods, reservesUsd])

  const TableListProps = {
    "handler": openInDetails,
    lpTokenPrice,
    totalLpTokenStaked,
    details,
  }

  return (
    <TableCards>
      <div className="test-card active-1">
        <div className="table-top">
          <TableList {...TableListProps} />
        </div>
        {isOpen ? (
          <div className="table-bottom">
            <div className="w-95 mx-auto mt-3">
              <div className="flex-grow">
                <FrankEarned pid={details.pid} pendingZombie={details.pendingZombie} lpTokenPrice={lpTokenPrice} totalLpTokenStaked={totalLpTokenStaked}/>
                <StartFarming updateAllowance={updateAllowance} updateResult={updateResult} details={details} isAllowance={isAllowance} />
                <BuyFrank details={details}/>
              </div>
              <RugInDetails bnbInBusd={bnbInBusd} details={details} totalLpTokensStaked={totalLpTokenStaked} lpTokenPrice={lpTokenPrice}/>
            </div>
          </div>
        ) : null}
      </div>
    </TableCards>
  )
}

export default Table
