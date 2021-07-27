import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@rug-zombie-libs/uikit'
import { useGetPredictionsStatus, useIsChartPaneOpen, useIsHistoryPaneOpen } from 'state/hooks'
import { PredictionStatus } from 'state/types'
import SwiperCore, { Keyboard, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { BigNumber } from 'bignumber.js'
import MobileMenu from './components/MobileMenu'
import History from './History'
import Positions from './Positions'
import Chart from './Chart'
import { ErrorNotification, PauseNotification } from './components/Notification'
import MobileCard from './components/MobileCard/MobileCard'
import useSwiper from './hooks/useSwiper'
import { BIG_ZERO } from '../../utils/bigNumber'
import SoonRoundCard from './components/RoundCard/SoonRoundCard'
import IncreaseBidCard from './components/RoundCard/IncreaseBidCard'
import RoundCard from './components/RoundCard'
import Menu from './components/Menu'
import MobileTopMenu from './components/MobileTopMenu'

enum PageView {
  POSITIONS = 'positions',
  HISTORY = 'history',
  CHART = 'chart',
}

const StyledMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const View = styled.div<{ isVisible: boolean }>`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`

const getView = (isHistoryPaneOpen: boolean, isChartPaneOpen: boolean): PageView => {
  if (isHistoryPaneOpen) {
    return PageView.HISTORY
  }

  if (isChartPaneOpen) {
    return PageView.CHART
  }

  return PageView.POSITIONS
}


interface MobileCardProps {
  bids: any[],
  lastBidId: number,
  userInfo: any,
  aid: number,
  setRefresh: any,
  refresh: boolean
}

SwiperCore.use([Keyboard, Mousewheel])

const StyledSwiper = styled.div`
  .swiper-wrapper {
    align-items: center;
    display: flex;
  }

  .swiper-slide {
    width: 320px;
  }
`

interface MobileProps {
  bids: any[],
  lastBidId: number,
  userInfo: any,
  aid: number,
  setRefresh: any,
  refresh: boolean
}

const Mobile: React.FC<MobileProps> = ({ bids, refresh, lastBidId, setRefresh, userInfo, aid }) => {

  const { setSwiper } = useSwiper()

  const formattedBids = bids.map((bid, i) => {
    return {
      amount: new BigNumber(bid.amount.toString()),
      bidder: bid.bidder,
      previousBidAmount: bids[i - 1] && bids[i - 1].amount ? new BigNumber(bids[i - 1].amount.toString()) : BIG_ZERO,
    }
  })

  return (
    <>
      <StyledSwiper style={{ width: '100%' }}>
        <MobileTopMenu userInfo={userInfo} />

        <Swiper
          initialSlide={1}
          onSwiper={setSwiper}
          spaceBetween={16}
          slidesPerView='auto'
          freeMode
          direction="vertical"
          freeModeSticky
          centeredSlides
          mousewheel
          keyboard
          resizeObserver
        >
          <SwiperSlide>
            <SoonRoundCard lastBidId={lastBidId} id={lastBidId + 1} />
          </SwiperSlide>
          <SwiperSlide>
            {bids.length > 0 ?
              <IncreaseBidCard
                lastBid={formattedBids[bids.length - 1]}
                userInfo={userInfo}
                aid={aid}
                id={lastBidId}
                setRefresh={setRefresh}
                refresh={refresh}
              /> :
              null
            }
          </SwiperSlide>
          {bids[lastBidId - 1] ?
            <SwiperSlide>
              <RoundCard bid={formattedBids[lastBidId - 1]} id={lastBidId - 1} userInfo={userInfo} lastBidId={lastBidId}
                         aid={aid} />
            </SwiperSlide> : null
          }
          {bids[lastBidId - 2] ?
            <SwiperSlide>
              <RoundCard bid={formattedBids[lastBidId - 2]} id={lastBidId - 2} userInfo={userInfo} lastBidId={lastBidId}
                         aid={aid} />
            </SwiperSlide> : null
          }
          {bids[lastBidId - 3] ?
            <SwiperSlide>
                <RoundCard bid={formattedBids[lastBidId - 3]} id={lastBidId - 3} userInfo={userInfo}
                           lastBidId={lastBidId} aid={aid} />
            </SwiperSlide> : null
          }
        </Swiper>
      </StyledSwiper>
      <div style={{
        position: "fixed",
        zIndex: 100,
        bottom: "0",
        left: "0",
        width: "100%"
      }}>
        <MobileMenu userInfo={userInfo} />
      </div>
    </>
  )
}

export default Mobile
