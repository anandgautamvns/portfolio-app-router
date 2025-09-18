import Image from "next/image";
import Link from "next/link";
// import { getPortfolios } from "@/utils/fetch";
import { getPortfolios } from "@/utils";

export async function PortfolioList() {
  // const {data: portfolios} = await getPortfolios();
  const portfolios = getPortfolios();
  return (
    <>
      <div className="content-section-title">Portfolios</div>

      <div className="content-list">
        {portfolios.map((portfolio, index) =>
          <div className="content-item" key={`${portfolio.slug}-${index}`}>
            <div className="content-item__image-container">
              <Image
                src={portfolio.coverImage}
                fill={true}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px)"
                alt={portfolio.title}
              />
            </div>
            <div className="content-item__header">
              <div>{portfolio.title}</div>
              <div>{portfolio.description}</div>
              <Link href={`/portfolios/${portfolio.slug}`}>See More</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}