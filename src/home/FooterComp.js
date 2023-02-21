import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

const FooterComp = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_comp">
          <h1>About Us</h1>
          <p className="footer_link_container">
            <a href="#" className="footer_link">
              Careers
            </a>
          </p>
        </div>
        <div className="footer_comp">
          <h1>Service</h1>
          <p className="footer_link_container">
            {" "}
            <a href="#" className="footer_link">
              Subscription Plan
            </a>
          </p>
        </div>
        <div className="footer_comp">
          <h1>Support</h1>
          <p className="footer_link_container">
            {" "}
            <a href="#" className="footer_link">
              Give us Feedback
            </a>
          </p>
        </div>
        <div className="footer_comp">
          <h1>Learn</h1>
          <p className="footer_link_container">
            <a href="#" className="footer_link">
              Learn more about IDOs
            </a>
          </p>
          <a className="footer_link">Learn about investing</a>
        </div>
        <div className="footer_comp_grid">
          <h1>Community</h1>

          <div>
            <FacebookIcon className="social_link" />
            <InstagramIcon className="social_link" />
            <YouTubeIcon className="social_link" />
            <TwitterIcon className="social_link" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
