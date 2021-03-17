import { Heading } from '@gametoken/uikit'
import Container from 'components/layout/Container'
import React from 'react'
import styled from 'styled-components'

const Page = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const Center = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  height: 300px;
`

const Home: React.FC = () => {
  return (
    <Page>
      <Center>
        <Img src="/images/soon.svg" alt="Coming soon" />
        <Heading as="h1" size="xl" mt="24px" color="secondary">
          Coming Soon!
        </Heading>
      </Center>
    </Page>
  )
}

export default Home
