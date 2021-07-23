import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@rug-zombie-libs/uikit'
import FrankEarned from '../FrankEarned/FrankEarned'
import StartFarming from '../StartFarming/StartFarming'
import BuyFrank from '../BuyFrank/BuyFrank'
import RugInDetails from '../RugInDetails'
import TableList from './TableList'
import { useERC20 } from '../../../../hooks/useContract'
import { BIG_ZERO } from '../../../../utils/bigNumber'
import { getBalanceAmount } from '../../../../utils/formatBalance'


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
  subtitle: string,
  path: string,
  type: string,
  withdrawalCooldown: string,
  nftRevivalTime: string,
  rug: any,
  artist?: any,
  stakingToken: any,
  pid: number,
  result : any,
  poolInfo: any,
  pendingZombie: any
}

interface TableProps {
  details: TableData,
  isAllowance: boolean,
  bnbInBusd: number,
  updateAllowance: any,
  updateResult: any,
  zombieUsdPrice: number
}

const Table: React.FC<TableProps> = ({ details, isAllowance, bnbInBusd, updateAllowance, updateResult, zombieUsdPrice }: TableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openInDetails = (data) => {
    setIsOpen(data);
  }

  const stakingTokenContract = useERC20(details.stakingToken)
  const [totalStakingTokenSupply, setTotalStakingTokenSupply] = useState(BIG_ZERO)

  useEffect(() => {
    stakingTokenContract.methods.totalSupply().call()
      .then(res => {
        setTotalStakingTokenSupply(getBalanceAmount(res))
      })
  })

  const TableListProps = {
    "handler": openInDetails,
    zombieUsdPrice,
    totalStakingTokenSupply,
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
                <FrankEarned pid={details.pid} pendingZombie={details.pendingZombie}/>
                <StartFarming updateResult={updateResult} updateAllowance={updateAllowance} details={details} isAllowance={isAllowance}  />
                <BuyFrank details={details} />
              </div>
              <RugInDetails bnbInBusd={bnbInBusd} details={details} totalStakingTokenSupply={totalStakingTokenSupply} zombieUsdPrice={zombieUsdPrice} />
            </div>
          </div>
        ) : null}
      </div>
    </TableCards>
  )
}

export default Table
