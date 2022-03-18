import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PowerSvgC } from '../../../assets/index'

const PowerButton: React.FC = () => {
  return (
    <PowerBtnContainer to="/">
      <PowerSvgC fill="currentColor" />
    </PowerBtnContainer>
  )
}

const PowerBtnContainer = styled(Link)`
  ${tw`
    fixed
    top-10
    left-1/2
    flex
    items-center
    justify-center
    p-2
    w-10
    h-10
    bg-white
    border-2
  border-gray-700
    rounded-full
    cursor-pointer

    transition
    duration-200
    ease-in-out
  `}
  transform: translateX(-50%);

  &:hover {
    ${tw`
      bg-green-200
    `}
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.5);
  }

  & > *:first-child {
    color: inherit;
    text-decoration: none;
  }
`

export default PowerButton
