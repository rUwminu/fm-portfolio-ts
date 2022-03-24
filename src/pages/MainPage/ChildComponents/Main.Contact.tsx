import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  return (
    <ContactContainer whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <Link
        to="#"
        target="_blank"
        onClick={(e: any) => {
          e.preventDefault()
          window.location.href = 'mailto:rayigo98@gmail.com'
        }}
      >
        Contact Me!
      </Link>
    </ContactContainer>
  )
}

const ContactContainer = styled(motion.div)<any>`
  ${tw`
    text-base
    md:text-lg
    font-semibold
    z-10
  `}
  color: ${(props) => props.theme.text};
`

export default Contact
