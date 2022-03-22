import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Social Icon
import { GitSvgC, TwSvgC, YtSvgC, FbSvgC } from '../../../assets/index'

const SocialIconLink: React.FC = () => {
  return (
    <SocialIconContainer>
      <a
        href='https://github.com/rUwminu'
        style={{ color: 'inherit' }}
        target='_blank'
        className='social-icon-box'
        rel='noopener noreferrer'
      >
        <GitSvgC className='social-icon' />
      </a>
      <a
        href='https://github.com/rUwminu'
        style={{ color: 'inherit' }}
        target='_blank'
        className='social-icon-box'
        rel='noopener noreferrer'
      >
        <FbSvgC className='social-icon' />
      </a>
      <a
        href='https://github.com/rUwminu'
        style={{ color: 'inherit' }}
        target='_blank'
        className='social-icon-box'
        rel='noopener noreferrer'
      >
        <TwSvgC className='social-icon' />
      </a>
      <a
        href='https://github.com/rUwminu'
        style={{ color: 'inherit' }}
        target='_blank'
        className='social-icon-box'
        rel='noopener noreferrer'
      >
        <YtSvgC className='social-icon' />
      </a>
      <div className='social-btm-line' />
    </SocialIconContainer>
  )
}

const SocialIconContainer = styled.div`
  ${tw`
    fixed
    bottom-0
    left-[2rem]
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
    `}
  }

  .social-btm-line {
    ${tw`
        w-[2px]
        h-28
    `}
    background-color: ${(props) => props.theme.text};
  }
`

export default SocialIconLink
