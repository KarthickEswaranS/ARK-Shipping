import './App.css'
import About from './Components/About'
// import Contact from './Components/Contact'
// import WorkProcess from './Components/WorkProcess'
import Hero from './Components/Hero'

function App() {

  return (
    <section className="w-screen p-[40px] bg-white">
      <Hero />
      <About />
      {/* <WorkProcess />
      <Contact /> */}
    </section>

  )
}

export default App
