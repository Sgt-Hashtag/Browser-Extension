// async function fetchData() {
//     const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     const record=await res.json();
//     document.getElementById("tClients").innerHTML=record.data[0].date;
//     document.getElementById("tType").innerHTML=record.data[0].areaName;
// }
// fetchData();


async function loadTableData() {
  const res= await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
  const record= await res.json();
  items = record.data;
  const table = document.getElementById("testBody");
  items.forEach( item => {
    let row = table.insertRow();
    let date = row.insertCell(0);
    date.innerHTML = item.date;
    let name = row.insertCell(1);
    name.innerHTML = item.areaName;
  });
}
loadTableData()