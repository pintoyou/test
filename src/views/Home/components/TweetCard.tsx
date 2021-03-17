import React from 'react'
import { Card, CardBody, Heading } from '@gametoken/uikit'
import styled from 'styled-components'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const StyledTweetCard = styled(Card)`
  min-height: 376px;
`

const TweetCard = () => {
  return (
    <StyledTweetCard>
      <CardBody>
        <Heading size="lg">Latest Tweet From Gametoken</Heading>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GameTokenFi"
          options={{ tweetLimit: '1' }}
          noHeader="true"
          noBorders="true"
          noFooter="true"
        />
      </CardBody>
    </StyledTweetCard>
  )
}

export default TweetCard
