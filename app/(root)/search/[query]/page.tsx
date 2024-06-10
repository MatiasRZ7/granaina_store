"use client"
import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "@/lib/actions/actions";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const SearchPage = ({ params }: { params: { query: string } }) => {
  const [searchedProducts, setSearchedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const decodedQuery = decodeURIComponent(params.query);

  useEffect(() => {
    setIsLoading(true);
    getSearchedProducts(params.query)
      .then((products) => {
        setSearchedProducts(products);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.query]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">
        Search results for {decodedQuery}
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-body-bold my-5">No products found</p>
        ))}
      <div className="flex flex-wrap justify-center gap-16">
        {searchedProducts?.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default SearchPage;