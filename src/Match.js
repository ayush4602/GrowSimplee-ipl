import React from "react";
import matchTeam from "./matchTeam";
import './table.css';

export default function MatchJsonDataDisplay() {
    const students = matchTeam();
    const DisplayData=students.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Match_Id}</td>
                    <td>{info.Match_Date}</td>
                    <td>{info.Team_Name_Id}</td>
                    <td>{info.Opponent_Team_Id}</td>
                    <td>{info.Match_Winner_Id}</td>
                    <td>{info.Venue_Name}</td>
                </tr>
            )
        }
    )
    return(
        <div className="table">
            <table className="table-striped">
                <thead className="thead">
                    <tr>
                    <th>&nbsp; Match ID &nbsp;</th>
                    <th>&nbsp; Match Date &nbsp;</th>
                    <th>&nbsp; Team 1 &nbsp;</th>
                    <th>&nbsp; Team 2 &nbsp;</th>
                    <th>&nbsp; Match Winner &nbsp;</th>
                    <th>&nbsp; Venue Name &nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
}