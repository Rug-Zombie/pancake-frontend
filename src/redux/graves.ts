// eslint-disable-next-line import/prefer-default-export
import tokens from '../config/constants/tokens'
import artists from '../config/constants/artists'
import { BIG_ZERO } from '../utils/bigNumber'
import { Grave } from './types'

const graves: Grave[] = [
  {
    id: 1,
    pid: 0,
    name: 'RugZombie Common',
    subtitle: 'Basic Zombie',
    path: 'images/rugZombie/BasicZombie.gif',
    type: 'image',
    withdrawalCooldown: '30 days',
    nftRevivalTime: '30 days',
    rug: tokens.none,
    artist: artists.RugZombie,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    isFeatured: true,
    rarity: "Common",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  // {
  //   id: 2,
  //   pid: 19,
  //   name: 'RugZombie Uncommon',
  //   subtitle: 'Zombie Multiplier',
  //   path: 'images/rugZombie/Zombie Multiplier.png',
  //   type: 'image',
  //   withdrawalCooldown: '3 days',
  //   nftRevivalTime: '30 days',
  //   rug: tokens.basicZmbe,
  //   artist: artists.RugZombie,
  //   stakingToken: '0x909e59fFFcF1481Df184831eEea6680Cd437A340',
  //   pcsVersion: 'none',
  //   liquidityDetails: 'None! You must earn the Basic Zombie NFT from the RugZombie Common Grave to gain access.',
  //   requiresNft: true,
  //   requiredNftPath: 'images/rugZombie/BasicZombie.gif',
  //   nftConverterPid: 1,
  //   graveNftToken: "0x29529fc1d7d669dC8029174BF9cC396f459AF208",
  //   nft: "Basic Zombie",
  //   userInfo: {
  //     paidUnlockFee: false,
  //     tokenWithdrawalDate: 0,
  //     nftRevivalDate: 0,
  //     rugDeposited: BIG_ZERO,
  //     amount: BIG_ZERO,
  //     pendingZombie: BIG_ZERO,
  //   },
  //   poolInfo: {
  //     lpToken: undefined,
  //     unlockFee: BIG_ZERO,
  //     minimumStake: BIG_ZERO,
  //     totalStakingTokenStaked: BIG_ZERO,
  //     withdrawCooldown: 0,
  //     nftRevivalTime: 0,
  //     allocPoint: 0
  //   },
  // },
  {
    id: 2,
    pid: 19,
    name: 'Emperor Token Rare',
    subtitle: 'Young Fool',
    path: 'https://storage.googleapis.com/rug-zombie/Young%20Fool.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.zmpr,
    artist: artists.jussjoshinduh,
    stakingToken: '0x62debcB9f311a170BfbDA089465085DA551B42d2',
    pcsVersion: 'none',
    liquidityDetails: 'None! The ZMPR token was airdropped to EMPR holders so you will have to ask around the telegram.',
    isNew: true,
    isEnding: false,
    isFeatured: true,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 3,
    pid: 1,
    name: 'VikingSwap Rare',
    subtitle: 'Viking Brains',
    path: 'images/rugZombie/VikingBrains.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.viking,
    artist: artists.TheLeap3d,
    stakingToken: '0x909e59fFFcF1481Df184831eEea6680Cd437A340',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    isFeatured: true,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 4,
    pid: 2,
    name: 'MonsterSlayer Rare',
    subtitle: 'ZombieSlayer',
    path: 'images/rugZombie/ZombieSlayer.gif',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.msc,
    artist: artists.ZomBaes,
    stakingToken: '0xD4Ced04fB7129CDB43ffef1cf3DE3Ac701c6cE33',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 5,
    pid: 18,
    name: 'Thunderswap Rare',
    subtitle: 'Electric Zombie',
    path: 'images/rugZombie/Electric Zombie.png',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.tndr,
    artist: artists.TheLeap3d,
    stakingToken: '0xdab566c6E63b06D641ABdCCaC4c6941C645812BD',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: true,
    isEnding: false,
    isFeatured: true,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 6,
    pid: 12,
    name: 'Autoshark Legendary',
    subtitle: 'Chompers',
    path: 'images/rugZombie/Autoshark Legendary.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.zshark,
    artist: artists.deadtunnelrat,
    stakingToken: '0x8fab22cB7C58b193Fd498ed0EF3B574d70E4f759',
    pcsVersion: 'none',
    liquidityDetails: 'None! This grave is exclusive for victims of the flash loan attack on autoshark.',
    isNew: false,
    isEnding: true,
    isClosed: true,
    endDate: 1630900799,
    latestEntryDate: "Aug. 4th, 2021",
    rarity: "Legendary",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 7,
    pid: 15,
    name: 'RUGBIDEN Rare',
    subtitle: 'Zombiden',
    path: 'images/rugZombie/Zombiden.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.rugbiden,
    artist: artists.ZomBaes,
    stakingToken: '0xF462EFC96E47d6Fa2b03e1f8757aA38FeAa9aC3d',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 8,
    pid: 16,
    name: 'Burger Swap Rare',
    subtitle: 'Zomburger',
    path: 'images/rugZombie/Zomburger.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.burger,
    artist: artists.jussjoshinduh,
    stakingToken: '0x6351b17cecb2A143c72Af9AF8075667Aa6A139F6',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 9,
    pid: 13,
    name: 'The US Dollar Rare',
    subtitle: 'DeadDollar',
    path: 'images/rugZombie/DeadDollar.png',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.busd,
    artist: artists.TheLeap3d,
    stakingToken: '0xB95B670b9Cd0Da6D9C65dab68c41c394633410b4',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 10,
    pid: 3,
    name: 'Defi100 Rare',
    subtitle: 'Zombie100',
    path: 'images/rugZombie/Zombie100.gif',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.d100,
    artist: artists.ZomBaes,
    stakingToken: '0xfB33d25b41F1b0fa95AEa52486C3F05f2aDEE396',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 11,
    pid: 10,
    name: 'Merlin Lab Rare',
    subtitle: 'My name is MERL',
    path: 'images/rugZombie/My Name Is MERL.png',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.merl,
    artist: artists.none,
    pcsVersion: 'v2',
    stakingToken: '0xD1e00C08E938B808F2d65dd108aE50948a9Ca1b4',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Rare",
    isFeatured: true,

    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 12,
    pid: 4,
    name: 'Fairmoon Rare',
    subtitle: 'Raremoon',
    path: 'images/rugZombie/Raremoon.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.fairmoon,
    artist: artists.TheLeap3d,
    stakingToken: '0x26dF9e0fbd5624941767516BbF218554CfA3A110',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Rare",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 13,
    pid: 14,
    name: 'Uranium Finance Uncommon',
    subtitle: 'The Rad Chad',
    path: 'images/rugZombie/The Rad Chad.png',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '14 days',
    rug: tokens.u92,
    artist: artists.jussjoshinduh,
    pcsVersion: 'v2',
    stakingToken: '0xB0CEA8C1AaA7a62de12BC5c15f0de1694ED9fab7',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Uncommon",
    isFeatured: true,
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 14,
    pid: 5,
    name: 'Fairmoon Uncommon',
    subtitle: 'Zombie on the Moon',
    path: 'images/rugZombie/FairmoonUncommon.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '14 days',
    rug: tokens.fairmoon,
    artist: artists.none,
    pcsVersion: 'v1',
    stakingToken: '0x645ad805c464133Eba5c4152Ce14547a01F821f7',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Uncommon",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 15,
    pid: 6,
    name: 'Fairmoon Common',
    subtitle: 'Fairmoon Common',
    path: 'images/rugZombie/FairmoonCommon.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.fairmoon,
    artist: artists.none,
    pcsVersion: 'v1',
    stakingToken: '0x02F6DE73919aE9d43A1E0520dBCBF81bCda5B514',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Common",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 16,
    pid: 7,
    name: 'Gorilla Yield Common',
    subtitle: 'Gorilla Yield Common',
    path: 'images/rugZombie/yApeCommon.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.yape,
    artist: artists.none,
    pcsVersion: 'v1',
    stakingToken: '0x9EbD27Bd3957F13f8E7fef988E96B8EE1998bc80',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Common",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 17,
    pid: 8,
    name: 'Dragon Farm Finance Common',
    subtitle: 'Dragon Farm Finance Common',
    path: 'images/rugZombie/CommonDragonFarmFinance.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.dragon,
    artist: artists.none,
    pcsVersion: 'v1',
    stakingToken: '0x634A554d2FF1609d50740240140B452dF60D035c',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Common",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
  {
    id: 18,
    pid: 9,
    name: 'yPanda Common',
    subtitle: 'yPanda Common',
    path: 'images/rugZombie/yPandaCommon.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.ypanda,
    artist: artists.none,
    pcsVersion: 'v1',
    stakingToken: '0xFceB2967AB8EcC29589E9232f78f8441832d2aD6',
    liquidityDetails: '',
    isNew: false,
    isEnding: false,
    rarity: "Common",
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      rugDeposited: BIG_ZERO,
      amount: BIG_ZERO,
      pendingZombie: BIG_ZERO,
    },
    poolInfo: {
      lpToken: undefined,
      unlockFee: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalStakingTokenStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
      allocPoint: 0
    },
  },
]

export default graves
