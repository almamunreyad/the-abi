import Link from "next/link";
import CtaBtn from "../CtaBtn/CtaBtn";
import style from "./PolicyBlock.module.scss";

const PolicyBlock = () => {
  return (
    <>
      <section className={style.policyBlock}>
        <div className="holder">
          <div className={style.policyWrapper}>
            <div className={style.titleBlock}>
              <h2 className={style.sectionTitle}>Policy & Guidance</h2>

              <div className={style.btnBlock}>
                <CtaBtn
                  additionalClass={style.ctaBtn}
                  url="#"
                  btnLabel="Find out more"
                />
              </div>
            </div>

            {/* <!-- /.title--block --> */}

            <div
              className={style.policyWrap}
              style={{ backgroundImage: `url(/images/BG.jpg)` }}
            >
              <Link href="#" className={style.policyWrap__item}>
                <div className={style.textWrap}>
                  <h4>Insurance</h4>
                  <div className={style.excerpt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </Link>

              <Link href="#" className={style.policyWrap__item}>
                <div className={style.textWrap}>
                  <h4>Long-Term Savings</h4>
                  <div className={style.excerpt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </Link>

              <Link href="#" className={style.policyWrap__item}>
                <div className={style.textWrap}>
                  <h4>Health & Protection</h4>
                  <div className={style.excerpt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </Link>

              <Link href="#" className={style.policyWrap__item}>
                <div className={style.textWrap}>
                  <h4>Regulation</h4>
                  <div className={style.excerpt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </Link>
            </div>
            {/* <!-- /.featured--wrap --> */}

            <div className={`${style.btnBlock} ${style.bottomBtn}`}>
              <CtaBtn
                additionalClass={style.ctaBtn}
                url="#"
                btnLabel="Find out more"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyBlock;
