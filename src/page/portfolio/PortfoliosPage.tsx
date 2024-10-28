import PortfolioEntry from "../../component/portfolio/PortfolioEntry.tsx";
import { useLocalizationContext } from "../../context/localization/localization-context.ts";
import { useEffect, useState } from "react";
import {
  getPortfoliosPageData,
  PortfoliosPageData,
} from "../../network/repository/portfolio-repository.ts";

function PortfoliosPage() {
  const [pageData, setPageData] = useState<PortfoliosPageData | null>(null);
  const { langData } = useLocalizationContext();

  useEffect(() => {
    if (langData?.currentLang?.code) {
      getPortfoliosPageData(langData.currentLang.code).then((responseJson) => {
        setPageData(responseJson);
      });
    }
  }, [langData?.currentLang?.code]);

  if (!pageData) {
    return null;
  }

  return (
    <>
      <div className={"app-title"}>{pageData.title}</div>
      {pageData.portfolios.map((portfolio, index) => (
        <PortfolioEntry key={index} data={portfolio} />
      ))}
    </>
  );
}

export default PortfoliosPage;
