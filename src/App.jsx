
import './App.css'
import BestSelling from './components/BestSelling/BestSelling'
import ChoosingUs from './components/ChoosingUs/ChoosingUs'
import ClientReview from './components/ClientReview/ClientReview'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Materials from './components/Materials/Materials'

function App() {

  return (
    <>
      <Home/>
      <ChoosingUs/>
      <BestSelling/>
      <Experience/>
      <Materials/>
      <ClientReview/>
      <Footer/>
    </>
  )
}

export default App
