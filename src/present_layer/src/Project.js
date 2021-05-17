import React from "react";
export function Project(props){
    return(
        <tr>
            <td>{props.project.projectTitle}</td>
            <td>{props.project.projectDescription}</td>
            <td>
                <a style={{color:"rgb(97,219,251"}}
                href={props.project.projectSourceLink}>Source Link</a>
            </td>

        </tr>
    );
}