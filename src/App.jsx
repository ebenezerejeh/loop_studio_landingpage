import { useState } from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'


function App() {
  const [toggle, setToggle] = useState(false)

  const openSideBar = () =>{
    setToggle(true);

  }
  
  const closeSideBar = () =>{
    setToggle(false);

  }

  return (
    <>
      <div className="main_container">

        <Header openSideBar={openSideBar} closeSideBar={closeSideBar} toggle={toggle}/>

        <Section/>

        <Footer/>

     </div>
      
    </>
  )
}

export default App
