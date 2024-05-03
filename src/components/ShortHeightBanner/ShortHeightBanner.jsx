import style from "./ShortHeightBanner.module.scss";

export default function ShortHeightBanner() {
  return (
    <>
      <section
        className={style.shortHeightBanner}
        style={{ backgroundImage: `url(/images/image5.jpg)` }}
      >
        <div className={`holder ${style.holder}`}>
          <div className="contentWrap">
            <h2 className={style.sectionTitle}>Regulation</h2>
          </div>
        </div>
      </section>
    </>
  );
}
