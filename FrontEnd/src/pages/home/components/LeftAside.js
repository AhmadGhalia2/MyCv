import { useLanguage } from "../../../context/LanguageContext.jsx";

export default function LeftAside() {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="left-aside">
      <div>
        <div className="tittle">
          <p className="name">Ahmad Ghlaia</p>
          <p className="under-name">
            {language === "sv" ? "Software Engineer" : "Software Engineer"}
          </p>
        </div>

        <h3>{language === "sv" ? "Personlig Bakgrund test" : "Personal Background"}</h3>
        <hr />
        <p>
          {language === "sv"
            ? "En entusiastisk och resultatinriktad datateknikingenjör med ett djupt intresse för fullstack-programmering, Internet of Things (IoT) och programmering."
            : "An enthusiastic and results-driven computer engineering professional with a deep interest in full-stack programming, Internet of Things (IoT), and software development."}
          <br /><br />
          {language === "sv"
            ? "Jag är hängiven åt kontinuerligt lärande och strävar efter att praktiskt tillämpa mina kunskaper genom olika projekt."
            : "I am dedicated to continuous learning and strive to apply my knowledge practically through various projects."}
          <br /><br />
          {language === "sv"
            ? "Utöver mina akademiska strävanden engagerar jag mig i personliga utvecklingsprojekt och värdesätter tid med familj och vänner."
            : "Beyond my academic pursuits, I engage in personal development projects and value time with family and friends."}
          <br /><br />
        </p>
      </div>

      <div>
        <h3>{language === "sv" ? "Mina Styrkor" : "My Strengths"}</h3>
        <hr />
        <ul>
          <li>
            {language === "sv"
              ? "Som individ är jag bra på att komma i tid och respektera tiden i allmänhet."
              : "As an individual, I am punctual and value time in general."}
          </li>
          <li>
            {language === "sv"
              ? "Jag anser mig själv flexibel, med social kompetens och har lätt för att lära mig nya saker."
              : "I consider myself flexible, socially competent, and quick to learn new things."}
          </li>
          <li>
            {language === "sv"
              ? "Jag är en bra kommunikatör. Bra kommunikation är det bästa sättet att nå våra mål som ett team."
              : "I am a good communicator. Effective communication is the best way to achieve our goals as a team."}
          </li>
          <li>
            {language === "sv"
              ? "Jag är ärlig och har bra arbetsmoral. Det är viktigt att respektera alla och hjälpas åt för att nå så långt som möjligt."
              : "I am honest and have a strong work ethic. It is important to respect everyone and support each other to achieve the best results."}
          </li>
          <li>
            {language === "sv"
              ? "Jag försöker alltid att lära mig från andra och utveckla deras idéer och färdigheter för problemlösning."
              : "I always try to learn from others and develop their ideas and problem-solving skills."}
          </li>
        </ul>
      </div>
    </div>
  );
}
