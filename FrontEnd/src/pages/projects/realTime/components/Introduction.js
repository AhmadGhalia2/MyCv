import { useLanguage } from "../../../../context/LanguageContext"; // Import language hook

const Introduction = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="introduction">
      <h1>
        {language === "sv"
          ? "Realtidsövervakningssystem för Studentbiblioteket"
          : "Real-time Monitoring System for the Student Library"}
      </h1>
      <p>
        {language === "sv"
          ? "Realtidsövervakningssystem för studentbiblioteket är ett projekt som syftar till att förbättra bibliotekshantering genom att automatisera räkningen av studenter som går in och ut. Systemet använder Arduino-baserad teknik och infraröda (IR) sensorer för att spåra fottrafik i realtid. Data överförs till en central server och visas i ett användarvänligt gränssnitt, vilket möjliggör bättre resursfördelning och anläggningshantering."
          : "The real-time monitoring system for the student library is a project aimed at improving library management by automating the counting of students entering and exiting. The system utilizes Arduino-based technology and infrared (IR) sensors to track foot traffic in real-time. Data is transmitted to a central server and displayed in a user-friendly interface, enabling better resource allocation and facility management."}
      </p>
    </div>
  );
};

export default Introduction;
