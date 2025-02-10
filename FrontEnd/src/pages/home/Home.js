
import './components/home.css'
import RightAside from './components/RightAside'
import LeftAside from './components/LeftAside'
export default function Main() {
  return (
    <div>
      
      <main>
        <div className="main-container">
          <LeftAside />
          <RightAside />
        </div>
      </main>
    </div>
  )
}