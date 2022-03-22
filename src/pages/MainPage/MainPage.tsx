import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

// Child components
import LogoTitle from './ChildComponents/Main.Logo'
import ContactButton from './ChildComponents/Main.Contact'
import PowerButton from './ChildComponents/Main.PowerButton'
import ProjectButton from './ChildComponents/Main.ProjectButton'
import SocialIconLink from './ChildComponents/Main.SocialIconLink'

const MainPage: React.FC = () => {
  return (
    <HomeContainer>
      <div className='header-container'>
        <LogoTitle />
        <ContactButton />
      </div>
      <Container>
        <PowerButton />
        <SocialIconLink />
        <ProjectButton />
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

  .header-container {
    ${tw`
      fixed
      top-0
      left-0
      flex
      items-center
      justify-between
      py-[2rem]
      px-[2rem]
      w-full
      z-10
    `}
  }
`

const Container = styled.div`
  ${tw`
    p-[2rem]
    w-full
    h-full
  `}
`

export default MainPage
