import Link from "next/link";
import style from "./CtaBtn.module.scss";

export default function CtaBtn({additionalClass, btnLabel, url}) {
  // console.log(additionalClass);
  return (
    <>
      <Link href={url ? url : "#"} className={`${style.ctaBtn} ${additionalClass ? additionalClass : ""}`}>
        {btnLabel ? btnLabel : "Read More"}
      </Link>
    </>
  );
}
