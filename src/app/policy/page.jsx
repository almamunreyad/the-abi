import SliderBanner from "@/components/SliderBanner/SliderBanner";
import TextVideo from "@/components/TextVideoBlock/TextVideoBlock";
import FeatuedItem from "@/components/FeaturedItem/FeaturedItem";
import DividerLine from "@/components/DividerLine/DividerLine";
import PolicyBlock from "@/components/PolicyBlock/PolicyBlock";
import TextImgBlock from "@/components/TextImgBlock/TextImgBlock";
import FullWidthVideo from "@/components/FullWidthVideo/FullWidthVideo";
import NewsPromo from "@/components/NewsPromo/NewsPromo";

const page = () => {
  const additionalClass = "regulation";
  const data = {
    sectionTitle: "Regulation",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse suspendisse egestas volutpat, eu, nisi, sapien. Fermentum sagittis aliquam mauris leo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse egestas volutpat.",
    list: [
      "Lorem ipsum dolor sit amet consecteteur.",
      "Lorem ipsum dolor ",
      "Lorem ipsum dolor  amet consecteteur.",
      "Lorem ipsum dolor sit amet.",
    ],
    para2:
      "Fermentum sagittis aliquam mauris leo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse suspendisse.",
      btnLabel: 'Read more',
    image: "/images/matthew-foulds-2.jpg",
  };

  return (
    <>
      <SliderBanner />
      <TextVideo />
      <FeatuedItem />
      <DividerLine />
      <PolicyBlock />
      <TextImgBlock additionalClass={additionalClass} data={data} />
      <FullWidthVideo />
      <DividerLine />
      <NewsPromo />
    </>
  );
};

export default page;
