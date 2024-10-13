import { useParams } from "react-router-dom";

function PortfolioPage() {
  const { portfolioSlug } = useParams();

  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>{portfolioSlug}</p>
    </div>
  );
}

export default PortfolioPage;
