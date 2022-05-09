import jsonToTable from "json-to-table";

function App() {
  let dataj = fetch('./Team.json');
  let tabledj = jsonToTable(dataj);
  console.log(tabledj);
  return (tabledj);
}

export default App;
