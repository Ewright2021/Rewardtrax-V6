// My Account -

/* --Promotions Grid-- */
$(function () {
  $("#promotionsGrid").dxDataGrid({
    dataSource: promos,
    columns: [
      "PromotionName",
      "Approved",
      "Pending",
      "NeedVerification",
      "DeniedClaims",
      "Awarded",
      "Detail",
    ],
    searchPanel: {
      visible: true,
      width: 240,
      placeholder: "Search Promotions...",
    },
    filterRow: { visible: true },
    headerFilter: { visible: true },
    showBorders: true,
  });
});

var promos = [
  {
    ID: 1,
    PromotionName: "Promotion 2 - Goal Tiering",
    Approved: 0,
    Pending: 3,
    NeedVerification: 0,
    DeniedClaims: 0,
    Awarded: 0,
    Detail: "Details",
  },
  {
    ID: 2,
    PromotionName: "Promotion 3 - Verification",
    Approved: 0,
    Pending: 0,
    NeedVerification: 16,
    DeniedClaims: 0,
    Awarded: 0,
    Detail: "Details",
  },
  {
    ID: 3,
    PromotionName: "Promotion Example - Claims with Verification",
    Approved: 0,
    Pending: 0,
    NeedVerification: 0,
    DeniedClaims: 0,
    Awarded: 0,
    Detail: "Details",
  },
];

/* --Transactions Grid-- */
$(function () {
  $("#transactionsGrid").dxDataGrid({
    dataSource: transactions,
    columns: ["Type", "Description", "Date", "Amount"],
    searchPanel: {
      visible: true,
      width: 240,
      placeholder: "Search Transactions...",
    },
    filterRow: { visible: true },
    headerFilter: { visible: true },
    showBorders: true,
  });
});

var transactions = [
  {
    ID: 1,
    Type: "Points Awarded",
    Description: "Win Wheel Bonus",
    Date: "11/6/2020",
    Amount: "100,000",
  },
  {
    ID: 2,
    Type: "Purchase",
    Description: "Order Number",
    Date: "0/28/2020",
    Amount: 278,
  },
];
