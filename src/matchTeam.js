import matchJsonData from './Match.json'
import teamJsonData from './Team.json'

export default function matchTeam() {
    
    var teamArray = [];
    var matchArray = [];

    for(var i in teamJsonData)
        teamArray.push([i,teamJsonData[i]]);

    for(var k in matchJsonData)
        matchArray.push([k,matchJsonData[k]]);
    
    for(var j = 0; j<matchArray.length; j++) {
        var a = matchArray[j][1].Team_Name_Id;
        var b = matchArray[j][1].Opponent_Team_Id;
        var c = matchArray[j][1].Match_Winner_Id;
        // console.log(c);
        if(a<14)
            matchArray[j][1].Team_Name_Id = teamArray[a-1][1].Team_Name;
        if(b<14)
            matchArray[j][1].Opponent_Team_Id = teamArray[b-1][1].Team_Name;
        if(c === null)
            matchArray[j][1].Match_Winner_Id = "Draw";
        // if(c<14)
        //     matchArray[j][1].Match_Winner_Id = teamArray[c-1][1].Team_Name;
    }

    const flatValue = matchArray.flat(Infinity);
    return(flatValue);
}