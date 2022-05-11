import React from 'react'
import TeamJsonData from './Team.json'
import './table.css';

function TeamJsonDataDisplay(){
    const DisplayData=TeamJsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Team_Id}</td>
                    <td>{info.Team_Name}</td>
                    <td>{info.Team_Short_Code}</td>
                </tr>
            )
        }
    )
 
    return(
        <div className="table">
            <table className="table-striped">
                <thead className="thead">
                    <tr>
                    <th>&nbsp; Sr.No. &nbsp;</th>
                    <th>&nbsp; Name &nbsp;</th>
                    <th>&nbsp; Short Code &nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default TeamJsonDataDisplay;