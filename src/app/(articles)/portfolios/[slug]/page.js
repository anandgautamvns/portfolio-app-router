
import { getPortfolioBySlug, getPortfolios } from "@/utils";

export function generateStaticParams() {
  const portfolios = getPortfolios();

  return portfolios.map(portfolio => ({
    slug: portfolio.slug
  }));
}

export default async function PortfolioDetail({ params }) {
  const portfolio = await getPortfolioBySlug(params?.slug);

  return (
    <>
      {/* Portfolio Detail of: {params.slug} */}
      <div>Portfolio Data: {portfolio.title}, {portfolio.description}</div>

      <hr />

      {/* <div>{portfolio.content}</div> */}
      <div dangerouslySetInnerHTML={{__html: portfolio.content}}></div>
    </>
  )
}