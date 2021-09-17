// eslint-disable-next-line import/prefer-default-export
import tokens from '../config/constants/tokens'
import artists from '../config/constants/artists'
import { BIG_ZERO } from '../utils/bigNumber'
import { SpawningPool } from './types'

const spawningPools: SpawningPool[] = [
  {
    id: 7,
    name: 'Octaplex Legendary',
    subtitle: 'Freaky Zolom',
    path: 'https://ipfs.io/ipfs/QmafkchvcXFDdMkdJzQFjWaXcZQyGfe4F8p35X4TQVVGH3',
    type: 'image',
    address: {
      56: '0xe9Dc48d8F5a1eAd54b8ADC263c4564b5346b1aEB',
      97: '',
    },
    endBlock: 13620000,
    project: {
      name: 'Octaplex Network',
      description: 'Octaplex Network is an ecosystem with a unique and revolutionary concept bringing a new template for the future development of DeFi and yield bearing tokens. They aim to create an ecosystem of tokens in which users shall be rewarded and will be able to get special deals by holding their native $PLX token as well as our partner project tokens.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.plx.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://octaplex.gitbook.io/octaplex-network-whitepaper/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/OctaplexNetwork',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.plx,
    rewardTokenBnbLp: '0x63730fcf35b0edc45742c19ebe20205ab99ce05d',
    bnbLpTokenIndex: 1,
    artist: artists.jussjoshinduh,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: "violet",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 6,
    name: 'AtmosSoft Legendary',
    subtitle: 'Zombabe',
    path: 'https://ipfs.io/ipfs/QmVGjzRvf2WD5JKjh5wNVjVtimPv9R2mzeuYUNin2cFsc7',
    type: 'image',
    address: {
      56: '0x20E060a9FD13F9F2D442f6e7A804B186C53EcF60',
      97: '',
    },
    endBlock: 13566061,
    project: {
      name: 'AtmosSoft',
      description: 'AtmosSoft is an NFT Play-2-Earn collectible card game where you Earn $ATMSSFT just by playing. NFT Staking and Farming including P2P gameplay to earn a spot in tournaments with prize pools.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.atmssft.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://atmossoft.gitbook.io/atmossoft-ccg/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/atmossoft',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.atmssft,
    rewardTokenBnbLp: '0xdf825e486d9d15848a36c113b7725d7923e886a4',
    bnbLpTokenIndex: 0,
    artist: artists.geek_amy_art,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: "red",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 5,
    name: 'Monkey Coin Legendary',
    subtitle: 'Crypto Mutant Zombie',
    path: 'https://storage.googleapis.com/rug-zombie/Zombi_Monkey-min.jpg',
    type: 'image',
    address: {
      56: '0x1976e5607aB7D163E5DA2F6D427aD1868e967f97',
      97: '',
    },
    endBlock: 13503600,
    project: {
      name: 'CryptoMonkey Empire',
      description: 'CryptoMonkey Empire is a Massively Multiplayer Online Real Time Strategy video game. Where you, the player manages monkeys to build an Empire. You will collect resources by raiding other player\'s empires to build up a city and make technological progress. Their MonkeyCoin token is used in game as a resource and your army is used to steal other player\'s cryptocurrency during raids.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.mkc.projectLink,
        },
        {
          name: 'Pre-alpha Gameplay Video',
          url: 'https://www.youtube.com/watch?v=OiiQ8CBOuLw',
        },
        {
          name: 'Whitepaper',
          url: 'https://mwgbucket.s3.eu-west-3.amazonaws.com/CME_WP_V7bis.pdf',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/cryptomonkeyempire',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.mkc,
    rewardTokenBnbLp: '0x77acd18484430203212dc67c9b5362d0abace8de',
    bnbLpTokenIndex: 1,
    artist: artists.cryptomonkeyemp,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: "red",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 4,
    name: 'WalletNow Legendary',
    subtitle: 'Zombie Wallet',
    path: 'https://ipfs.io/ipfs/QmcvagniUfh9k8Ks42pJPnDicHBGSkFgLB6dcUbJKnTB4p',
    type: 'image',
    address: {
      56: '0x32c5ec65beB8482b5c727A0E3A352F8E330eb312',
      97: '',
    },
    endBlock: 13140040,
    project: {
      name: 'WalletNow',
      description: 'WalletNow is an advanced crypto portfolio monitoring solution. It aggregates all your DeFi & CeFi investments in a searchable table and actively monitors it with an integrated Telegram Bot. With detailed LP information, impermanent loss and yields calculation, you are always in control of your wallet.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.wnow.projectLink,
        },
        {
          name: 'Telegram',
          url: 'https://t.me/WalletNow',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.wnow,
    rewardTokenBnbLp: '0x268c6d2bd3f593d44f3e697cc5a02ae6ecda9a23',
    bnbLpTokenIndex: 1,
    artist: artists.jussjoshinduh,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: "rgb(0, 150, 255)",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 3,
    name: 'Koala Defi Legendary',
    subtitle: 'Nightmare Fuel Karen',
    path: 'https://ipfs.io/ipfs/QmaTXD2A7dfTaMhGzDU9ubFwVS79GF9EPMRFkGc6G9XEHf',
    type: 'image',
    address: {
      56: '0x14422173F2EA692Ae2e27c77a9bf5DB58b38b457',
      97: '',
    },
    endBlock: 13140040,
    project: {
      name: 'Koala Defi',
      description: 'Koala DeFi Finance is a yield farming dapp running on Binance Smart Chain and ApeSwap exchange, with cool new features that let you earn and win LYPTUS tokens. The idea behind this project is to create a safe place for conservative yield farmers. ',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.nalis.projectLink,
        },
        {
          name: 'Telegram',
          url: 'https://t.me/koaladefichat',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.nalis,
    rewardTokenBnbLp: '0x8c7ef42d68889ef820cae512f43d8c256fdaa1a0',
    bnbLpTokenIndex: 1,
    artist: artists.jussjoshinduh,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 2,
    name: 'Main Street Legendary',
    subtitle: 'Block Party',
    path: 'https://storage.googleapis.com/rug-zombie/Main%20Street.png',
    type: 'image',
    address: {
      56: '0x0af40D42F805112ECc40b0148c1221eDc8Ce001B',
      97: '',
    },
    endBlock: 12790000,
    project: {
      name: 'Main Street',
      description: 'Main Street is a deflationary token that provides its holders with a space to find new high use case tokens in their Neighborhood and Alley, as well as entertainment and games in their Shops.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.mainst.projectLink,
        },
        {
          name: 'Telegram',
          url: 'https://t.me/buymainstreet',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.mainst,
    rewardTokenBnbLp: '0xdbb9ed740a8163a04cc0227e638c30b447d155b8',
    bnbLpTokenIndex: 1,
    artist: artists.ZomBaes,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 1,
    name: 'Euler Tools Legendary',
    subtitle: 'Leonhard Euler\'s Day Off',
    path: 'images/rugZombie/Leonhard Euler\'s Day Off.gif',
    type: 'image',
    address: {
      56: '0x637810116bfdEcA4bB38c61D9FeBC5911440B0eF',
      97: '',
    },
    endBlock: 12350000,
    project: {
      name: 'Euler Tools',
      description: 'Euler Tools is a platform to explore and discover blockchain content. With a clean, usable and responsive interface.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.euler.projectLink,
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/EulerTools',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/eulertools',
        },
        {
          name: 'Medium Post',
          url: 'https://rugzombie.medium.com/new-spawning-pool-euler-tools-a07b095a9846',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.euler,
    rewardTokenId: 'euler-tools',
    artist: artists.ZomBaes,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: "rgb(0, 150, 255)",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 0,
    name: 'Gorilla-Fi Legendary',
    subtitle: 'Silverback',
    path: 'images/rugZombie/Silverback.webm',
    type: 'video',
    address: {
      56: '0x83818859688eF175F6AEAFb80Be881Db24A4E50a',
      97: '0x09804035E6D09fe1d4992F64fE9F69A183572DD3',
    },
    endBlock: 12209400,
    project: {
      name: 'Gorilla-Fi',
      description: 'Gorilla-Fi is a comprehensive De-Fi earnings ecosystem that allows anyone with a smartphone to earn passive income.',
      additionalDetails: [
        {
          name: 'Project website',
          url: 'https://www.gorillafi.com/',
        },
        {
          name: 'Podcast with project founder',
          url: 'https://www.youtube.com/watch?v=xdwiHSCPSNw',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/GorillaFi',
        },
        {
          name: 'Medium post',
          url: 'https://rugzombie.medium.com/first-spawn-gorilla-fi-g-fi-f16a234047f7',
        },
      ],

    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.gfi,
    rewardTokenId: 'gorilla-fi',
    artist: artists.deadtunnelrat,
    stakingToken: '',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    color: "rgb(0, 150, 255)",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
]

export default spawningPools
