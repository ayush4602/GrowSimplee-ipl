import React from "react";
import Appp from "./seasonPlayer";
import './table.css';

export default function SeasonJsonDataDisplay() {
    const students = Appp();
    const DisplayData=students.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Season_Id}</td>
                    <td>{info.Season_Year}</td>
                    <td>{info.Orange_Cap_Id}</td>
                    <td>{info.Purple_Cap_Id}</td>
                    <td>{info.Man_of_the_Series_Id}</td>
                </tr>
            )
        }
    )
    return(
        <div className="table">
            <table className="table-striped">
                <thead className="thead">
                    <tr>
                    <th>&nbsp; Sr. No. &nbsp;</th>
                    <th>&nbsp; Year &nbsp;</th>
                    <th>&nbsp; Orange Cap Player &nbsp;</th>
                    <th>&nbsp; Purple Cap Player &nbsp;</th>
                    <th>&nbsp; Man of the Series &nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
}