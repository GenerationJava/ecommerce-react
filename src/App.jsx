import './App.css'
import Nosotros from './components/Nosotros/Nosotros'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ThemeProvider } from './context/themeContext'

function App() {


  return (
    <>
    <ThemeProvider>
        <div className="App">
          <Navbar />
            <div className='nosotros-container'>
              <Nosotros/>
            </div>
          {/* Otros componentes */}
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
