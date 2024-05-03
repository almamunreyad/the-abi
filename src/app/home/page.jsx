import FeaturedArticle from "@/components/FeaturedArticle/FeaturedArticle";
import FullHeightBanner from "@/components/FullHeightBanner/FullHeightBanner";
import FullWidthImg from "@/components/FullWidthImg/FullWidthImg";
import PolicyBlock from "@/components/PolicyBlock/PolicyBlock";
import TextImgBlock from "@/components/TextImgBlock/TextImgBlock";
import Stats from "@/components/Stats/Stats";
import NewsPromo from "@/components/NewsPromo/NewsPromo";

export default function page() {
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
      <TextImgBlock />
      <NewsPromo />
    </>
  );
}
