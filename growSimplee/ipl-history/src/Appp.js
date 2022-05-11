// import React, {useState,useEffect} from "react";
import SeasonJsonData from './Season.json'
// import TeamJsonData from './Team.json'
import PlayerJsonData from './Player.json'

export default function Appp() {
    
    // if(seasonArray)
    var playerArray = [];
    var seasonArray = [];

    for(var i in PlayerJsonData)
        playerArray.push([i,PlayerJsonData[i]]);
    // JSON.stringify(playerArray);
    // console.log(playerArray);

    for(var k in SeasonJsonData)
        seasonArray.push([k,SeasonJsonData[k]]);
    // JSON.stringify(seasonArray);
    // console.log(seasonArray);
    
    for(var j = 0; j<seasonArray.length; j++) {
        var a = seasonArray[j][1].Man_of_the_Series_Id;
        var b = seasonArray[j][1].Orange_Cap_Id;
        var c = seasonArray[j][1].Purple_Cap_Id;
        console.log(a,b,c);
        if(a<523)
            seasonArray[j][1].Man_of_the_Series_Id = playerArray[a][1].Player_Name;
        if(b<523)
            seasonArray[j][1].Orange_Cap_Id = playerArray[b][1].Player_Name;
        if(c<523)
            seasonArray[j][1].Purple_Cap_Id = playerArray[c][1].Player_Name;
    }

}