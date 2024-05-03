import Link from "next/link";
import CtaBtn from "../CtaBtn/CtaBtn";
import style from "./Stats.module.scss";

const Stats = () => {
  return (
    <>
      <section className={style.contentWrapper}>
        <div
          className={style.contentWrapper__bgRight}
          style={{ backgroundImage: `url(/images/Graphic.svg)` }}
        ></div>
        <div
          className={style.contentWrapper__bgLeft}
          style={{ backgroundImage: `url(/images/Graphic1.svg)` }}
        ></div>

        <div className="holder">
          <div className={style.titleBlock}>
            <h2 className={style.sectionTitle}>Industry data</h2>

            <div className={style.btnBlock}>
              <CtaBtn
                additionalClass={style.ctaBtn}
                url="#"
                btnLabel="Find out more"
              />
            </div>
          </div>
          {/* <!-- /.title--block --> */}

          <div className={style.stats}>
            <div className={style.stats__item}>
              <p>The UK is the</p>
              <h3>3rd largest</h3>
              <p>
                insurance and long-term savings market in the world and largest
                in Europe
              </p>
              <span>Swiss RE</span>
            </div>
            <div className={`${style.stats__item} ${style.right}`}>
              <p>UK insurance and long-term savings industry contributed</p>
              <h3>£36 billion</h3>
              <p>to the UK economy in 2021.</p>
              <span>ONS</span>
            </div>
            <div className={style.stats__item}>
              <p>ABI members paid</p>
              <h3>£17.2 billion</h3>
              <p>
                in tax in 2021. This was approximately 2% of the total
                government receipts.
              </p>
              <span>ABI</span>
            </div>
            <div className={`${style.stats__item} ${style.right}`}>
              <p>ABI members held</p>
              <h3>£1.5 trillion</h3>
              <p>of invested assets in 2022.</p>
              <span>ABI industry data - package (4)</span>
            </div>
          </div>
          {/* <!-- /.stats --> */}

          <div className={`${style.btnBlock} ${style.bottomBtn}`}>
            <CtaBtn
              additionalClass={style.ctaBtn}
              url="#"
              btnLabel="Find out more"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
