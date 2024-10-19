import { useEffect, useState } from "react";
import {
  getHomeData,
  HomePageData,
} from "../network/repository/home-repository.ts";

function HomePage() {
  const [pageData, setPageData] = useState<HomePageData | null>(null);

  // Fetch the home page data when the component mounts
  useEffect(() => {
    getHomeData().then((responseJson) => {
      setPageData(responseJson);
    });
  }, []);

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
