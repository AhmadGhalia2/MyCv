import { useLanguage } from "../../../../context/LanguageContext"; // Import the language context hook

const Features = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="features">
      <h2>{language === "sv" ? "Viktiga Funktioner" : "Key Features"}</h2>
      <ul>
        <li>
          {language === "sv"
            ? "Ansiktsigenkänning i realtid för förbättrad säkerhet i kollektivtrafiken"
            : "Real-time facial recognition for enhanced security in public transport"}
        </li>
        <li>
          {language === "sv"
            ? "Säker dataöverföring med HTTPS och autentiseringstokens"
            : "Secure data transmission with HTTPS and authentication tokens"}
        </li>
        <li>
          {language === "sv"
            ? "Dual-modellsystem med primär och cache-minnesmodeller för effektivitet"
            : "Dual-model system with primary and cache-memory models for efficiency"}
        </li>
        <li>
          {language === "sv"
            ? "Implementering på Raspberry Pi med HQ-kamera för bildinsamling"
            : "Deployment on Raspberry Pi with HQ camera for image collection"}
        </li>
        <li>
          {language === "sv"
            ? "Integration av Python och OpenCV för bildbehandling och ansiktsdetektering"
            : "Integration of Python and OpenCV for image processing and facial detection"}
        </li>
      </ul>
    </div>
  );
};

export default Features;
