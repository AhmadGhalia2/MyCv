import './projects.css';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import zumoRobotImg from './img/zumoRobot.jpeg';
import realTime from './img/realTime.jpeg';
import busBording from './img/busBording.jpeg';
import Links from './Navbar'
export default function Projects() {
  return (
    <div>
      {/* <Header /> */}
      <Links />
      <main>
        <div className="galleries">
          <Link className="link" to="/projects/zumo">
            <div className="gallery">
              <img src={zumoRobotImg} alt="Zumo Robot" />
              <div className="text">
                <h3>Zumo Robot</h3>
                <hr className="hr" />
                <p>Robot kan manövrera i åtta olika riktningar och styrs antingen via datorns tangentbord eller en Android-enhet.</p>
              </div>
            </div>
          </Link>

          <Link className="link" to="/projects/realTimeMonitoring">
            <div className="gallery">
              <img src={realTime} alt="Real-time Monitoring System" />
              <div className="text">
                <h3>Real-time Monitoring System for the Student Library</h3>
                <hr className="hr" />
                <p>System för övervakning i realtid som hjälper biblioteket att optimera resurser.</p>
              </div>
            </div>
          </Link>

          <Link className="link" to="/projects/busBoarding">
            <div className="gallery">
              <img src={busBording} alt="Bus Boarding with Face Recognition" />
              <div className="text">
                <h3>Bus Boarding med Ansiktsigenkänning</h3>
                <hr className="hr" />
                <p>Innovativ lösning för ansiktsigenkänning vid bussbordning.</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}