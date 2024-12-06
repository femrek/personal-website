import { useEffect, useState } from "react";
import {
  getHomeData,
  HomePageData,
} from "../network/repository/home-repository.ts";
import { useLocalizationContext } from "../context/localization/localization-context.ts";
import PortfolioIntroducerCard from "../component/home/PortfolioIntroducerCard.tsx";
import ContactIntroducerCard from "../component/home/ContactIntroducerCard.tsx";
import LinksSection from "../component/home/LinksSection.tsx";

function HomePage() {
  const [pageData, setPageData] = useState<HomePageData | null>(null);
  const { langData } = useLocalizationContext();

  useEffect(() => {
    // If the language is changed or initialized, fetch the home page data
    if (langData?.currentLang?.code) {
      getHomeData(langData.currentLang.code).then((responseJson) => {
        setPageData(responseJson);
      });
    }
  }, [langData?.currentLang?.code]);

  return (
    <>
      <div className={"h-4"} />

      {/* Content */}
      {pageData?.content.map((p, index) => (
        <div key={index}>
          <div className={"text-xl text-center"}>{p}</div>

          {/* Insert a blank line only if there is another paragraph following */}
          {index == pageData?.content.length - 1 || <br />}
        </div>
      ))}

      {/* Links */}
      {pageData && <LinksSection data={pageData.links} />}

      {/* Portfolio Card */}
      {pageData && (
        <PortfolioIntroducerCard data={pageData.portfolioIntroducer} />
      )}

      {/* Contact Card */}
      {pageData && <ContactIntroducerCard data={pageData.contactIntroducer} />}
    </>
  );
}

export default HomePage;
