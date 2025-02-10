// import './zumo.css'
import Navbar from '../Navbar'
// import Header from '../../../components/Header'
// import Footer from '../../../components/Footer'
import Introduction from './components/Introduction';
import Features from './components/Features';
import Gallery from './components/Gallery';
import TecherComment from './components/TecherComment'
export default function ZumoRobot() {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <main>
        <Introduction/>
        <Features/>
        <Gallery/>
        <TecherComment />
      </main>
      {/* <Footer/> */}
    </div>
  )
}