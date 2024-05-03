import Link from "next/link";
import style from "./TextImgBlock.module.scss";
import CtaBtn from "../CtaBtn/CtaBtn";

export default function TextImgBlock({ additionalClass, data }) {
  // console.log(additionalClass);
  // console.log(data);
  return (
    <>
      <section
        className={`${style.textImgBlock} ${
          additionalClass ? style[additionalClass] : ""
        }`}
      >
        <div className={`holder ${style.holder}`}>
          <div className={style.contentWrap}>
            <div className={style.contentWrap__text}>
              <h2 className={`sectionTitle ${style.sectionTitle}`}>
                {/* <span> About Us</span> lorem ipsum sit amet egestas */}
                {data.sectionTitle}
              </h2>

              {data.para ? <p>{data.para} </p> : null}

              {data.list ? (
                <ul className={style.list}>
                  {data.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {data.para2 ? <p>{data.para2}</p> : null}

              <div className="btnBlock">
                <CtaBtn
                  url={"#"}
                  btnLabel={data.btnLabel}
                  additionalClass={style.ctaBtn}
                />
              </div>
            </div>

            <div className={style.contentWrap__img}>
              <img src={data.image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
