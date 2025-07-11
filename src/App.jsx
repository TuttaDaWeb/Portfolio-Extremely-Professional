import Main_Page from './components/main_page'
import NavBar from './components/navbar'
import About_Me from './components/secundary/AboutMe'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import './App.css'

function App() {

  return (
    <>
    <NavBar/>
    <Parallax pages={2} aria-busy={true}>
      <ParallaxLayer 
        speed={0.8}
        factor={1.2}
        style={{
          backgroundSize: '75%'
        }}>
        <Main_Page />
      </ParallaxLayer>
      <ParallaxLayer 
        offset={1}
        speed={0.5}
        factor={2.2}
        style={{
          backgroundSize: '75%'
        }}
        >
        <About_Me />
      </ParallaxLayer>
    </Parallax>
    </>
  )
}

export default App
