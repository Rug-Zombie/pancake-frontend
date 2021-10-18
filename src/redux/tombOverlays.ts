import { BIG_ZERO } from '../utils/bigNumber'
import { TombOverlay } from './types'

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
        userInfo: {
            nextNftMintDate: BIG_ZERO,
            isMinting: false,
            randomNumber: 0
        },
        poolInfo: {
            poolId: 0,
            isEnabled: false,
            mintingTime: BIG_ZERO,
            mintingFee: BIG_ZERO
        }
    },
]

export default tombOverlays