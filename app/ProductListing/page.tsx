import BottomBar from "../components/BottomBar";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import Listings from "../components/Listings";

export default function Home() {
  const latestProducts = [
    {
      id: 1,
      image: "/ListingsImages/Photo 1.png", // Example image URL
      name: "The Dandy chair",
      price: "$250",
    },
    {
      id: 2,
      image: "/ListingsImages/Photo 2.png", // Example image URL
      name: "Rustic Vase Set",
      price: "$150",
    },
    {
      id: 3,
      image: "/ListingsImages/Photo 3.png", // Example image URL
      name: "The Lucy Lamp",
      price: "$390",
    },
    {
      id: 4,
      image: "/ListingsImages/Photo 4.png", // Example image URL
      name: "The Silky Vase",
      price: "$125",
    },
    {
      id: 5,
      image: "/ListingsImages/Photo 1.png", // Example image URL
      name: "The Dandy chair",
      price: "$250",
    },
    {
      id: 6,
      image: "/ListingsImages/Photo 2.png", // Example image URL
      name: "Rustic Vase Set",
      price: "$150",
    },
    {
      id: 7,
      image: "/ListingsImages/Photo 3.png", // Example image URL
      name: "The Lucy Lamp",
      price: "$390",
    },
    {
      id: 8,
      image: "/ListingsImages/Photo 4.png", // Example image URL
      name: "The Silky Vase",
      price: "$125",
    },
    {
      id: 9,
      image: "/ListingsImages/Photo 1.png", // Example image URL
      name: "The Dandy chair",
      price: "$250",
    },
    {
      id: 10,
      image: "/ListingsImages/Photo 2.png", // Example image URL
      name: "Rustic Vase Set",
      price: "$150",
    },
    {
      id: 11,
      image: "/ListingsImages/Photo 3.png", // Example image URL
      name: "The Lucy Lamp",
      price: "$390",
    },
    {
      id: 12,
      image: "/ListingsImages/Photo 4.png", // Example image URL
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
      <HomeNav />
      <BottomBar navItems={navItems} />
      <div className=" relative  w-full h-[209px]">
        <img src="/frame.jpg" className="object-cover w-full h-full" />
        <h1 className="text-white font-light text-4xl absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]  sm:left-10 sm:bottom-8 sm:-translate-y-[0%] sm:-translate-x-[0%] ">
          All products
        </h1>
      </div>
      <Listings latestProducts={latestProducts} />
      <Footer />
    </>
  );
}
