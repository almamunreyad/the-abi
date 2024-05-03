import Link from "next/link";
import style from "./Footer.module.scss";
import CtaBtn from "../CtaBtn/CtaBtn";

export default function Footer() {
  return (
    <>
      <section className={style.footer}>
        <div className={style.footer__top}>
          <div className={`holder ${style.holder}`}>
            <div className={style.footer__top_link}>
              <h4>Popular quick links:</h4>
              <div className={style.btnLinks}>
                <Link className={style.btnLinks__link} href="#">
                  Events
                </Link>
                <Link className={style.btnLinks__link} href="#">
                  Press Release
                </Link>
                <Link className={style.btnLinks__link} href="#">
                  Industry Data
                </Link>
                <Link className={style.btnLinks__link} href="#">
                  Tools
                </Link>
                <Link className={style.btnLinks__link} href="#">
                  Resources
                </Link>
                <Link className={style.btnLinks__link} href="#">
                  ESG
                </Link>
                <Link className={style.btnLinks__link} href="#">
                  Join Us
                </Link>
              </div>
            </div>
            <div className={style.footer__top_search}>
              <h4>Discover more:</h4>

              <form method="" className={style.searchFilter}>
                <input type="search" name="" id="" placeholder="Search" />
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_10_455)">
                      <path
                        d="M16 15.0596L11.9 10.9579C12.8467 9.79742 13.42 8.32347 13.42 6.70946C13.42 3.00792 10.4067 0 6.70667 0C3.00667 0 0 3.00792 0 6.70946C0 10.411 3.00667 13.4189 6.70667 13.4189C8.31333 13.4189 9.79333 12.8454 10.9533 11.8983L15.0533 16L16 15.0529V15.0596ZM1.33333 6.70946C1.33333 3.74823 3.74667 1.33389 6.70667 1.33389C9.66667 1.33389 12.08 3.74823 12.08 6.70946C12.08 9.6707 9.66667 12.085 6.70667 12.085C3.74667 12.085 1.33333 9.67737 1.33333 6.70946Z"
                        fill="#B5B3B6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_455">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={style.footer__bottom}>
          <div className={`holder ${style.holder}`}>
            <div className={style.footer__bottom_info}>
              <div className={style.logo}>
                <Link href="/">
                  <img src="/images/footer-logo.svg" alt="logo" />
                </Link>
              </div>
              
              <div className={style.btnBlock}>
                <CtaBtn
                  url={"#"}
                  btnLabel="login"
                  additionalClass={style.ctaBtn}
                />
                <CtaBtn
                  url={"#"}
                  btnLabel="Contact"
                  additionalClass={style.ctaBtn}
                />
              </div>
            </div>

            <div className={style.footer__bottom_menu}>
              <div className={style.footer__bottom_menu_item}>
                <span>© ABI 2024 All rights reserved</span>
                <Link className={style.notes} href={"#"}>Privacy Policy</Link>
                <Link className={style.notes} href={"#"}>Cookie Policy</Link>
                <Link className={style.notes} href={"#"}>Terms & Conditions</Link>
              </div>
              
              <div className={style.footer__bottom_menu_social}>
                <Link href={"#"}>
                  <img src="/images/fb.svg" alt="" />
                </Link>
                <Link href={"#"}>
                  <img src="/images/insta.svg" alt="" />
                </Link>
                <Link href={"#"}>
                  <img src="/images/linkedin.svg" alt="" />
                </Link>
                <Link href={"#"}>
                  <img src="/images/twitter.svg" alt="" />
                </Link>
                <Link href={"#"}>
                  <img src="/images/Youtube.svg" alt="" />
                </Link>
                <Link href={"#"}>
                  <img src="/images/Link.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
