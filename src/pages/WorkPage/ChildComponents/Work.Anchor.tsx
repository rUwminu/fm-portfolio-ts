import React, { useRef, useEffect, RefObject } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { LinkSvgC, AnchorSvgC } from '../../../assets/index'

const Anchor: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | any>(null)
  const hiddenRef = useRef(null)

  const handleScroll = () => {
    console.log('trigger?')

    // let scrollPosition = window.pageYOffset
    // let windowHeight = window.innerHeight
    // let bodyHeight = document.body.offsetHeight

    // let diff = Math.max(bodyHeight - (scrollPosition + windowHeight))

    // let diffPosition = (diff * 100) / (bodyHeight - windowHeight)

    // sliderRef.current.style.transform = `translateY(${diffPosition})`
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    //return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <SliderBox ref={sliderRef}>
        {[...Array(25)].map((x, idx) => (
          <LinkSvgC
            key={idx}
            width={25}
            height={25}
            fill="currentColor"
            className="chain"
          />
        ))}
        <AnchorSvgC width={70} height={70} fill="currentColor" />
      </SliderBox>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    relative
  `}
`

const SliderBox = styled.div`
  ${tw`
    fixed
    top-0
    right-[4rem]
    flex
    flex-col
    items-center
    justify-start
    z-0
  `}
  transform: translateY(-70%);

  .chain {
    transform: rotate(135deg);
  }
`

export default Anchor
