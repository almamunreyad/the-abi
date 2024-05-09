import FeaturedArticle from "@/components/FeaturedArticle/FeaturedArticle";
import FullHeightBanner from "@/components/FullHeightBanner/FullHeightBanner";
import FullWidthImg from "@/components/FullWidthImg/FullWidthImg";
import PolicyBlock from "@/components/PolicyBlock/PolicyBlock";
import TextImgBlock from "@/components/TextImgBlock/TextImgBlock";
import Stats from "@/components/Stats/Stats";
import NewsPromo from "@/components/NewsPromo/NewsPromo";

const page = () => {
  const data = {
    sectionTitle: <><span>About Us</span> lorem ipsum sit amet egestas</>,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse suspendisse egestas volutpat, eu, nisi, sapien.",
    btnLabel: 'Join The ABI',
    image: "/images/aaron-huber-KxeFuXta4SE-unsplash 1.jpg",

  };




  return (
    <>
      <FullHeightBanner
        sectionTitle={
          <>
            The <span>definitive voice</span> on insurance and long-term savings
            in the UK
          </>
        }
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse suspendisse egestas volutpat, eu, nisi, sapien."
        btnText="About us"
        scrollText="Scroll"
      />

      <FeaturedArticle />
      <FullWidthImg />
      <Stats />
      <PolicyBlock />
      <TextImgBlock data={data} />
      <NewsPromo  />


    </>
  );
};

export default page;
