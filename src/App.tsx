import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
// import WorkProcess from './Components/WorkProcess'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Why from './Components/Why'
import { Counter } from './Components/Counter'
import { Feedback } from './Components/Feedback'

function App() {

  return (
    <section className="w-dvw flex flex-col relative justify-center items-center">
      <Hero />
      <About />
      <Services />
      {/* <WorkProcess /> */}
      <Why />
      <Counter />
      <Feedback />
      <Contact />

    </section>
  )
}

export default App
