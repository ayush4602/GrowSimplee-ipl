import React from 'react'
import PlayerJsonData from './Player.json'
import './table.css';

function PlayerJsonDataDisplay(){
    const DisplayData=PlayerJsonData.map(
        (info)=>{
            if(info.Is_Umpire === 0) {
                if(info.Bowling_Skill === "NULL") {
                    info.Bowling_Skill = "Not a Bowler";
                }
            return(
                <tr>
                    <td>{info.Player_Id}</td>
                    <td>{info.Player_Name}</td>
                    <td>{info.Batting_Hand}</td>
                    <td>{info.Bowling_Skill}</td>
                </tr>
            )
            }
        }
    )
 
    return(
        <div className="table">
            <table className="table-striped">
                <thead className="thead">
                    <tr>
                    <th>&nbsp; Player Id &nbsp;</th>
                    <th>&nbsp; Name &nbsp;</th>
                    <th>&nbsp; Batting Hand &nbsp;</th>
                    <th>&nbsp; Bowling Skill &nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default PlayerJsonDataDisplay;