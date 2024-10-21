import { useEffect, useState } from "react";
import {
  getHomeData,
  HomePageData,
} from "../network/repository/home-repository.ts";
import { useLocalizationContext } from "../context/localization/localization-context.ts";

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
    <div>
      <br />
      <div className={"text-2xl"}>{pageData?.title ?? ""}</div>
      <br />

      {pageData?.content.map((content, index) => (
        <div key={index}>
          <p>{content}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
