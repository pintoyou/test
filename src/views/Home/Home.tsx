import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'

import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { usePriceCakeBusd } from 'state/hooks'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'



const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const cakePriceUsd = usePriceCakeBusd()
  const price = cakePriceUsd



  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="rgba(116, 116, 116, 1)">
          Bean Finance
        </Heading>
        <Text color="rgba(116, 116, 116, 1)">The #1 Coffee Maker on Binance Smart Chain.</Text>
        <Text> {price.toNumber} </Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
         
        </Cards>
      </div>
    </Page>
  )
}

export default Home
