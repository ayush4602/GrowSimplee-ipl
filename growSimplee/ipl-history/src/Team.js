import React from 'react'
import JsonData from './Team.json'
import './table.css';

function TeamJsonDataDisplay(){
    const DisplayData=JsonData.map(
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
        <div>
            <table class="table-table-striped">
                <thead>
                    <tr>
                    <th>Sr.No.</th>
                    <th>Name</th>
                    <th>Short Code</th>
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