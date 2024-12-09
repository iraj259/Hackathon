import Banner from "../components/Banner";
import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";
import PageHeader from "../components/PageHeader";
import Features from "../components/Features";
import Featured from "../components/Featured";
import FeatureBottom from "../components/FeatureBottom";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Page = () => {
  const navItems = [
    "All products",
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
      <Banner />
      <TopNav />
      <BottomBar navItems={navItems} />
      <PageHeader />
      <Features />
      <Featured />
      <FeatureBottom />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Page;
