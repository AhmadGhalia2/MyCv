import { useLanguage } from "../../../../context/LanguageContext"; // Import the language context hook

const Introduction = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="introduction">
      <h1>
        {language === "sv"
          ? "Busspåstigning med Ansiktsigenkänning"
          : "Bus Boarding with Facial Recognition"}
      </h1>
      <p>
        {language === "sv"
          ? "Detta projekt utforskar användningen av ansiktsigenkänningsteknik för att förbättra kollektivtrafiken. Genom att integrera en Raspberry Pi, HQ-kamera och FaceNet för ansiktsigenkänning, erbjuder projektet ett säkert och effektivt alternativ till traditionella metoder som RFID och QR-koder. Syftet är att öka hastigheten och säkerheten för passagerarverifiering."
          : "This project explores the use of facial recognition technology to improve public transport. By integrating a Raspberry Pi, HQ camera, and FaceNet for facial recognition, the project offers a secure and efficient alternative to traditional methods such as RFID and QR codes. The goal is to enhance speed and security for passenger verification."}
      </p>
    </div>
  );
};

export default Introduction;
