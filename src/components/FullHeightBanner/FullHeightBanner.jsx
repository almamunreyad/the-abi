import Link from "next/link";
import CtaBtn from "../CtaBtn/CtaBtn";
import style from "./FullHeightBanner.module.scss";

export default function FullHeightBanner({
  sectionTitle,
  excerpt,
  btnText,
  scrollText,
}) {

  return (
    <>
      <section className={style.bannerWrapper}>
        <video
          className={style.backgroundVdo}
          autoPlay
          loop
          muted
          src="images/banner-vdo.mp4"
        ></video>

        <div className={`holder ${style.holder}`}>
          <div className={style.contentWrap}>
            <div className={style.contentWrap__text}>
              <h2 className={style.sectionTitle}>{sectionTitle}</h2>

              <p>{excerpt}</p>

              <div className='btnBlock'>
                <CtaBtn url={"#"} btnLabel={btnText} additionalClass={style.ctaBtn} />
              </div>
            </div>

            <div className={style.contentWrap__scroll}>
              <p> {scrollText}</p>
              <img src="images/Rectangle2568.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
