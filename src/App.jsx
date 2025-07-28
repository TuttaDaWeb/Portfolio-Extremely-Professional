import Main_Page from './components/main_page'
import NavBar from './components/navbar'
import About_Me from './components/secundary/AboutMe'
import Projects from './components/secundary/projects/Projects'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import './App.css'

function App() {

  return (
    <>
    <NavBar/>
    <Main_Page/>
    <About_Me/>
    <Projects/>
    </>
  )
}

export default App
