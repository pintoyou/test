import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@gametoken/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'

import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      links={config}
      {...props}
    />
  )
}

export default Menu
