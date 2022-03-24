import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Social Icon
import { GitSvgC, TwSvgC, YtSvgC, FbSvgC } from '../../../assets/index'

interface SocialIconLinkProps {
  isView: boolean
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ isView }) => {
  return (
    <SocialIconContainer isView={isView}>
      <a
        href="https://github.com/rUwminu"
        style={{ color: 'inherit' }}
        target="_blank"
        className="social-icon-box"
        rel="noopener noreferrer"
      >
        <GitSvgC fill="currentColor" className="social-icon" />
      </a>
      <a
        href="https://github.com/rUwminu"
        style={{ color: 'inherit' }}
        target="_blank"
        className="social-icon-box"
        rel="noopener noreferrer"
      >
        <FbSvgC fill="currentColor" className="social-icon" />
      </a>
      <a
        href="https://github.com/rUwminu"
        style={{ color: 'inherit' }}
        target="_blank"
        className="social-icon-box"
        rel="noopener noreferrer"
      >
        <TwSvgC fill="currentColor" className="social-icon" />
      </a>
      <a
        href="https://github.com/rUwminu"
        style={{ color: 'inherit' }}
        target="_blank"
        className="social-icon-box"
        rel="noopener noreferrer"
      >
        <YtSvgC fill="currentColor" className="social-icon" />
      </a>
      <div className="social-btm-line" />
    </SocialIconContainer>
  )
}

type InvertColor = {
  isView: boolean
}

const SocialIconContainer = styled.div<InvertColor>`
  ${tw`
    fixed
    bottom-0
    left-[1rem]
    md:left-[2rem]
    flex
    flex-col
    items-center
    justify-center
    z-10
  `}

  .social-icon-box {
    ${tw`
        flex
        items-center
        justify-center
        mb-4
        w-6
        h-6
        md:w-8
        md:h-8
    `}
  }

  .social-icon {
    ${tw`
        h-full
        w-full

        transition
        duration-500
        ease-in-out
    `}
    color: ${(props) => (props.isView ? props.theme.body : props.theme.text)}
  }

  .social-btm-line {
    ${tw`
        w-[2px]
        h-28

        transition
        duration-500
        ease-in-out
    `}
    background-color: ${(props) =>
      props.isView ? props.theme.body : props.theme.text};
  }
`

export default SocialIconLink
