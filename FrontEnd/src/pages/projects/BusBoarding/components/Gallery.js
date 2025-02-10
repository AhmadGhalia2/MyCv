import { useLanguage } from "../../../../context/LanguageContext"; // Import the language context hook
import img1 from '../img/busBording.jpeg';
import img2 from '../img/busBording2.JPG';
import ved1 from '../img/37A62978-C34B-442F-A0C2-28E901339557.mp4';
import ved2 from '../img/C084422A-C7F5-4EB5-BF78-6A63D743612F.mp4';
import ved3 from '../img/IMG_1977.MOV';
import ved4 from '../img/IMG_1979.MOV';

const Gallery = () => {
  const { language } = useLanguage(); // Get selected language

  return (
    <div className="galleries">
      <div className="gallery">
        <h2>{language === "sv" ? "Busspåstigning" : "Bus Boarding"}</h2>
        <div className="images">
          <p>
            {language === "sv"
              ? "Denna robot kan manövrera i åtta olika riktningar och styrs antingen via datorns tangentbord eller en Android-enhet."
              : "This robot can maneuver in eight different directions and is controlled via a computer keyboard or an Android device."}
          </p>
          <img src={img1} alt="Zumo Robot" />
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
          <img src={img2} alt="Zumo Robot" />
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
        <h2>{language === "sv" ? "Linjespårning" : "Line Tracking"}</h2>
        <div className="videos">
          <p>
            {language === "sv"
              ? "Dessutom är Zumon kapabel att följa en svart linje, en funktion som realiseras med hjälp av en IR-sensor."
              : "Additionally, the Zumo is capable of following a black line, a function enabled by an IR sensor."}
          </p>
          <video src={ved3} controls />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Linjespårning" : "Line Tracking"}</h2>
        <div className="videos">
          <p>
            {language === "sv"
              ? "Dessutom är Zumon kapabel att följa en svart linje, en funktion som realiseras med hjälp av en IR-sensor."
              : "Additionally, the Zumo is capable of following a black line, a function enabled by an IR sensor."}
          </p>
          <video src={ved4} controls />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
