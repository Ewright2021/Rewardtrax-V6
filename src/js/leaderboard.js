var leaders = [
  {
    id: 1,
    FirstName: "Stacey",
    LastName: "Boatman",
    Region: "North",
    PointsAwarded: 108063,
  },
  {
    id: 2,
    FirstName: "Charisse",
    LastName: "Richford",
    Region: "South",
    PointsAwarded: 211078,
  },
  {
    id: 3,
    FirstName: "Clerissa",
    LastName: "MacIver",
    Region: "East",
    PointsAwarded: 87665,
  },
  {
    id: 4,
    FirstName: "Lyell",
    LastName: "Pedrielli",
    Region: "South",
    PointsAwarded: 296470,
  },
  {
    id: 5,
    FirstName: "Rosaline",
    LastName: "Walkley",
    Region: "West",
    PointsAwarded: 68884,
  },
  {
    id: 6,
    FirstName: "Celinda",
    LastName: "Despenser",
    Region: "North",
    PointsAwarded: 10586,
  },
  {
    id: 7,
    FirstName: "Jermaine",
    LastName: "Endrighi",
    Region: "North",
    PointsAwarded: 208829,
  },
  {
    id: 8,
    FirstName: "Modestine",
    LastName: "Donisthorpe",
    Region: "North",
    PointsAwarded: 360415,
  },
  {
    id: 9,
    FirstName: "Jabez",
    LastName: "Mellody",
    Region: "West",
    PointsAwarded: 428137,
  },
  {
    id: 10,
    FirstName: "Dolf",
    LastName: "Snowling",
    Region: "South",
    PointsAwarded: 91730,
  },
  {
    id: 11,
    FirstName: "Marne",
    LastName: "Ghidetti",
    Region: "South",
    PointsAwarded: 525302,
  },
  {
    id: 12,
    FirstName: "Belvia",
    LastName: "Meckiff",
    Region: "North",
    PointsAwarded: 152151,
  },
  {
    id: 13,
    FirstName: "Kelvin",
    LastName: "Opy",
    Region: "North",
    PointsAwarded: 309286,
  },
  {
    id: 14,
    FirstName: "Dennie",
    LastName: "Burkwood",
    Region: "South",
    PointsAwarded: 475137,
  },
  {
    id: 15,
    FirstName: "Cassie",
    LastName: "Kubecka",
    Region: "East",
    PointsAwarded: 20665,
  },
  {
    id: 16,
    FirstName: "Ravid",
    LastName: "McKintosh",
    Region: "East",
    PointsAwarded: 505890,
  },
  {
    id: 17,
    FirstName: "Nikaniki",
    LastName: "Dabnot",
    Region: "West",
    PointsAwarded: 120351,
  },
  {
    id: 18,
    FirstName: "Felicdad",
    LastName: "Rubi",
    Region: "North",
    PointsAwarded: 389987,
  },
  {
    id: 19,
    FirstName: "Matty",
    LastName: "Eseler",
    Region: "East",
    PointsAwarded: 310534,
  },
  {
    id: 20,
    FirstName: "Carlie",
    LastName: "Kobel",
    Region: "South",
    PointsAwarded: 291188,
  },
];

var leaderboardTable = document.getElementById("leaderboard-table");
var leaderboardTableBody = document.getElementsByTagName("tbody");
var output = "";

for (i = 0; i < leaders.length; i++) {
  //   console.log(leaders[i].FirstName);
  var row = document.createElement("tr");
  for (var j = 0; j < leaders.length; j++) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(`<tr>
    <th scope="Place">${leaders[i].id}</th>
    <td>${leaders[i].FirstName}</td>
    <td>${leaders[i].LastName}</td>
    <td>${leaders[i].Region}</td>
  </tr>`);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  leaderboardTableBody.appendChild(row);
}
