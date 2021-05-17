import {React,useEffect,useState } from "react";
import {Project} from "./Project";
 export function ProjectList(){
     const APP_URL="/api/project/details";

     const[ProjectList,setProjectList] = useState([]);
     function getList(){
         return fetch(APP_URL).then((data) => data.json());

     }
     useEffect(()=>{
         console.log("USE EFFECT ")
         let count=true;
         getList().then((data)=>{
             if(count){
                 setProjectList(data);

             }
         });
         return () =>(count=false);
     },[]);

     return(
         <div className="details" id="calss_2">
             <p className="project_heading">
                 <code><h2><b>My Projects</b></h2></code>
             </p>
             <hr/>
             <table border="1" className="table">
                 <tbody className="project_details">
                     <tr>
                         <th className="project-row">Project Name

                         </th>
                         <th className="project-row">Project Description

                         </th>
                         <th className="project-row">Github link

                         </th>
                     </tr>
                     {ProjectList.map((project)=>(
                         <Project key={project.id} project={project}
                         />
                     ))}
                 </tbody>
             </table>
         </div>
     );
 }