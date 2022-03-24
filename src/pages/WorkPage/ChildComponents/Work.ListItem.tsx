import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type ProjectData = {
  id: number
  name: string
  idea: string
  type: string
  isFeatured: boolean
  links: string
  image: Array<string>
  tools: Array<string>
  description: string
  instruction: string
}

interface Props {
  project: ProjectData
}

const ListItem: React.FC<Props> = ({ project }) => {
  return (
    <ListContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{
        x: -10,
        y: -10,
        boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="item-img">
        <img src={project.image[0]} alt="" />
      </div>
      <div className="item-info">
        <h2>{project.name}</h2>
        <span>
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </span>
      </div>
    </ListContainer>
  )
}

const ListContainer = styled(motion.div)`
  ${tw`
    flex
    flex-col
    items-start
    justify-start
    py-2
    px-4
    h-full
    border-[2px]
    rounded-md
    cursor-pointer
  `}
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.9)`};
  border-color: ${(props) => `rgba(${props.theme.textRgba}, 0.2)`};

  .item-img {
    ${tw`
      w-full
      h-[60%]
    `}

    img {
      ${tw`
        w-full
        h-full
        object-cover
      `}
    }
  }

  .item-info {
    ${tw`
      mt-2
    `}

    h2 {
      ${tw`
        font-semibold
      `}
      color: ${(props) => props.theme.text};
    }

    span {
      ${tw`
        text-sm
        font-semibold
      `}
      color: ${(props) => props.theme.text};
    }
  }
`

export default ListItem
