import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

import { ProjectData } from '../../assets/project/DumbData/Data'

// Child components
import ListFilter from './ChildComponents/Work.ListFilter'
import ListItem from './ChildComponents/Work.ListItem'
import AnchorChain from './ChildComponents/Work.Anchor'

// Main Child components
import LogoTitle from '../MainPage/ChildComponents/Main.Logo'
import ContactButton from '../MainPage/ChildComponents/Main.Contact'
import SocialIconLink from '../MainPage/ChildComponents/Main.SocialIconLink'

type DummyData = {
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

type ProjectList = Array<DummyData>

const WorkPage: React.FC = () => {
  const controls = useAnimation()

  const [filterType, setFilterType] = useState<string>('all')
  const [filteredList, setFilteredList] = useState<ProjectList>(ProjectData)

  const handleFilterMovieList = async () => {
    if (filterType === 'all') {
      await setFilteredList(ProjectData)
    } else {
      const tempArray: ProjectList = ProjectData.filter(
        (x) => x.type === filterType
      )
      await setFilteredList(tempArray)
    }
    controls.start('visible')
  }

  useEffect(() => {
    handleFilterMovieList()
  }, [filterType])

  const squareVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  }

  const elementVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <WorkSection>
      <div className="header-container">
        <LogoTitle isView={false} />
        <ContactButton />
      </div>
      {/* <AnchorChain /> */}
      <SocialIconLink isView={false} />
      <WorkContainer>
        <ListFilter filterType={filterType} setFilterType={setFilterType} />
        {filteredList.length > 0 && (
          <motion.div
            className="grid-container"
            variants={squareVariants}
            animate={controls}
            initial="hidden"
          >
            <AnimatePresence>
              {filteredList.map((x) => (
                <motion.div
                  key={x.id}
                  className="list-box"
                  variants={elementVariants}
                >
                  <ListItem project={x} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </WorkContainer>
    </WorkSection>
  )
}

const WorkSection = styled.div`
  ${tw`
    relative
    pt-20
    h-screen
    w-screen
    overflow-y-scroll
  `}

  .header-container {
    ${tw`
      fixed
      top-0
      left-0
      flex
      items-center
      justify-between
      mx-auto
      pt-[2rem]
      pb-4
      px-[1rem]
      md:px-[2rem]
      w-full
      z-30
    `}
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.9)`};
  }
`

const WorkContainer = styled.div`
  ${tw`
    flex
    flex-col
    ml-8
    md:ml-16
    px-6
    h-full
    w-[calc(100%_-_2rem - 5px)]
    md:w-[calc(100%_-_4rem - 5px)]
  `}

  .grid-container {
    ${tw`
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-5
      xl:grid-cols-6
      2xl:grid-cols-7
      gap-4
      z-10
    `}
  }

  .list-box {
    ${tw`
      min-h-[14rem]
      max-h-[14rem]
    `}
  }
`

export default WorkPage
