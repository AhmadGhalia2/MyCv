import { useLanguage } from "../../../../context/LanguageContext"; // Import language hook

const Introduction = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="introduction">
      <h1>
        {language === "sv" ? "Zumo Robot-projektet" : "Zumo Robot Project"}
      </h1>
      <p>
        {language === "sv"
          ? "Zumo Robot-projektet är en spännande utmaning som syftar till att skapa en Arduino-baserad robot med 360° mobilitet. Roboten kan styras via Bluetooth med datorns tangentbord eller en Android-app och har flera sensorer för att navigera och undvika hinder på egen hand. Projektet är utformat för att utforska grunderna inom robotteknik och styrsystem."
          : "The Zumo Robot Project is an exciting challenge aimed at creating an Arduino-based robot with 360° mobility. The robot can be controlled via Bluetooth using a computer keyboard or an Android app and is equipped with multiple sensors to navigate and avoid obstacles autonomously. The project is designed to explore the fundamentals of robotics and control systems."}
      </p>
    </div>
  );
};

export default Introduction;
