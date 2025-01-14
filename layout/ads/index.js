import { useDispatch } from "react-redux";
import AdsBanner from "./banner";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import FeatureCard from "./featureCard";
import RelativeService from "./relative-service";
import ItemList from "./itemList";
import LookingFor from "./lookingFor";
import ContentSection from "./contentSection";
import WhyChooseAds from "./whyChoose";
import FaqsAds from "./faqsAds";
import SubscribeAds from "./subscribe";
import FooterAds from "./footer";
import { useRouter } from "next/router";
import {
  GET_DATA_BY_ID_FAQ,
  GET_DATA_BY_ID_FOR_LANDING_PAGE,
} from "redux/actions/auth";

const LayoutAds = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [faq, setFaq] = useState(null);

  const getItemsData = async (id) => {
    if (id) {
      let res = await dispatch(GET_DATA_BY_ID_FOR_LANDING_PAGE(id));
      if (res?.data?.length > 0) {
        fatchFaq(res?.data[0]?._id);
        setData(res?.data[0]);
      }
    }
  };
  const fatchFaq = async (id) => {
    if (id) {
      let res = await dispatch(GET_DATA_BY_ID_FAQ(id));
      if (res?.success) {
        setFaq(res?.data.faqTestIdData);
      }
    }
  };
  useEffect(() => {
    getItemsData(router?.query?.id);
  }, [router?.query?.id]);
  console.log("faq", faq);
  return (
    <>
      <Navbar data={data} />
      <section className="px-3 py-2.5 mt-2 relative z-10">
        <AdsBanner data={data} />
      </section>
      <FeatureCard />
      <RelativeService data={data} />
      <ItemList data={data} testInfo={data?.testInfo || []} />
      <LookingFor data={data} />
      <ContentSection data={data} />
      <WhyChooseAds />
      <FaqsAds faq={faq || []} />
      <SubscribeAds data={data} />
      <FooterAds data={data} />
    </>
  );
};
export default LayoutAds;
