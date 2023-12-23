import { getBlogPageData, getAllProducts } from "@/app/libs/getlData";

export default async function sitemap() {
  const baseUrlAr = "https://afaqglobal.com/ar";

  // Get All news from CMS
  const news = await getBlogPageData("ar", 1, 100);
  const newsUrls =
    news?.data?.map((news) => {
      return {
        url: `${baseUrlAr}/news/${news.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // get all products pages
  const products = await getAllProducts("ar", 1, 100);
  const productsUrl =
    products?.map((product) => {
      return {
        url: `${baseUrlAr}/singleBrand/${product.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  //
  /////////////////////////////////////////////////////////////////

  const baseUrlEn = "https://afaqglobal.com/en";

  // Get All news from CMS
  const newsEn = await getBlogPageData("ar", 1, 100);
  const newsUrlsEn =
    newsEn?.data?.map((news) => {
      return {
        url: `${baseUrlEn}/news/${news.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // get all products pages
  const productsEn = await getAllProducts("ar", 1, 100);
  const productsUrlEn =
    productsEn?.map((product) => {
      return {
        url: `${baseUrlEn}/singleBrand/${product.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  /////////////////////////////////////////////////////////////////////////
  const baseUrlTr = "https://afaqglobal.com/tr";

  // Get All news from CMS
  const newsTr = await getBlogPageData("ar", 1, 100);
  const newsUrlsTr =
    newsTr?.data?.map((news) => {
      return {
        url: `${baseUrlTr}/news/${news.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // get all products pages
  const productsTr = await getAllProducts("ar", 1, 100);
  const productsUrlTr =
    productsTr?.map((product) => {
      return {
        url: `${baseUrlTr}/singleBrand/${product.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrlAr,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlAr}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlAr}/singleBrand`,
      lastModified: new Date(),
    },
    ...productsUrl,

    {
      url: `${baseUrlAr}/news`,
      lastModified: new Date(),
    },
    ...newsUrls,
    {
      url: `${baseUrlAr}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlAr}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: baseUrlEn,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlEn}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlEn}/singleBrand`,
      lastModified: new Date(),
    },
    ...productsUrlEn,
    {
      url: `${baseUrlEn}/news`,
      lastModified: new Date(),
    },
    ...newsUrlsEn,

    {
      url: `${baseUrlEn}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlEn}/privacy-policy`,
      lastModified: new Date(),
    },

    {
      url: baseUrlTr,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlTr}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlTr}/singleBrand`,
      lastModified: new Date(),
    },
    ...productsUrlTr,
    {
      url: `${baseUrlTr}/news`,
      lastModified: new Date(),
    },
    ...newsUrlsTr,

    {
      url: `${baseUrlTr}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlTr}/privacy-policy`,
      lastModified: new Date(),
    },
  ];
}
