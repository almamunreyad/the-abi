import Link from "next/link";
import style from "./NewsCard.module.scss";

export default function NewsCard({ data }) {
  
  return (
    <>
      <Link href="#" className={style.newsWrap__item}>
        <div
          className={style.newsWrap__item_img}
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
        ></div>
        <div className={`${style.newsWrap__item_content} ${style.leftBorder}`}>
          <h3>{data.heading}</h3>
          <p>{data.excerpt}</p>
        </div>
      </Link>
    </>
  );
}
