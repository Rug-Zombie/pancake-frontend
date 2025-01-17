import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  ChevronDownIcon,
  ChevronUpIcon,
  Flex,
  Button, useModal,
} from '@rug-zombie-libs/uikit'
import { nftById } from '../../../../redux/get'
import ViewModal from '../ViewModal'
import useSwiper from '../../../Mausoleum/hooks/useSwiper'
import Video from '../../../../components/Video'


const StyleDetails = styled.div`
  display: flex;
  justify-content: center;
`
const StyleCursorPointer = styled.div`
  cursor: pointer;
  display: flex;
`
const StyleCardHeader = styled.div`
  width: 100%;
  height: 300px;
  background: #111820;
`

interface CollectiblesCardProps {
  id: number;
  refresh: () => void;
}

const CollectiblesCard: React.FC<CollectiblesCardProps> = ({ id, refresh }: CollectiblesCardProps) => {
  const { name, description, path, type, userInfo: { ownedIds } } = nftById(id)
  const [isOpen, setIsOpen] = useState(false)
  const isOwned = ownedIds.length > 0
  const { setSwiper } = useSwiper()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const [onPresentViewModal,] = useModal(
      <ViewModal
        id={id}
        setSwiper={setSwiper}
        refresh={refresh}
      />
  )

  return (
    <div>
      <Card className={isOwned ? 'card-collectibles' : 'card-active'}>
        <StyleCardHeader>
          <Flex justifyContent='center' paddingTop='5%' height='100%'>
            {type === 'image' ? <img
                src={path} alt='nft'
                style={{ maxWidth: '90%', maxHeight: '100%', objectFit: 'contain' }} /> :
              <Video path={path} />}
          </Flex>
        </StyleCardHeader>
        <CardBody>
          <Heading as='h2' fontSize='18px'>{name}</Heading>
        </CardBody>
        <CardFooter>
          <StyleDetails>
            <Flex justifyContent='center' alignItems='center'>
              {isOwned ? <div style={{ paddingRight: '10px' }}><Button variant='secondary' onClick={onPresentViewModal}>
                View
              </Button></div> : null}
              <StyleCursorPointer onClick={toggleOpen}>
                Details
                {
                  isOpen ? <ChevronUpIcon color='text' ml='10px' />
                    : <ChevronDownIcon color='text' ml='10px' />
                }
              </StyleCursorPointer>
            </Flex>
          </StyleDetails>
          {
            isOpen &&
            <div className='direction-column' style={{ paddingTop: '5%' }}>
              <span className='indetails-type'>{name}</span>
              <span className='indetails-title'>{description}</span>
            </div>
          }
        </CardFooter>
      </Card>
    </div>
  )
}

export default CollectiblesCard
