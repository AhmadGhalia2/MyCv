// import './main.css'
import { useLanguage } from "../../../context/LanguageContext.jsx";

export default function RightAside() {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="right-aside">
      <div className="education-container">
        <h3>{language === "sv" ? "UTBILDNING" : "EDUCATION"}</h3>

        <div className="education-entry">
          <p><strong>Lnu universitet</strong></p>
          <p><em>{language === "sv" ? "Datateknik Ingenjör | 2020 - 2024" : "Computer Engineering | 2020 - 2024"}</em></p>
          <p>
            {language === "sv"
              ? "Högskoleingenjör. Fokus på datateknik, systemutveckling och problemlösning. Har genomfört projekt inom både frontend och backend utveckling."
              : "Bachelor's degree with a focus on computer engineering, system development, and problem-solving. Completed projects in both frontend and backend development."}
          </p>
        </div>

        <div className="education-entry">
          <p><strong>IT Institutet</strong></p>
          <p><em>{language === "sv" ? "Högskola | 2013 - 2015" : "College | 2013 - 2015"}</em></p>
          <p>{language === "sv" ? "Programmering Institutet" : "Programming Institute"}<br />Syrien</p>
          <p>
            {language === "sv"
              ? "Studerade grundläggande och avancerade programmeringskoncept med inriktning på programvaruutveckling."
              : "Studied basic and advanced programming concepts with a focus on software development."}
          </p>
        </div>

        <div className="education-entry">
          <p><strong>Industriell Yrkes</strong></p>
          <p><em>{language === "sv" ? "Programmering Gymnasiet | 2010 - 2013" : "Industrial Programming High School | 2010 - 2013"}</em></p>
          <p>Syrien</p>
          <p>
            {language === "sv"
              ? "Fördjupning inom industriell programmering och IT-baserade lösningar för industriella tillämpningar."
              : "Specialized in industrial programming and IT-based solutions for industrial applications."}
          </p>
        </div>
      </div>

      <h3>{language === "sv" ? "DATORKUNSKAPER" : "COMPUTER SKILLS"}</h3>

      <div className="skill">
        <p><strong>{language === "sv" ? "Programmering och felsökning:" : "Programming and Debugging:"}</strong></p>
        <p>
          {language === "sv"
            ? "Mycket goda kunskaper i Java, Python samt fullstack-utveckling (HTML, CSS, JavaScript, React, TypeScript och Nodejs). Erfarenhet av inbyggda system och maskininlärning, vilket ger mig möjlighet att utveckla och felsöka komplexa system och applikationer."
            : "Strong knowledge in Java, Python, and full-stack development (HTML, CSS, JavaScript, React, TypeScript, and Node.js). Experience with embedded systems and machine learning, allowing me to develop and debug complex systems and applications."}
        </p>
      </div>

      <div className="skill">
        <p><strong>{language === "sv" ? "Övrigt:" : "Other:"}</strong></p>
        <p>
          {language === "sv"
            ? "Erfarenhet av MS Office (PowerPoint, Word, Outlook) och operativsystemen Windows, macOS och Linux. Van användare av GitLab och har goda kunskaper i objektorienterad programmering, vilket möjliggör effektiv hantering av utvecklingsprocesser och versionskontroll."
            : "Experience with MS Office (PowerPoint, Word, Outlook) and operating systems like Windows, macOS, and Linux. Familiar with GitLab and well-versed in object-oriented programming, enabling efficient management of development processes and version control."}
        </p>
      </div>
    </div>
  );
}