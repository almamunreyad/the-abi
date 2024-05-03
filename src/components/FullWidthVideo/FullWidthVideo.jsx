import style from "./FullWidthVideo.module.scss";

export default function FullWidthVideo() {
  return (
    <>
      <section className={style.fullWidthVideo}>
        <div className="holder">
            <div className="contentWrap">
                <img src="/images/Image4.jpg" alt="" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
      </section>
    </>
  );
}
