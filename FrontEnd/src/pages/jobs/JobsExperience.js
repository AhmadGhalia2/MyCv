import "./jobs.css";
import { useLanguage } from "../../context/LanguageContext"; // Import the language context hook

export default function JobsExperience() {
  const { language } = useLanguage(); // Get current language

  return (
    <div>
      <main>
        <section className="section">
          <h3>{language === "sv" ? "YRKESUTBILDNING" : "Vocational Training"}</h3>
          <div className="education">
            <p>
              <strong>{language === "sv" ? "Truckförare" : "Forklift Operator"}</strong>
              <br />
              Tya, Arboga
            </p>
            <p>
              {language === "sv"
                ? "Jag har utbildat mig som truckförare i Tya, Arboga, hade gjort det praktiskt och teoretiskt."
                : "I trained as a forklift operator at Tya, Arboga, gaining both practical and theoretical experience."}
              <br />
              {language === "sv" ? "Trucktyp: A1-A4 och B1-B4" : "Truck types: A1-A4 and B1-B4"}
            </p>
            <p>
              <strong>{language === "sv" ? "AM, B Körkort" : "AM, B Driver’s License"}</strong>
            </p>
            <p>{language === "sv" ? "Från och med: 2019" : "Since: 2019"}</p>
          </div>
        </section>

        <section className="section">
          <h3>{language === "sv" ? "ARBETSLIVSERFARENHET" : "Work Experience"}</h3>
          <div className="experience">
            <div className="job">
              <p>
                <strong>
                  {language === "sv"
                    ? "Truckförare, (55% kontrakt)"
                    : "Forklift Operator (55% contract)"}
                </strong>
                <br />
                PostNord | 2021 - 2024
              </p>
              <ul>
                <li>
                  {language === "sv"
                    ? "Ansvarig för effektiv hantering och transport av pallar (lastning och lossning samt truckkörning) under helger."
                    : "Responsible for efficient handling and transport of pallets (loading and unloading as well as forklift driving) on weekends."}
                </li>
                <li>
                  {language === "sv"
                    ? "Utnyttjade förmågan att snabbt anpassa mig till olika arbetsflöden och arbetsbelastningar."
                    : "Utilized the ability to quickly adapt to different workflows and workloads."}
                </li>
                <li>
                  {language === "sv"
                    ? "Bidrog till att upprätthålla och förbättra logistikeffektiviteten genom noggrannhet och tidsförvaltning."
                    : "Contributed to maintaining and improving logistics efficiency through accuracy and time management."}
                </li>
              </ul>
            </div>

            <div className="job">
              <p>
                <strong>
                  {language === "sv"
                    ? "Nattarbete, Alwex (Timanställning)"
                    : "Night Shift, Alwex (Hourly Employment)"}
                </strong>
                <br />
                StudentConsulting | 2020 - 2024
              </p>
              <ul>
                <li>
                  {language === "sv"
                    ? "Utförde en rad uppgifter relaterade till lagerhantering och logistik samt truckkörning under nattskiftet."
                    : "Performed a range of tasks related to warehouse management and logistics, including forklift driving during night shifts."}
                </li>
                <li>
                  {language === "sv"
                    ? "Engagerade mig i teamarbete och bidrog till en positiv arbetsmiljö under krävande arbetsförhållanden."
                    : "Engaged in teamwork and contributed to a positive work environment under demanding conditions."}
                </li>
              </ul>
            </div>

            <div className="job">
              <p>
                <strong>
                  {language === "sv"
                    ? "Tidningsbärare (sommar jobb)"
                    : "Newspaper Carrier (Summer Job)"}
                </strong>
                <br />
                Point Logistik | 06/2018 - 09/2020
              </p>
              <p>
                {language === "sv"
                  ? "Dela ut tidningar, post, reklam, samhällsinformation och paket. Utdelningen sker till alla typer av boenden och företag."
                  : "Delivered newspapers, mail, advertisements, community information, and packages to various residential and business locations."}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
