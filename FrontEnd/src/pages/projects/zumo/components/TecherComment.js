import { useLanguage } from "../../../../context/LanguageContext"; // Import language context hook

const TecherComment = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="techerComment">
      <h2>
        {language === "sv" ? "Lärarkommentar" : "Teacher's Comment"}
      </h2>
      <p>
        {language === "sv" ? (
          <>
            "Ett stort och omfattande projekt med många features. <br />
            Jag betecknar projektet som 'svårt' eftersom det innehåller många nya moment som skall fungera tillsammans. Jag tycker också att ni visade kreativitet och uppfinningsrikedom när ni stötte på problem. Bra!<br/>
            <br />
            <strong>Muntlig presentation:</strong> Bra! Alla i gruppen medverkade och tog ansvar. Slides och upplägg var OK och demonstrationen övertygande. Ni lyckades också hjälpligt förklara systemets olika delar.<br/>
            <br />
            <strong>Rapport:</strong> Saklig och systematisk, språkligt bra, och den följde mall och rekommenderat upplägg. Riktigt bra faktiskt! Bra med en tydlig överblick i början av 'Genomförande' och kul med alla fina bilder på systemets olika delar.<br/>
            <br />
            <strong>Övrigt:</strong> Grupparbetet verkar ha fungerat bra. Ni har alla varit aktiva och bidragit efter bästa förmåga."
          </>
        ) : (
          <>
            "A large and comprehensive project with many features. <br />
            I classify the project as 'difficult' because it includes many new components that must work together. I also think you showed creativity and ingenuity when encountering problems. Well done!<br/>
            <br />
            <strong>Oral Presentation:</strong> Good! Everyone in the group participated and took responsibility. The slides and structure were OK, and the demonstration was convincing. You also managed to explain the system's various parts adequately.<br/>
            <br />
            <strong>Report:</strong> Objective and systematic, linguistically well-written, and it followed the template and recommended structure. Really good, actually! It was great to have a clear overview at the beginning of the 'Implementation' section, and all the nice pictures of the system's different parts were enjoyable.<br/>
            <br />
            <strong>Other:</strong> The group work seems to have gone well. Everyone has been active and contributed to the best of their ability."
          </>
        )}
      </p>
      <p className="info">
        Associate Professor Jonas Lundberg <br />
        Department of Computer Science<br />
        Linnaeus University<br />
        Växjö, Sweden<br />
        email: <a href="mailto:Jonas.Lundberg@lnu.se">Jonas.Lundberg@lnu.se</a><br />
      </p>
    </div>
  );
};

export default TecherComment;
