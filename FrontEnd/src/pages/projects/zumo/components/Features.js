import { useLanguage } from "../../../../context/LanguageContext"; // Import language hook

const Features = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="features">
      <h2>
        {language === "sv" ? "Viktiga Funktioner" : "Key Features"}
      </h2>
      <ul>
        <li>
          {language === "sv"
            ? "360° rörlighet med styrning via tangentbord eller Android-app via Bluetooth"
            : "360° mobility with control via keyboard or Android app via Bluetooth"}
        </li>
        <li>
          {language === "sv"
            ? "Ultraljudssensor för att upptäcka och undvika hinder"
            : "Ultrasonic sensor for detecting and avoiding obstacles"}
        </li>
        <li>
          {language === "sv"
            ? "IR-sensor för att följa en vit linje och hålla roboten på spåret"
            : "IR sensor to follow a white line and keep the robot on track"}
        </li>
        <li>
          {language === "sv"
            ? "Tre driftslägen: Manuell styrning, självkörning med ultraljudssensor och linjespårning"
            : "Three operating modes: Manual control, autonomous driving with an ultrasonic sensor, and line tracking"}
        </li>
      </ul>
    </div>
  );
};

export default Features;
