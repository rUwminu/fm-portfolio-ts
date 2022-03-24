import React, { Dispatch, SetStateAction } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

interface Props {
  filterType: string
  setFilterType: Dispatch<SetStateAction<string>>
}

const ListFilter: React.FC<Props> = ({ filterType, setFilterType }) => {
  const handleTypeFilter = (type: string) => {
    setFilterType(type)
  }

  return (
    <FilterContainer>
      <div
        className={`btn ${filterType === 'all' && 'active'}`}
        onClick={() => handleTypeFilter('all')}
      >
        All
      </div>
      <div
        className={`btn ${filterType === 'frontend' && 'active'}`}
        onClick={() => handleTypeFilter('frontend')}
      >
        Frontend
      </div>
      <div
        className={`btn ${filterType === 'fullstack' && 'active'}`}
        onClick={() => handleTypeFilter('fullstack')}
      >
        Fullstack
      </div>
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-start
    py-2
    mb-4
    z-10
  `}

  .btn {
    ${tw`
        flex
        items-center
        justify-center
        mr-3
        py-1
        px-4
        font-semibold
        border
        cursor-pointer
        rounded-2xl

        transition
        duration-200
        ease-in-out
    `}
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    border-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};

    &.active {
      ${tw`
        bg-blue-700
        text-gray-100
        border-blue-700
      `}
    }
  }
`

export default ListFilter
