import './header.css'
import '../responsable.css'
import Profile from './Profile'
import Title from './Title';
import Navbar from './Navbar';
export default function Header() {
  return (
    < header >
      <div class="header-container">
        <div class="top-header">
          <Profile imgPath="/img/private-img.jpg"/>
          <Title name="Ahmad Ghalia" title="Datateknik Ingenjör" />
        </div>
        <Navbar />
      </div>
    </header>
  )
}