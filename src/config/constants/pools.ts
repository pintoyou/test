import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'BEAN',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xA0CcF44bA5d67E0095247F78C697Ad7cBD6E63e9',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x402cC990fA250e78A20993a13972cD83Aa069D95',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
