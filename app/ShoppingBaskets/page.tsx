import AddToCart from "../components/AddToCart";
import BottomBar from "../components/BottomBar";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";

export default function Home() {
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
      <HomeNav />
      <BottomBar navItems={navItems} />
      <AddToCart />
      <Footer />
    </>
  );
}
