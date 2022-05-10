import jsonToTable from "json-to-table";

function AppSeason() {
    let seasonjs = fetch('./Season.json');
    let tablesej = jsonToTable(seasonjs);
    return(tablesej);
}

export default AppSeason;