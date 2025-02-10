// import Header from '../../../components/Header'
// import Footer from '../../../components/Footer'
import Navbar from '../Navbar'
import Introduction from './components/Introduction'
import Features from './components/Features'
import Gallery from './components/Gallery'
import './realTime.css'
export default function RealTime() {
  return (
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