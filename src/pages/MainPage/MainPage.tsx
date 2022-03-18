import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Child components
import PowerButton from './ChildComponents/Main.PowerButton'

const MainPage: React.FC = () => {
  return (
    <HomeContainer>
      <Container>
        <PowerButton />
      </Container>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  ${tw`
    relative
    h-screen
    w-screen
    overflow-hidden
  `}
  background: ${(props) => props.theme.body};

  h2,
  h3,
  h4,
  h5 {
    ${tw`
        font-semibold
    `}
    color: ${(props) => props.theme.text};
  }
`

const Container = styled.div`
  ${tw`
    p-[2rem]
  `}
`

export default MainPage
