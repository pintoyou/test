import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()

  const cakePriceUsd = usePriceCakeBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
     
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config}
      {...props}
    />
  )
}

export default Menu
