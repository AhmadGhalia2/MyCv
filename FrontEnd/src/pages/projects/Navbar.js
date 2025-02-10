import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="project_Navbar">
        <ul className='project_Navbar_ul'>
          <li ><Link className='link' to={'/projects/zumo'}> Zumo Robot</Link></li>
          <li><Link className='link' to={'/projects/realTimeMonitoring'}>RealTime Monitoring</Link></li>
          <li><Link className='link' to={'/projects/busBoarding'}> Bus Boarding</Link></li>
          <li ><Link className='link' to={'/projects'}> Back</Link></li>
        </ul>
      </nav>
    </div>)
}