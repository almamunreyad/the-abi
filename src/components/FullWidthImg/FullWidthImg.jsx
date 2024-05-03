import Link from "next/link";
import CtaBtn from "../CtaBtn/CtaBtn";
import style from "./FullWidthImg.module.scss";

export default function FullWidthImg() {
  return (
    <>
      <section
        className={style.fullWidthTextImg}
        style={{ backgroundImage: `url(/images/pexels.jpg)` }}
      >
        <div className={`holder ${style.holder}`}>
          <div className="titleTextWrap">
            <h2 className={style.sectionTitle}>
              Join <span>The ABI</span> lorem ipsum sit amet egestas
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              suspendisse egestas volutpat, eu, nisi, sapien.
            </p>
            <div className="btnBlock">
              <CtaBtn url={"#"} btnLabel="Join The ABI" additionalClass={style.ctaBtn} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
