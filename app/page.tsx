import BottomBar from "./components/BottomBar";
import FeatureBottom from "./components/FeatureBottom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroBlocks from "./components/HeroBlocks";
import Listings from "./components/Listings";
import NewsletterHome from "./components/NewsletterHome";
import TopNav from "./components/TopNav";

export default function Home() {
  const latestProducts = [
    {
      id: 1,
      image: "/ListingsImages/Photo 1.png",
      name: "The Dandy Chair",
      price: "$250",
    },
    {
      id: 2,
      image: "/ListingsImages/Photo 2.png",
      name: "Rustic Vase Set",
      price: "$150",
    },
    {
      id: 3,
      image: "/ListingsImages/Photo 3.png",
      name: "The Lucy Lamp",
      price: "$390",
    },
    {
      id: 4,
      image: "/ListingsImages/Photo 4.png",
      name: "The Silky Vase",
      price: "$125",
    },
  ];
  const navItems = [
    "Plant pots",
    "Ceramic",
    "Tables",
    "Chairs",
    "Crockery",
    "Tableware",
    "Cutlery",
  ];
  return (
    <>
      <TopNav />
      <BottomBar navItems={navItems} />
      <HeroBlocks />
      <FeatureBottom />
      <Listings latestProducts={latestProducts} />
      <Features />
      <NewsletterHome />
      <Footer />
    </>
  );
}
