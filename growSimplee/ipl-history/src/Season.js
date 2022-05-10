import React from 'react'
import SeasonJsonData from './Season.json'
import './table.css';

function SeasonJsonDataDisplay(){
    const DisplayData=SeasonJsonData.map(
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
        <div>
            <table class="table-table-striped">
                <thead class="head">
                    <tr>
                    <th>Sr.No.</th>
                    <th>Year</th>
                    <th>Orange_Cap_Id</th>
                    <th>Purple_Cap_Id</th>
                    <th>Man_of_the_Series_Id</th>
                    </tr>
                </thead>
                <tbody class="body">
                
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default SeasonJsonDataDisplay;