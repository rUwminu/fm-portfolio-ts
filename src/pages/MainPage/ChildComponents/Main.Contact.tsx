import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Contact: React.FC = () => {
  return (
    <ContactContainer
      to='#'
      target='_blank'
      onClick={(e) => {
        e.preventDefault()
        window.location.href = 'mailto:rayigo98@gmail.com'
      }}
    >
      Contact Me!
    </ContactContainer>
  )
}

const ContactContainer = styled(NavLink)`
  ${tw`
    text-base
    md:text-lg
    font-semibold
    z-10

    transition
    duration-200
    ease-in-out
  `}
  color: ${(props) => props.theme.text};

  &:hover {
    transform: scale(1.05);
  }
`

export default Contact
