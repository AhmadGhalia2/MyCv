// import Header from "../../components/header/Header"
// import Footer from '../../../components/Footer'
import Navbar from '../Navbar'
import Introduction from './components/Introduction';
import Features from './components/Features';
import Gallery from './components/Gallery';
// import './busBoarding.css'
export default function BusBoarding() {
  return(
    <div>
      {/* <Header/> */}
      <Navbar/>
      <main>
        <Introduction/>
        <Features/>
        <Gallery/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}