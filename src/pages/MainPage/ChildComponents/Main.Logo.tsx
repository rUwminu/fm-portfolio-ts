import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return <LogoContainer to='/'>Uwminu</LogoContainer>
}

const LogoContainer = styled(Link)`
  ${tw`
    text-2xl
    md:text-3xl
    font-semibold
    z-10
  `}
  color: ${(props) => props.theme.text};
`

export default Logo
