import "./footer.css";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";
export default function Footer() {
  return (
    <div className="footer">
      <div class="footer-container">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </div>
  );
}
