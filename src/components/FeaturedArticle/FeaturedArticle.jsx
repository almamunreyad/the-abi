import Link from "next/link";
import style from "./FeaturedArticle.module.scss";
import CtaBtn from "../CtaBtn/CtaBtn";

const FeaturedArticle = () => {
  const backgroundImage = {
    backgroundImage: `url(/images/Image.jpg)`,
  };

  return (
    <>
      <section className={style.articleBlock}>
        <div className="holder">
          <div className={style.titleBlock}>
            <h2 className={style.sectionTitle}>Featured Media </h2>

            <div className={style.btnBlock}>
              <CtaBtn
                additionalClass={style.ctaBtn}
                url="#"
                btnLabel='See all'
              />
            </div>
          </div>

          <article className={style.articleBody}>
            <Link
              href={"#"}
              className={style.articleBlock__img}
              style={backgroundImage}
            >
              <div
                className={`${style.infoWrap} ${style.leftBorder} ${style.borderTeal}`}
              >
                <div className={style.catDateWrap}>
                  <div
                    className={`${style.catDateWrap__category} ${style.colorTeal}`}
                  >
                    Press release
                  </div>
                  <div className={style.catDateWrap__date}>
                    <span>30.10.2023</span>
                  </div>
                </div>
                <div className={style.excerpt}>
                  Stuck in overdrive. Record motor insurance payouts keep
                  motorists moving
                </div>
              </div>
            </Link>
            {/* <!-- /.articleBlock__img --> */}

            <div className={style.articleBlock__relatedArticles}>
              <Link
                href={"#"}
                className={style.articleBlock__relatedArticles_item}
              >
                <div
                  className={`${style.infoWrap} ${style.leftBorder} ${style.borderTeal}`}
                >
                  <div className={style.catDateWrap}>
                    <div
                      className={`${style.catDateWrap__category} ${style.colorCoral}`}
                    >
                      Press release
                    </div>
                    <div className={style.catDateWrap__date}>
                      <span>30.10.2023</span>
                    </div>
                    <div className={style.catDateWrap__position}>
                      <span>MEMBER only</span>
                    </div>
                  </div>
                  <div className={style.excerpt}>
                    Insurance Advice for Storm Henk and Floods
                  </div>
                </div>
              </Link>

              <Link
                href={"#"}
                className={style.articleBlock__relatedArticles_item}
              >
                <div
                  className={`${style.infoWrap} ${style.leftBorder} ${style.borderCoral}`}
                >
                  <div className={style.catDateWrap}>
                    <div
                      className={`${style.catDateWrap__category} ${style.colorTeal}`}
                    >
                      Opinion
                    </div>
                    <div className={style.catDateWrap__date}>
                      <span>30.10.2023</span>
                    </div>
                  </div>
                  <div className={style.excerpt}>
                    Motor Insurance Premiums Continue to Rise as Insurers Battle
                    Costs
                  </div>
                </div>
              </Link>

              <Link
                href={"#"}
                className={style.articleBlock__relatedArticles_item}
              >
                <div
                  className={`${style.infoWrap} ${style.leftBorder} ${style.borderTeal}`}
                >
                  <div className={style.catDateWrap}>
                    <div
                      className={`${style.catDateWrap__category} ${style.borderCoral}`}
                    >
                      Press release
                    </div>
                    <div className={style.catDateWrap__date}>
                      <span>30.10.2023</span>
                    </div>
                  </div>
                  <div className={style.excerpt}>
                    ABI Cautions that Lifetime Provider Models Would Re-Engineer
                    Auto-Enrolment
                  </div>
                </div>
              </Link>

              <Link
                href={"#"}
                className={style.articleBlock__relatedArticles_item}
              >
                <div
                  className={`${style.infoWrap} ${style.leftBorder} ${style.borderTeal}`}
                >
                  <div className={style.catDateWrap}>
                    <div
                      className={`${style.catDateWrap__category} ${style.colorTeal}`}
                    >
                      Press release
                    </div>
                    <div className={style.catDateWrap__date}>
                      <span>30.10.2023</span>
                    </div>
                  </div>
                  <div className={style.excerpt}>
                    Personalised Guidance and Financial Decision Making
                  </div>
                </div>
              </Link>

              <Link
                href={"#"}
                className={style.articleBlock__relatedArticles_item}
              >
                <div
                  className={`${style.infoWrap} ${style.leftBorder} ${style.borderCyan}`}
                >
                  <div className={style.catDateWrap}>
                    <div
                      className={`${style.catDateWrap__category} ${style.borderCoral}`}
                    >
                      speeches
                    </div>
                    <div className={style.catDateWrap__date}>
                      <span>30.10.2023</span>
                    </div>
                  </div>
                  <div className={style.excerpt}>
                    New appointments to the ABI Board
                  </div>
                </div>
              </Link>

            </div>
            {/* <!-- /.related-articles --> */}
          </article>

          <div className={`${style.btnBlock} ${style.bottomBtn}`}>
            <CtaBtn btnLabel="See all" url={"#"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedArticle;
