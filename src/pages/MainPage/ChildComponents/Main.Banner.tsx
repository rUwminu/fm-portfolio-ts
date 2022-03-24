import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Banner img
import { AstronautFigure } from '../../../assets/index'

const Banner: React.FC = () => {
  const BannerContainerVariants = {
    hidden: {
      height: 0,
    },
    visible: {
      height: '55vh',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        type: 'spring',
        duration: 1,
        delay: 1,
      },
    },
  }

  const BannerImageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  return (
    <BannerContainer
      variants={BannerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <BannerSubContainer>
        <div className="intro-box">
          <h1>Hi,</h1>
          <h2>I'm Loram'</h2>
          <h6>I a FullStack Developer, I code from front to back.</h6>
        </div>
      </BannerSubContainer>
      <BannerSubContainer>
        <motion.div key={1} variants={BannerImageVariants}>
          <img src={AstronautFigure} alt="banner-img" />
        </motion.div>
      </BannerSubContainer>
    </BannerContainer>
  )
}

const BannerContainer = styled(motion.div)<any>`
  ${tw`
    flex
    items-center
    justify-center
    h-[55vh]
    px-[2rem]
    w-full
    max-w-3xl

    z-[1]
  `}
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
`

const BannerSubContainer = styled.div`
  ${tw`
    relative
    flex-1
    h-full
  `}

  .intro-box {
    ${tw`
        flex
        flex-col
        justify-evenly
        h-full
    `}

    h1 {
      ${tw`
        text-4xl
        md:text-6xl
        font-semibold
      `}
      color: ${(props) => props.theme.body};
    }

    h2 {
      ${tw`
        text-2xl
        md:text-3xl
      `}
      color: ${(props) => props.theme.body};
    }

    h6 {
      ${tw`
        text-base
        md:text-xl
      `}
      color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    }
  }

  .img-box {
    ${tw`
        w-full
        h-full
    `}
  }

  img {
    ${tw`
        absolute
        -bottom-0
        left-1/2
        w-3/4
    `}
    transform: translateX(-50%);
  }
`

export default Banner
