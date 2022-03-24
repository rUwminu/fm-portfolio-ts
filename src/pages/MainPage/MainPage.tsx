import React, { useState } from 'react'
import tw from 'twin.macro'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Child components
import LogoTitle from './ChildComponents/Main.Logo'
import ContactButton from './ChildComponents/Main.Contact'
import PowerButton from './ChildComponents/Main.PowerButton'
import ProjectButton from './ChildComponents/Main.ProjectButton'
import SocialIconLink from './ChildComponents/Main.SocialIconLink'
import BannerIntro from './ChildComponents/Main.Banner'

// Svg components
import { YinYangSvgC } from '../../assets/index'

const MainPage: React.FC = () => {
  const [isView, setIsView] = useState<boolean>(false)

  const handleClickView = () => {
    setIsView(!isView)
  }

  return (
    <HomeContainer>
      <div className="header-container">
        <LogoTitle isView={isView} />
        <ContactButton />
      </div>

      <DarkDiv isView={isView} />

      <Container>
        <CenterPlayBtn isView={isView}>
          <YinYangSvgC
            width={isView ? 70 : 150}
            height={isView ? 70 : 150}
            fill={'currentColor'}
            onClick={() => handleClickView()}
          />
          <span>Click Here...</span>
        </CenterPlayBtn>
        <PowerButton />
        <SocialIconLink isView={isView} />
        <ProjectButton />
        <BottomBar>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`nav-link ${isView && 'invert'}`}
          >
            <Link to="/about">
              <h3>About.</h3>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="nav-link"
          >
            <Link to="/skills">
              <h3>My Skills.</h3>
            </Link>
          </motion.div>
        </BottomBar>
        {isView && <BannerIntro />}
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
      px-[1rem]
      md:px-[2rem]
      w-full
      z-10
    `}
  }
`

const Container = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    p-[2rem]
    w-full
    h-full
  `}

  .nav-link {
    ${tw`
      text-base
      md:text-xl
    `}
    color: ${(props) => props.theme.text};

    &.invert {
      color: ${(props) => props.theme.body};
    }
  }
`

const BottomBar = styled.div`
  ${tw`
    absolute
    bottom-0
    left-0
    flex
    items-center
    justify-around
    py-[1rem]
    w-full
    z-[2]
  `}
`

const rotateAnimate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

interface CenterPlayBtnProps {
  isView: boolean
}

const CenterPlayBtn = styled.div<CenterPlayBtnProps>`
  ${tw`
    absolute
    flex
    flex-col
    items-center
    justify-center
    bg-none
    cursor-pointer

    transition-all
    duration-700
    ease-in-out
  `}
  top: ${(props) => (props.isView ? '90%' : '50%')};
  left: ${(props) => (props.isView ? '95.5%' : '50%')};
  transform: translate(-50%, -50%);

  span {
    ${tw`
      mt-1
      font-semibold
      pointer-events-none
    `}
    display: ${(props) => (props.isView ? 'none' : 'inline-block')};
    color: ${(props) => props.theme.text};
  }

  & > :first-child {
    ${tw`
      transition-all
      duration-700
      ease-in-out
    `}
    color: ${(props) => props.theme.text};
    animation: ${rotateAnimate} infinite 2s linear;
  }
`

const DarkDiv = styled.div<CenterPlayBtnProps>`
  ${tw`
    absolute
    top-0
    bottom-0
    right-1/2

    z-[1]
  `}
  background-color: ${(props) => props.theme.text};
  ${(props) =>
    props.isView
      ? tw`
    w-full
    md:w-1/2
    `
      : tw`
    w-10
    `}
  height: ${(props) => (props.isView ? '100%' : '0')};
  transition: height 0.7s ease, width 1s ease 0.7s;
`

export default MainPage
