import { Toast } from 'toolkitUI'
import BigNumber from 'bignumber.js'
import { CampaignType, FarmConfig, NFT, Nft, PoolConfig, Team, Token } from 'config/constants/types'

export type TranslatableText =
  | string
  | {
      id: number
      fallback: string
      data?: {
        [key: string]: string | number
      }
    }

/*     const token = {
      name: "Tadhana Token",
      symbol: "TT",
  /*  should be pulled on per address basis 
      price: "2.564",
      owned: "77",
      value: "197.428",
      isNewToken: true,
  }
 */  

export interface RaiseNFT extends NFT {
  price: number
  isNewToken: boolean
  isOwned: boolean
  category: string
  artist: string
}

export interface RaiseToken extends Token {
  price: number
  value: number
  isNewToken: boolean
  bondedSupply: number
  marketCap: number
}

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: BigNumber
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}
export interface Transaction {
  txHash: string
  block: number
  timestamp: string
  status: number
  from: string
  to: string
  transactionFee: number
  gasInfo: string
  action: string
  txAction: string
  tokenTransfer: string
  tokenAmount?: BigNumber
  quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: BigNumber
  actionPanelToggled?: boolean
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}


export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface Profile {
  userId: number
  points: number
  teamId: number
  nftAddress: string
  tokenId: number
  isActive: boolean
  username: string
  nft?: Nft
  team: Team
  hasRegistered: boolean
}

// Slices states

export interface ToastsState {
  data: Toast[]
}

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  hasRegistered: boolean
  data: Profile
}

export interface TransactionState {
  data: Transaction[]
}

export type TeamResponse = {
  0: string
  1: string
  2: string
  3: string
  4: boolean
}

export type TeamsById = {
  [key: string]: Team
}

export interface TeamsState {
  isInitialized: boolean
  isLoading: boolean
  data: TeamsById
}

export interface Achievement {
  id: string
  type: CampaignType
  address: string
  title: TranslatableText
  description?: TranslatableText
  badge: string
  points: number
}

export interface AchievementState {
  data: Achievement[]
}

// API Price State
export interface PriceApiList {
  /* eslint-disable camelcase */
  [key: string]: {
    name: string
    symbol: string
    price: string
    price_BNB: string
  }
}

export interface PriceApiListThunk {
  /* eslint-disable camelcase */
  [key: string]: number
}

export interface PriceApiResponse {
  /* eslint-disable camelcase */
  updated_at: string
  data: PriceApiList
}

export interface PriceApiThunk {
  /* eslint-disable camelcase */
  updated_at: string
  data: PriceApiListThunk
}

export interface PriceState {
  isLoading: boolean
  lastUpdated: string
  data: PriceApiListThunk
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Global state

export interface State {
  farms: FarmsState
  toasts: ToastsState
  prices: PriceState
  pools: PoolsState
  profile: ProfileState
  teams: TeamsState
  achievements: AchievementState
  block: BlockState
  transactions: TransactionState
}
