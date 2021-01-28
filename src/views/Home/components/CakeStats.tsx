import React from 'react'
import { Card, CardBody, Skeleton, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { useGetStats } from 'hooks/api'
import CardValue from './CardValue'


const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0
  const data = useGetStats()
  const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledCakeStats >
      <CardBody color="rgba(116, 116, 116, 1)">
        <Heading size="xl" mb="24px" color="rgba(116, 116, 116, 1)">
          Bean Stats
        </Heading>
        <Row>
          <Text fontSize="14px" color="rgba(116, 116, 116, 1)">Total Bean Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px" color="rgba(116, 116, 116, 1)">Total Bean Burned</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px" color="rgba(116, 116, 116, 1)">New Bean/block</Text>
          <CardValue fontSize="14px" decimals={0} value={25} />
        </Row>
        
      </CardBody>
      <CardBody>
      <Heading size="lg" mb="24px" color="rgba(116, 116, 116, 1)">
          Total Value Locked (TVL)
        </Heading>
        {data ? (
          <>
            <Heading color="rgba(116, 116, 116, 1)" size="xl">{`$${tvl}`}</Heading>
            <Text color="textSubtle" >All Coffee LPs and Pools</Text>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
