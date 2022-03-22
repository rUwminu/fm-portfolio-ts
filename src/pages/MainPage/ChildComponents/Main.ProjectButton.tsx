import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'

const ProjectButton: React.FC = () => {
  const controls = useAnimation()

  const ProjectLinkVariants = {
    hidden: {},
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const ProjectCardVariants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      y: 50,
    },
  }

  const handleProjectTitleHover = () => {
    controls.start('visible')
  }

  const handleProjectTitleHoverLeave = () => {
    controls.start('hidden')
  }

  return (
    <ProjectContainer>
      <Link
        to={'/project'}
        onMouseEnter={() => handleProjectTitleHover()}
        onMouseLeave={() => handleProjectTitleHoverLeave()}
        className='project-link'
      >
        My Project
      </Link>
      <motion.div
        className='project-card-container'
        variants={ProjectLinkVariants}
        initial='initial'
        animate={controls}
      >
        <motion.div
          key={1}
          className='project-card-popup card-top'
          variants={{
            hidden: {
              ...ProjectCardVariants.hidden,
              rotate: 35,
            },
            visible: {
              ...ProjectCardVariants.visible,
              x: -80,
              rotate: 35,
            },
          }}
        />
        <motion.div
          key={2}
          className='project-card-popup card-center'
          variants={{
            ...ProjectCardVariants,
            visible: { ...ProjectCardVariants.visible, x: 0, y: 85, rotate: 0 },
          }}
        />
        <motion.div
          key={3}
          className='project-card-popup card-bottom'
          variants={{
            hidden: {
              ...ProjectCardVariants.hidden,
              rotate: -35,
            },
            visible: { ...ProjectCardVariants.visible, x: 80, rotate: -35 },
          }}
        />
      </motion.div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  ${tw`
    relative
    absolute
    top-1/2
  `}
  right: calc(0.5rem + 2vw);
  color: ${(props) => props.theme.text};
  transform: rotate(90deg) translateY(-50%);
  z-index: 1;

  .project-link {
    ${tw`
        font-semibold
    `}
    color: ${(props) => props.theme.text};
    z-index: 10;
  }

  .project-card-container {
    ${tw`
      relative
      absolute
      top-[-2rem]
      left-0
    `}
    z-index: -1;
  }

  .project-card-popup {
    ${tw`
      absolute
      top-0
      left-0
      w-20
      h-32
      opacity-0
      rounded-lg
    `}

    &.card-top {
      ${tw`
        bg-red-400
      `}
    }

    &.card-center {
      ${tw`
        bg-blue-400
      `}
    }

    &.card-bottom {
      ${tw`
        bg-green-400
      `}
    }
  }
`

export default ProjectButton
