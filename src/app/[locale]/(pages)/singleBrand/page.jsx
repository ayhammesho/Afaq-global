import SingleProduct from "@/components/Single Brand/SingleProduct";
import Pagination from "@/components/News/Pagination";
import { getAllProducts, getProductsByCategories } from "@/app/libs/getData";
import { notFound } from "next/navigation";

async function SingleBrandCategoryPage({ params: { locale }, searchParams }) {
  let products;
  if (searchParams.category) {
    products = await getProductsByCategories(
      locale,
      searchParams.page || 1,
      10,
      searchParams.category
    );
  } else {
    products = await getAllProducts(locale, searchParams.page || 1, 10);
  }

  const getProductImg = (product) => {
    return product.attributes?.ProductImage?.data?.attributes?.url;
  };

  const productsData = products?.data;
  const productsPagination = products?.meta?.pagination;
  if (
    searchParams.page > productsPagination.pageCount ||
    searchParams.page < 1
  ) {
    notFound();
  }

  return (
    <>
      <div className="single-category-page mb-100 mt-100">
        <div className="container">
          <div className="row g-4 mb-40">
            {productsData.map((product) => (
              <SingleProduct
                key={product.id}
                productName={product?.attributes?.ProductName}
                productImg={getProductImg(product)}
                link={product.id}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              {productsPagination && (
                <Pagination paginationData={productsPagination} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleBrandCategoryPage;
