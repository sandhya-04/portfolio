import {React} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";
export function Social(){
    return (
        <div class="social-container">

        <a href="https://www.facebook.com/Sandhya Singh/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/sansin_04" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
        <a href="https://twitter.com/Sandhya96923018" className="twitter social">
           <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/singhsandhya130197?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmHl48u6ESMaPqOV5Ctt2PQ%3D%3D" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />

                        </a>

                      </div>
    );
}