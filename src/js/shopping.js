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
  "https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat209000050006))?apiKey=wV0fRPELYjjeNtQRT7LmdGE4&sort=color.asc&show=categoryPath.id,categoryPath.name,color,customerReviewAverage,description,details.name,dollarSavings,features.feature,image,inStoreAvailability,longDescription,mobileUrl,modelNumber,name,onlineAvailability,onSale,percentSavings,regularPrice,salePrice,shipping,shippingCost,shortDescription,sku,thumbnailImage,url&pageSize=30&format=json",
  function (result) {
    let products = result.products;
    // console.log(products);
    // Set Pagination

    $(".search-results-item-title").each(function (i, title) {
      $(this).text(products[i].name);
    });

    $(".search-item-thumbnail-img").each(function (i, image) {
      $(this).attr("src", products[i].image);
    });

    $(".search-results-item-price").each(function (i, price) {
      let points = products[i].regularPrice;
      $(this).prepend(points);
    });
    $(".in-store-pickup").each(function (i, pickup) {
      let pick_up = products[i].inStoreAvailability;
      if (!pick_up) {
        $(this).addClass("d-none");
      }
    });
    $(".on-sale").each(function (i, pickup) {
      let onsale = products[i].onSale;
      if (!onsale) {
        $(this).addClass("d-none");
      }
    });

    // Click to Item Details
    $(".search-results-item-title").each(function (i, pickup) {
      // let onsale = products[i].onSale;
      $(this).click(function () {
        alert.log("clicked");

        // $(this).attr("src", products[i].image);

        // window.location.href = "item-details.html";

        // $(".img-main").attr("src", products[i].image);
      });
    });

    // Click Search-Results-Item to Favorite
    $(".bi-heart").each(function (i, pickup) {
      // let onsale = products[i].onSale;
      $(this).click(function () {
        $(this).toggleClass("bi-heart");
        $(this).toggleClass("bi-heart-fill text-danger");
      });
    });
  }
);
