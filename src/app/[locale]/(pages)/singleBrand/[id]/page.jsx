import Product from "@/components/Part Details/Product";
import ProductDetails from "@/components/Part Details/ProductDetails";
import RelatedProducts from "@/components/Part Details/RelatedProducts";
import { getProductDetails, getAllProducts } from "@/app/libs/getData";

export async function generateMetadata({ params: { locale, id } }) {
  const product = await getProductDetails(locale, id);
  const seo = product?.attributes?.seo;

  return {
    title: `${seo?.metaTitle}| AFAQ Global`,
    description: seo?.metaDescription || "",
    keywords: seo?.keywords || "",
    openGraph: {
      images: seo?.metaImage?.data?.attributes?.url,
    },
  };
}

async function ProductDetailsPage({ params: { locale, id } }) {
  const productDetailsPromise = getProductDetails(locale, id);
  const productsPromise = getAllProducts(locale, 1, 8);
  const [productDetails, products] = await Promise.all([
    productDetailsPromise,
    productsPromise,
  ]);

  const productName = productDetails.attributes?.ProductName;
  const productDescreption = productDetails.attributes?.ProductDetails;
  const productImg = productDetails.attributes?.ProductImage;
  const otherProductImages = productDetails.attributes?.OtherImages?.data;

  const productsData = products.data;

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

        <RelatedProducts relatedProducts={productsData} lang={locale} />
      </div>
    </div>
  );
}

export default ProductDetailsPage;
