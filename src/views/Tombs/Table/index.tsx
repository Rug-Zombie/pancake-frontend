import React, { useState } from 'react';
import styled from 'styled-components'
import { BaseLayout } from '@rug-zombie-libs/uikit'
import FrankEarned from '../FrankEarned/FrankEarned'
import StartFarming from '../StartFarming/StartFarming'
import BuyFrank from '../BuyFrank/BuyFrank'
import RugInDetails from '../RugInDetails'
import TableList from './TableList'


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
  lpAddresses:any
}

interface TableProps {
  details: TableData,
  isAllowance: boolean,
  bnbInBusd: number
}

const Table: React.FC<TableProps> = ({ details, isAllowance, bnbInBusd }: TableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openInDetails = (data) => {
    setIsOpen(data);
  }

  const TableListProps = {
    "handler": openInDetails,
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
                <StartFarming details={details} isAllowance={isAllowance}  />
                <BuyFrank details={details}/>
              </div>
              <RugInDetails bnbInBusd={bnbInBusd} details={details} />
            </div>
          </div>
        ) : null}
      </div>
    </TableCards>
  )
}

export default Table
