import CtaBtn from "../CtaBtn/CtaBtn";
import style from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <section className="headerWrapper">
        <header className={style.header}>
          <div className={style.header_top}>
            <div className={`holder ${style.holder}`}>
              <span>
                <Link href="#">Accessibility Tools</Link>
              </span>
              <span>
                <Link href="#">Contact</Link>
              </span>
              <div className={style.btnBlock}>
                <Link href="#" className={style.ctaBtn}>
                  Join Now
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- /.header_top --> */}

          <div className="holder">
            <div className={style.header__wrap}>

              <div className={style.header__wrap_logo}>
                <h1 title="The ABI">
                  <Link href="#">
                    <img src="/images/Logo.svg" alt="The ABI" />
                  </Link>
                </h1>
              </div>

              <ul className={style.header__wrap_mainMenu}>
                <li>
                  <Link href="#">Media Hub</Link>
                </li>
                <li>
                  <Link href="#">Policy & Guidance</Link>
                </li>
                <li>
                  <Link href="#">Events & Talent</Link>
                </li>
                <li>
                  <Link href="#">Industry Data</Link>
                </li>
                <li>
                  <Link href="#">Membership</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
              </ul>

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

              <div className={style.btnBlock}>
                <CtaBtn url={"#"} btnLabel="login" additionalClass={style.ctaBtn} />
              </div>
            </div>
            {/* <!-- /.header__wrap --> */}
          </div>
        </header>
        {/* <!-- /.header --> */}
      </section>
    </div>
  );
};

export default Header;
