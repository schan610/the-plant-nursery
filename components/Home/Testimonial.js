import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial__container section-container">
        <ul className="testimonial__list">
          <li className="testimonial__item">
            <div className="testimonial__item__rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-primary testimonial__item__comment">
              "The plant and pot looks amazing and the package came with a handy
              care guide as well."
            </p>
            <span className="testimonial__item__author">Jane C</span>
          </li>
          <li className="testimonial__item">
            <div className="testimonial__item__rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-primary testimonial__item__comment">
              "These plants have obviously been well cared for and the packaging
              was lovely"
            </p>
            <span className="testimonial__item__author">Lisa M</span>
          </li>
          <li className="testimonial__item">
            <div className="testimonial__item__rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-primary testimonial__item__comment">
              "The plant came in fast, secure packaging and looks super
              healthy."
            </p>
            <span className="testimonial__item__author">John K</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
