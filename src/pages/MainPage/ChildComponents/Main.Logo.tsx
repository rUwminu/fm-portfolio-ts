import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return <LogoContainer>Main.Logo</LogoContainer>
}

const LogoContainer = styled.div`
  ${tw``}
  color: ${(props) => props.theme.text};
`

export default Logo
