import { useLanguage } from "../../../../context/LanguageContext"; // Import language hook
import img1 from "../img/zumoRobot2.jpeg";
import img2 from "../img/IMG_8938.JPG";
import img3 from "../img/IMG_8723.jpeg";
import ved1 from "../img/68CF6135-C8C2-443F-BDC4-BC1819091F79.mp4";
import ved2 from "../img/recorded-2086419032739.mp4";

const Gallery = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="galleries">
      <div className="gallery">
        <h2>{language === "sv" ? "Zumo Roboten" : "Zumo Robot"}</h2>
        <div className="images">
          <p>
            {language === "sv"
              ? "Denna robot kan manövrera i åtta olika riktningar och styrs antingen via datorns tangentbord eller en Android-enhet."
              : "This robot can maneuver in eight different directions and is controlled either via a computer keyboard or an Android device."}
          </p>
          <img src={img1} alt="Zumo Robot" />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Hårdvara och Mjukvara" : "Hardware and Software"}</h2>
        <div className="images">
          <p>
            {language === "sv"
              ? "Både hårdvara och mjukvara används för att komma igång med kommunikation mellan Android-appen och Arduino."
              : "Both hardware and software are used to establish communication between the Android app and Arduino."}
          </p>
          <img src={img2} alt="Zumo Robot" />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Koppling" : "Connectivity"}</h2>
        <div className="images">
          <p>
            {language === "sv"
              ? "För att genomföra manuell styrning utan att ha några kablar i vägen använde vi oss av Bluetooth-modulen."
              : "To enable manual control without having any cables in the way, we used the Bluetooth module."}
          </p>
          <img src={img3} alt="Zumo Robot" />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Självkörning med ultraljudssensor" : "Autonomous Driving with Ultrasonic Sensor"}</h2>
        <div className="videos">
          <p>
            {language === "sv"
              ? "En ultraljudssensor som manövrerar Zumo roboten för att inte krocka."
              : "An ultrasonic sensor that navigates the Zumo robot to avoid collisions."}
          </p>
          <video src={ved1} controls />
        </div>
      </div>

      <div className="gallery">
        <h2>{language === "sv" ? "Linjespårning" : "Line Tracking"}</h2>
        <div className="videos">
          <p>
            {language === "sv"
              ? "Dessutom är Zumon kapabel att följa en svart linje, en funktion som realiseras med hjälp av en IR-sensor."
              : "Additionally, the Zumo robot can follow a black line, a feature enabled by an IR sensor."}
          </p>
          <video src={ved2} controls />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
