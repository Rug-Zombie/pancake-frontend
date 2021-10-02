// eslint-disable-next-line import/prefer-default-export
import artists from '../config/constants/artists'
import { BIG_ZERO } from '../utils/bigNumber'
import { TombOverlay } from './types'

const tomboverlays: TombOverlay[] = [
    {
        pid: 0,
        poolId: 17,
        name: '',
        mintingTime: '',
        subtitle_common: '',
        subtitle_uncommon: '',
        subtitle_rare: '',
        subtitle_legendary: '',
        path_common: '',
        path_uncommon: '',
        path_rare: '',
        path_legendary: '',
        type_common: '',
        type_uncommon: '',
        type_rare: '',
        type_legendary: '',
        artist_common: artists.RugZombie,
        artist_uncommon: artists.RugZombie,
        artist_rare: artists.RugZombie,
        artist_legendary: artists.RugZombie,
        userInfo: {
            nextNftMintDate: BIG_ZERO,
            isMinting: false,
            randomNumber: 0
        },
        poolInfo: {
            poolId: 0,
            isEnabled: false,
            mintingTime: BIG_ZERO
        }
    },
    {
        pid: 1,
        poolId: 11,
        name: '',
        mintingTime: '',
        subtitle_common: '',
        subtitle_uncommon: '',
        subtitle_rare: '',
        subtitle_legendary: '',
        path_common: '',
        path_uncommon: '',
        path_rare: '',
        path_legendary: '',
        type_common: '',
        type_uncommon: '',
        type_rare: '',
        type_legendary: '',
        artist_common: artists.RugZombie,
        artist_uncommon: artists.RugZombie,
        artist_rare: artists.RugZombie,
        artist_legendary: artists.RugZombie,
        userInfo: {
            nextNftMintDate: BIG_ZERO,
            isMinting: false,
            randomNumber: 0
        },
        poolInfo: {
            poolId: 1,
            isEnabled: false,
            mintingTime: BIG_ZERO
        }
    }
]

export default tomboverlays