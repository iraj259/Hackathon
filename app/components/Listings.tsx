import React from "react";
import Link from "next/link"; // Import Link for navigation

// Define the type for a single product
type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
};

// Define the props type for the Listings component
type ListingsProps = {
  latestProducts: Product[];
};

const Listings: React.FC<ListingsProps> = ({ latestProducts }) => {
  return (
    <div className="mt-10 p-8 sm:p-16">
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-6">
        {latestProducts.map((item) => (
          <div key={item.id} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
              <Link href="/ProductDetail">
                <img
                  className="object-cover w-full h-auto"
                  src={item.image}
                  alt={item.name} // Added alt text for images
                />
              </Link>
              <p className="mt-4 mb-1 text-sm">{item.name}</p>
              <p className="text-sm font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 w-full flex justify-center items-center">
        <Link href="/ProductListing">
          <button className="w-full sm:w-fit bg-[#F9F9F9] px-8 py-3">
            View collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Listings;
