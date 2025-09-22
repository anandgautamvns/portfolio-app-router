
import { BlogList } from "@/components/blogs/BlogList";
import { Hero } from "@/components/Hero";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";
import { getContentCount } from "@/utils";
// import { delay } from "@/utils";
// import { Suspense } from "react";

export const revalidate = 2;

// async function getBlogs() {
//   console.log("Fetching Blogs");
//   const random = Math.random();
//   await delay(1000);
//   const res = await fetch("http://localhost:3001/api/blogs", { cache: "no-cache" });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data!");
//   }
//   return res.json();
// }

// async function getPortfolios() {
//   console.log("Fetching Portfolios");
//   await delay(1000);
//   const res = await fetch("http://localhost:3001/api/portfolios", { cache: "no-cache" });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data!");
//   }

//   return res.json();
// }

export default async function Home() {
  const count = getContentCount();
  // --- sequentional fetching ---
  // const {data: blogs} = await getBlogs();
  // const {data: portfolios} = await getPortfolios();

  // --- parallel fetching ---
  // const blogsPromise = getBlogs();
  // const portfolioPromise = getPortfolios();

  // const [blogs, portfolios] = await Promise.all([blogsPromise, portfolioPromise]);
  return (
    <main className="page-container">
      <Hero count={count} />
      <SectionTitle title={"Blogs"} href={"/blogs"} />
      <BlogList />
      <SectionTitle title={"Portfolios"} href={"/portfolios"} />
      <PortfolioList />
    </main>
  );
}
