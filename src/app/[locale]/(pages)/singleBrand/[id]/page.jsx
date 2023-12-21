import Product from "@/components/Part Details/Product";
import ProductDetails from "@/components/Part Details/ProductDetails";
import RelatedProducts from "@/components/Part Details/RelatedProducts";
import { getProductDetails } from "@/app/libs/getData";

async function ProductDetailsPage({ params: { locale, id } }) {
  const productDetails = await getProductDetails(locale, id);
  const productName = productDetails.attributes?.ProductName;
  const productDescreption = productDetails.attributes?.ProductDetails;
  const productImg = productDetails.attributes?.ProductImage;
  const otherProductImages = productDetails.attributes?.OtherImages?.data;

  return (
    <div className="product-details-page pt-100 mb-100">
      <div className="container">
        <Product
          id={productDetails?.id}
          productName={productName}
          productImg={productImg}
          otherProductImages={otherProductImages}
          productDescreption={productDescreption}
        />

        {/* <RelatedProducts /> */}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
