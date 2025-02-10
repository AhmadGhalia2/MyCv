import { useLanguage } from "../../../../context/LanguageContext"; // Import the language context hook
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpeg';
import img3 from '../img/img3.jpeg';
import ved1 from '../img/ved1.mp4';
import ved2 from '../img/ved2.mp4';
import ved3 from '../img/ved3.mp4';

const Gallery = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="galleries">
      <div className="gallery">
        <h2>{language === "sv" ? "Hårdvara" : "Hardware"}</h2>
        <div className="images">
          <p>
            {language === "sv"
              ? "Arduino-baserad teknik och infraröda (IR) sensorer för att spåra fottrafik i realtid."
              : "Arduino-based technology and infrared (IR) sensors to track foot traffic in real-time."}
          </p>
          <img src={img1} alt="Zumo Robot" />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Hårdvara i Lapsal" : "Hardware in Lab Room"}</h2>
        <div className="images">
          <p>
            {language === "sv"
              ? "Både hårdvara och mjukvara används för att komma igång med kommunikation mellan Android appen och Arduino."
              : "Both hardware and software are used to establish communication between the Android app and Arduino."}
          </p>
          <img src={img2} alt="Zumo Robot" />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Hårdvara och Mjukvara" : "Hardware and Software"}</h2>
        <div className="images">
          <p>
            {language === "sv"
              ? "Både hårdvara och mjukvara används för att komma igång med kommunikation mellan Android appen och Arduino."
              : "Both hardware and software are used to establish communication between the Android app and Arduino."}
          </p>
          <img src={img3} alt="Zumo Robot" />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Självkörning med ultraljudssensor" : "Autonomous Driving with Ultrasonic Sensor"}</h2>
        <div className="videos">
          <p>
            {language === "sv"
              ? "En ultraljudssensor som manövrar Zumo roboten för att inte krocka."
              : "An ultrasonic sensor that guides the Zumo robot to avoid collisions."}
          </p>
          <video src={ved1} controls />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Självkörning med ultraljudssensor" : "Autonomous Driving with Ultrasonic Sensor"}</h2>
        <div className="videos">
          <p>
            {language === "sv"
              ? "En ultraljudssensor som manövrar Zumo roboten för att inte krocka."
              : "An ultrasonic sensor that guides the Zumo robot to avoid collisions."}
          </p>
          <video src={ved2} controls />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Självkörning med ultraljudssensor" : "Autonomous Driving with Ultrasonic Sensor"}</h2>
        <div className="videos">
          <p>
            {language === "sv"
              ? "En ultraljudssensor som manövrar Zumo roboten för att inte krocka."
              : "An ultrasonic sensor that guides the Zumo robot to avoid collisions."}
          </p>
          <video src={ved3} controls />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
