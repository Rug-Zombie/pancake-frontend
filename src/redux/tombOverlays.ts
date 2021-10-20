import { BIG_ZERO } from '../utils/bigNumber'
import { TombOverlay } from './types'

export const DEFAULT_USER_INFO = {
    nextNftMintDate: 0,
    isMinting: false,
    randomNumber: 0,
    nftMintTime: 2**256 - 1
}

const DEFAULT_POOL_INFO = {
    poolId: 0,
    isEnabled: false,
    mintingTime: 0,
    mintingFee: BIG_ZERO
}

const tombOverlays: TombOverlay[] = [
    {
        id: 0,
        pid: {
            56: 1,
            97: 1,
        },
        poolId: {
            56: 29,
            97: 4,
        },
        mintingTime: '14 days',
        commonId: 43,
        uncommonId: 44,
        rareId: 45,
        legendaryId: 46,
        userInfo: { ...DEFAULT_USER_INFO },
        poolInfo: { ...DEFAULT_POOL_INFO }
    },
]

export default tombOverlays