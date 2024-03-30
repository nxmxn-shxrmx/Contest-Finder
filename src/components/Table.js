import table from "./tables.module.css";
import React, { useEffect, useState } from "react";
import Dates from "./Dates";
import Duration from "./Duration";
import Site from "./Site";
import ContestName from "./ContestName";
import AddToCalender from "./AddToCalender";
const Table = () => {
  const [user, setUser] = useState([]);
  const [da,setDa] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://clist.by/api/v4/contest/?upcoming=true&order_by=start&limit=400&username=nxmxn&api_key=360d98991a295b18fd9c923eb7ee8b2298ab99f7&format=json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const filteredData = data.objects.filter((i)=>
        {
          return (i.host==="codeforces.com"|i.host==="leetcode.com"|i.host==="topcoder.com"|i.host==="atcoder.jp"|i.host==="codingninjas.com/codestudio"|i.host==="geeksforgeeks.org"|i.host==="codechef.com"|i.host==="hackerrank.com")
        })
     
        setDa(filteredData);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
   
  }, []);
  console.log(da)
  return (
    <div>
      {isLoading ? (
        <h1 style={{textAlign:"center",justifyItems:"center",alignItems:"center"}}>Loading...</h1>
      ) : (
        <div className={table.main}>
          <table className={table.heading}>
            <thead>
              <tr className={table.header}>
                <th className={table.contest}>
                  <h2>Contest</h2>
                </th>
                <th className={table.site}>
                  <h2>Site</h2>
                </th>
                <th>
                  <h2>Start</h2>
                </th>
                <th className={table.Duration}>
                  <h2>Duration</h2>
                </th>
                <th>
                  <h2>Add Reminder</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {da.map((data, index) => (
                <tr key={index}>
                  <td>
                    <ContestName name={data.event} url={data.href}></ContestName>
                  </td>
                  <td>
                    <Site name={data.host}></Site>
                  </td>
                  <td>
                    <Dates name={data.start}></Dates>
                  </td>
                  <td>
                    <Duration
                      start={data.start}
                      end={data.end}
                    ></Duration>
                  </td>
                  <td>
                    <AddToCalender data={data}></AddToCalender>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
    </div>
  );
};
export default Table;
