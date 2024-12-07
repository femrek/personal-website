import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPortfolioPageData } from "../../network/repository/portfolio-repository.ts";
import { useLocalizationContext } from "../../context/localization/localization-context.ts";
import PortfolioImageViewer from "../../component/portfolio/PortfolioImageViewer.tsx";
import { PortfolioPageData } from "../../data/api-data-types";
import AppTitleAndParagraphComponent from "../../component/common/AppTitleAndParagraphComponent.tsx";
import AppLinkBoxesSection from "../../component/common/AppLinkBoxesSection.tsx";

function PortfolioPage() {
  const { portfolioSlug } = useParams();
  const { langData } = useLocalizationContext();
  const [pageData, setPageData] = useState<PortfolioPageData | null>(null);

  useEffect(() => {
    const langCode = langData?.currentLang?.code;
    if (langCode && portfolioSlug) {
      // Fetch the portfolio data
      getPortfolioPageData(langCode, portfolioSlug).then((responseJson) => {
        setPageData(responseJson);
      });
    }
  }, [langData?.currentLang?.code, portfolioSlug]);

  if (!pageData) {
    return null;
  }

  return (
    <>
      <div className={"app-title"}>{pageData.title}</div>

      {pageData.links && <AppLinkBoxesSection data={pageData.links} />}

      {pageData.description.map((desc, index) => (
        <div key={index}>
          {typeof desc === "string" ? (
            <p className={"pb-2"}>{desc}</p>
          ) : (
            <AppTitleAndParagraphComponent data={desc} />
          )}
        </div>
      ))}

      <PortfolioImageViewer imageUrls={pageData.images} />
    </>
  );
}

export default PortfolioPage;
