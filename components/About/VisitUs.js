import { useRef } from "react";
const VisitUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted form`);
  };
  return (
    <section className="visit">
      <div className="section-container visit__container">
        <div className="visit__img"></div>
        <div className="visit__text">
          <div className="visit__text__title">
            <h2 className="heading-secondary">Visit Us.</h2>
          </div>
          <div className="visit__text__contact-info">
            <h3 className="heading-tertiary">Contact Info</h3>
            <p>Plant Nursery Address: 123, Test St</p>
            <p>Phone Number: 123, Test St</p>
          </div>

          <div className="visit__text__contact-form">
            <h3 className="heading-tertiary">Email us</h3>
            <form action="">
              <label htmlFor="contact-name">Name</label>
              <input type="text" id="contact-name" />
              <label htmlFor="contact-email">Email</label>
              <input type="email" id="contact-email" />
              <label htmlFor="contact-subject">Subject</label>
              <input type="text" id="contact-subject" />
              <label htmlFor="contact-message">Message</label>
              <textarea
                name=""
                id="contact-message"
                cols="30"
                rows="10"
              ></textarea>

              <button
                type="submit"
                className="btn btn--secondary"
                onClick={handleSubmit}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
