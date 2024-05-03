import Link from "next/link";
import NewsCard from "../NewsCard/NewsCard";
import style from "./NewsPromo.module.scss";

export default function NewsPromo() {
  const data = {
    backgroundImage: "/images/Graphic2.svg",
    heading: "Events",
    excerpt:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse suspendisse egestas volutpat, eu, nisi, sapien. Fermentum sagittis",
  };

  const data2 = {
    backgroundImage: "/images/Graphic3.svg",
    heading: "Talent",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse suspendisse egestas volutpat, eu, nisi, sapien. Fermentum sagittis",
  };

  return (
    <>
      <section className={style.newsPromo}>
        <div className="holder">
          <div className={style.newsWrap}>
            <NewsCard data={data} />

            <NewsCard data={data2} />
          </div>
        </div>
      </section>
    </>
  );
}
