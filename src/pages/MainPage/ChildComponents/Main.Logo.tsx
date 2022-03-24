import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface LogoProps {
  isView: boolean
}

const Logo: React.FC<LogoProps> = ({ isView }) => {
  return (
    <LogoContainer to="/" isView={isView}>
      Uwminu
    </LogoContainer>
  )
}

type InvertColor = {
  isView: boolean
}

const LogoContainer = styled(Link)<InvertColor>`
  ${tw`
    text-2xl
    md:text-3xl
    font-semibold

    transition
    duration-500
    ease-in-out
    z-10
  `}
  color: ${(props) => (props.isView ? props.theme.body : props.theme.text)};
`

export default Logo
