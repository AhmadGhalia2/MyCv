import React from 'react'
import { Link } from 'react-router-dom'
function FooterMiddle() {
  return (
<div class="footer-middle">
          <div className='col'>
            <h3>Projects</h3>
            <ul>
              <li ><Link className='link' to={'/projects/zumo'}> Zumo Robot</Link></li>
              <li><Link className='link' to={'/projects/realTimeMonitoring'}>RealTime Monitoring</Link></li>
              <li><Link className='link' to={'/projects/busBoarding'}> Bus Boarding</Link></li>
            </ul>
          </div>

          <div className='col'>
            <h3>Games</h3>
            {/* <hr/> */}
            <ul>
              <li ><Link className='link' to={'/diceGame'}>Dice Game</Link></li>
              <li ><Link className='link' to={'/projects/zumo'}> Test</Link></li>
              <li ><Link className='link' to={'/projects/zumo'}> Test</Link></li>
            </ul></div>
          <div className='col'>
            <h3 >Contact me</h3>
            <ul>
              <p><b>Mobil:</b> 0736163769</p>
              <p><b>Mejladress: </b> <a href="mailto:ahmadghalea@gmail.com"> ahmadghalea@gmail.com</a></p>
              <p> <b>Adress:</b> Stationsgatan 9 C  Lgh 1006, Lessebo</p>
            </ul>
          </div>
        </div>
  )
}

export default FooterMiddle
