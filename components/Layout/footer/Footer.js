import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialYoutube,
} from "react-icons/ti";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const onSubmitNewsHandler = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer">
      <div className="section-container footer__container">
        <div className="footer__actions">
          <div className="footer__actions__support">
            <h3>Support</h3>
            <ul>
              <li>FAQ</li>
              <li>Order Status</li>
              <li>Policies</li>
            </ul>
          </div>

          <div className="footer__actions__business">
            <h3>Company</h3>
            <ul>
              <li>Our Business</li>
              <li>Visit us</li>
            </ul>
          </div>

          <div className="footer__actions__newsletter">
            <h3>Sign up for Newsletter</h3>
            <p>
              Sign up to our Newsletter to be the first to know about upcoming
              products, sales, and tours.
            </p>
            <form
              className="footer__actions_newsletter__form"
              onSubmit={onSubmitNewsHandler}
            >
              <input type="email" placeholder="Email" />
              <button className="btn btn--secondary">Submit</button>
            </form>
            <div className="footer__social">
              <a
                href="https://github.com/schan610/the-plant-nursery.git"
                target="blank"
              >
                <AiFillGithub />
              </a>
              <TiSocialInstagram />
              <TiSocialTwitter />
              <TiSocialFacebook />
              <TiSocialPinterest />
              <TiSocialYoutube />
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <span>&#169; The Plant Nursery &#x2022;</span>
          <span>Images from Unsplash &#x2022;</span>
          <span>
            Product Images from
            <a href="feey.ch" target="blank">
              feey.ch
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
