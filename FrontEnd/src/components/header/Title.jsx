/** @format */
import { useLanguage } from "../../context/LanguageContext";

export default function Title({ name, title }) {
  const { language, toggleLanguage } = useLanguage(); // Access context
  return (
    <div className="tittle-text">
      <h1 className="tittle-name">{name}</h1>
      <h4 className="under-name"> {title} </h4>
      <button onClick={toggleLanguage} className="language-switch">
        {language === "sv" ? "Show in English" : "Visa i Svenska"}
      </button>
    </div>
  );
}
