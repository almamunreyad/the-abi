import Link from "next/link";
import style from "./FeaturedItem.module.scss";
import CtaBtn from "../CtaBtn/CtaBtn";

export default function FeatuedItem() {
  return (
    <>
      <section className={style.featuredItems}>
        <div className="holder">
          <div className="featuredWrapper">
            <div className="titleBlock">
              <h2 className={style.sectionTitle}>Featured Topics</h2>
              <div className="btnBlock">
                <CtaBtn
                  url={"#"}
                  btnLabel="See all"
                  additionalClass={style.ctaBtn}
                />
              </div>
            </div>
            {/* <!-- /.title--block --> */}

            <div className={style.featuredWrap}>
              <Link href="#" className={style.featuredWrap__item}>
                <div className={style.featuredWrap__item_content}>
                  <h4>Fraud</h4>
                  <div className={style.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M8.49268 32L6.66602 30.12L20.3594 15.9733L6.70602 1.88L8.53268 0L23.9993 15.9733L8.49268 32Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <img src="/images/Graphic12.svg" alt="" />
              </Link>

              <Link href="#" className={style.featuredWrap__item}>
                <div className={style.featuredWrap__item_content}>
                  <h4>AI</h4>
                  <div className={style.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M8.49268 32L6.66602 30.12L20.3594 15.9733L6.70602 1.88L8.53268 0L23.9993 15.9733L8.49268 32Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <img src="/images/Graphic12.svg" alt="" />
              </Link>
            </div>
            {/* <!-- /.featured--wrap --> */}

            <div className="btnBlock bottomBtn">
              <CtaBtn
                url={"#"}
                btnLabel="See all"
                additionalClass={style.ctaBtn}
              />
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
