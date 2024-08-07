import { getProductsDetails, getRelatedProducts } from "@/lib/actions/actions";
import Gallery from "@/components/Gallery";
import ProductInfo from "@/components/ProductInfo";
import ProductCard from "@/components/ProductCard";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const ProductDetails = await getProductsDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);
  return (
    <>
      <div
        className="flex justify-center items-start gap-16 py-10 px-5
     max-md:flex-col max-md:items-center"
      >
        <Gallery productMedia={ProductDetails.media} />
        <ProductInfo productInfo={ProductDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Related tours</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8 items-center justify-center">
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic"

export default ProductDetails;
