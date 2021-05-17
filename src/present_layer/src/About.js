import {React} from "react";
import sandy from "./sandy.jpg";



export function About(){
    return (

        <div className="sandhya" id="san1">
            <img  className="san3"
            src={sandy} alt="sandy" height="300" width="300"/>

            <div className="main">
                <code><h1><b>Sandhya Singh Chaudhary</b></h1></code></div>

                <div className="main1">
                    <p className="main2"><i><h3>Incoming SDE at Deutsche Bank</h3></i></p>
                    <p className="main2"><i><h3>Ex-SDE Intern at Morgan Stanley</h3></i></p>
                    <p className="main2"><i><h3>Additional Secretary at CSEA NITW | MCA NITW'21</h3></i></p>
                    </div>
                    <hr/>
                    <div className="main4">
                      <code><h2><b>Education</b></h2></code>
                    </div>
                    <div>
                      <p className="main5"><i><h3>MCA'21 from NIT WARNAGAL</h3></i></p>
                      <p className="main5"><i><h3>BCA from Agra University</h3></i></p>
                    </div>
                    <hr/>



                    </div>


    );
}