import tw from 'twin.macro'
import styled, { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { darkTheme, lightTheme } from './components/ThemeState/ThemeState'

// Pages Component
import {
  MainPage,
  AboutPage,
  SkillPage,
  BlogPage,
  WorkPage,
} from './pages/index'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/skills" element={<SkillPage />} />

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/project" element={<WorkPage />} />
        </Routes>
      </MainContainer>
    </ThemeProvider>
  )
}

const MainContainer = styled.div`
  ${tw`
    w-screen
  `}
`

export default App
