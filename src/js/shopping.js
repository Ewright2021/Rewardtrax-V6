// Get Category Listing
$.getJSON(
  "https://api.bestbuy.com/v1/categories(id=abcat*)?apiKey=wV0fRPELYjjeNtQRT7LmdGE4&pageSize=9&show=id,name&format=json",
  function (result) {
    let topCategories = result.categories;
    $(".shopping-featured-categories-title").each(function (
      i,
      featuredCategoryTitle
    ) {
      //   console.log(i, topCategories[i]);
      $(this).append(topCategories[i].name);
    });
  }
);

// Populate Search Results Page
$.getJSON(
  "https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat232900050000))?apiKey=wV0fRPELYjjeNtQRT7LmdGE4&sort=color.asc&show=categoryPath.id,categoryPath.name,color,customerReviewAverage,description,details.name,dollarSavings,features.feature,image,inStoreAvailability,longDescription,mobileUrl,modelNumber,name,onlineAvailability,onSale,percentSavings,regularPrice,salePrice,shipping,shippingCost,shortDescription,sku,thumbnailImage,url&pageSize=30&format=json",
  function (result) {
    let products = result.products;
    // console.log(products);

    $(".search-results-item-title").each(function (i, featuredCategoryTitle) {
      $(this).text(products[i].name);
      // console.log(products[i].image);
    });

    $(".search-item-thumbnail-img").each(function (i, prod) {
      $(this).attr("src", products[i].image);
    });

    $();
  }
);
