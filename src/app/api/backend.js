const qs = require("qs");

export async function fetchData(lang, endpoint) {
  try {
    const url = `http://68.183.74.28:1337/api/${endpoint}?locale=${lang}`;
    const res = await fetch(url, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}

export async function fetchDataWithPopulate(
  lang,
  endpoint,
  populateArray = "*"
) {
  const query = qs.stringify(
    {
      locale: [lang],
      populate: populateArray,
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  try {
    const url = `http://68.183.74.28:1337/api/${endpoint}?${query}`;

    const res = await fetch(url, {
      cache: "no-store",
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}
export async function fetchSingleData(lang, endpoint, id) {
  try {
    const url = `http://68.183.74.28:1337/api/${endpoint}/${id}?populate=*&locale=${lang}`;
    const res = await fetch(url, {
      cache: "no-store",
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}

export async function fetchDataWithPagination(
  lang,
  endpoint,
  pageIndex,
  pageSize
) {
  try {
    const url = `http://68.183.74.28:1337/api/${endpoint}?populate=*&locale=${lang}&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`;
    console.log(url);
    const res = await fetch(url, {
      cache: "no-store",
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}

// &filters[$and][0][artwork_art_type][name][$eq]=${artworkArtTypeValue}

export async function fetchDataWithPaginationAndFiltering(
  lang,
  endpoint,
  pageIndex,
  pageSize,
  category
) {
  const query = qs.stringify(
    {
      locale: [lang],
      populate: "*",
      pagination: {
        page: pageIndex,
        pageSize: pageSize,
      },
      filters: {
        category_of_product: {
          CategoryTitle: {
            $contains: category,
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  try {
    const url = `http://68.183.74.28:1337/api/${endpoint}?${query}`;
    // console.log(url);
    const res = await fetch(url, {
      cache: "no-store",
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}
