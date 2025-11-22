
import './App.css'
import Banner from './component/banner/banner'
import Choose from './component/choose/choose'
import Client from './component/client/client'
import Footer from './component/footer/footer'
import Form from './component/form/form'
import Navbar from './component/navbar/navbar'
import Service from './component/service/service'
import Success from './component/success/success'
import Work from './component/work/work'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Success></Success>
    <Service></Service>
    <Work></Work>
    <Choose></Choose>
    <Client></Client>
    <Form></Form>
    <Footer></Footer>
    </>
  )
}

export default App
