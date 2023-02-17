import table from "./tables.module.css";
import React, { useEffect, useState } from "react";
import Dates from "./Dates"
import Duration from "./Duration"
import Site from './Site'
import ContestName from './ContestName'
import AddToCalender from './AddToCalender'
const Table = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((response) => response.json())
      .then((data) =>{
        data.sort((a,b)=>{
          var u =new Date(a.start_time)
          var v = new Date(b.start_time)
          return u.getTime()-v.getTime()
        })
        setUser(data)}).catch((e)=>console.log(e));
  }, []);
  return (
    <div className={table.main}>
      <table className={table.heading}>
        <thead>
          <tr className={table.header}>
            <th className={table.contest}><h2>Contest</h2></th>
            <th className={table.site}><h2>Site</h2></th>
            <th><h2>Start</h2></th>
            <th className={table.Duration}><h2>Duration</h2></th>
            <th><h2>Add Reminder</h2></th>
          </tr>
        </thead>
        <tbody>

          {user.map((data,index)=>
          (
            <tr key={index}>
            <td><ContestName name={data.name} url={data.url}></ContestName></td>
            <td><Site name={data.site}></Site></td>
            <td><Dates name={data.start_time}></Dates></td>
            <td><Duration start={data.start_time} end={data.end_time}></Duration></td>
            <td><AddToCalender data={data} ></AddToCalender></td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
