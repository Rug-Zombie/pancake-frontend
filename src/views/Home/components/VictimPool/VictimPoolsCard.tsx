import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardBody, Heading, Dropdown } from '@rug-zombie-libs/uikit';
import { useTranslation } from 'contexts/Localization';
import Select, { OptionProps } from 'components/Select/Select';
import { useZTokenSwapper, useERC20 } from 'hooks/useContract';
import { useWeb3React } from '@web3-react/core';
import { multicallv2 } from 'utils/multicall';
import erc20Abi from 'config/abi/erc20.json';
import { getZTokenSwapperAddress } from 'utils/addressHelpers';
import VictimPoolsInfo, { VictimPoolData } from './VictimPoolInfo';

const StyledVictimPoolsCard = styled(Card)`
  background-image: url('/images/zmbe-bg.png');
  background-size: 300px 300px;
  background-position-x: 100px;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
  box-shadow: rgb(204 246 108) 0px 0px 20px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const VictimPoolsCard = () => {
    const swapper = useZTokenSwapper();
    const address = getZTokenSwapperAddress();
    const { account } = useWeb3React();
    const { t } = useTranslation();    

    const options = [
        { label: 'Black Diamond', value: 'BLACK' },
        { label: 'Test', value: 'TEST', rug: 'XXX', ztoken: 'XXX' }
    ]

    const [selectedPool, setSelectedPool] = useState(options[0]);

    function onDropdownSelected(option: OptionProps) {
      setSelectedPool(option);
    }

    return (
        <StyledVictimPoolsCard>
            <CardBody>
            
            <Heading size="xl" mb="24px">{t('Victim Pools')}</Heading>
            <Select options={options} onChange={onDropdownSelected} />
            <br/>
            <VictimPoolsInfo id={selectedPool.value} />
            </CardBody>
        </StyledVictimPoolsCard>
    )
}

export default VictimPoolsCard;