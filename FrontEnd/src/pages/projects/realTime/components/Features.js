import { useLanguage } from "../../../../context/LanguageContext"; // Import the language context hook

const Features = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="features">
      <h2>{language === "sv" ? "Viktiga Funktioner" : "Key Features"}</h2>
      <ul>
        <li>
          {language === "sv"
            ? "Använder IR-sensorer för att övervaka in- och utgångar i realtid."
            : "Uses IR sensors to monitor entrances and exits in real time."}
        </li>
        <li>
          {language === "sv"
            ? "Skickar data via Wi-Fi till en central server för bearbetning."
            : "Sends data via Wi-Fi to a central server for processing."}
        </li>
        <li>
          {language === "sv"
            ? "Visar antalet studenter i bibliotek och andra våning i realtid."
            : "Displays the number of students in the library and other floors in real time."}
        </li>
        <li>
          {language === "sv"
            ? "Systemet använder Wi-Fi-moduler för att säkerställa pålitlig dataöverföring mellan hårdvaran och servern."
            : "The system uses Wi-Fi modules to ensure reliable data transfer between hardware and the server."}
        </li>
        <li>
          {language === "sv"
            ? "Realtidsuppdateringar visas smidigt i ett webbaserat användargränssnitt."
            : "Real-time updates are smoothly displayed in a web-based user interface."}
        </li>
      </ul>
    </div>
  );
};

export default Features;
