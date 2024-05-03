import Link from "next/link";
import style from "./TextVideoBlock.module.scss";

export default function TextVideo() {
  return (
    <>
      <section className={style.textVideoWrapper}>
        <div className="holder">
          <div className={style.textVideo__wrap}>
            <div className={style.textVideo__wrap_text}>
              <h2 className={`${style.sectionTitle}`}>Policies</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Habitasse suspendisse egestas volutpat, eu, nisi, sapien.
                Fermentum sagittis aliquam mauris leo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Habitasse suspendisse egestas volutpat, eu, nisi, sapien.
                Fermentum sagittis aliquam mauris leo consequat.
              </p>
            </div>
            <div className={style.textVideo__wrap_img}>
              <img
                src="/images/Image3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
