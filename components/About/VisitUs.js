import { useRef, useState } from "react";
import ErrorMsg from "../ui/ErrorMsg";

// This component handles the Visit page
const VisitUs = () => {
  // Set up states and refs for form submission
  const [isSending, setIsSending] = useState(false);
  const [hasError, setHasError] = useState(false);
  const contactName = useRef();
  const contactEmail = useRef();
  const contactSubject = useRef();
  const contactMessage = useRef();

  // Function to reset form whenever message successfully sent
  const resetForm = () => {
    contactName.current.value = "";
    contactEmail.current.value = "";
    contactSubject.current.value = "";
    contactMessage.current.value = "";
  };

  // Function handles submit and fetches from API to get response.
  const handleSubmit = async (e) => {
    // Guard clause to prevent multiple calls when one is still running
    if (isSending) return;
    setIsSending(true);
    e.preventDefault();

    // Set up form data
    const data = {
      name: contactName.current.value,
      email: contactEmail.current.value,
      subject: contactSubject.current.value,
      text: contactMessage.current.value,
    };

    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Handle response if mail successfully send
    if (!response.ok) {
      setIsSending(false);
      setHasError(true);
      console.log(`Could not send`);
      return;
    }
    setHasError(false);
    setIsSending(false);
    resetForm();
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
              <input type="text" id="contact-name" ref={contactName} />
              <label htmlFor="contact-email">Email</label>
              <input type="email" id="contact-email" ref={contactEmail} />
              <label htmlFor="contact-subject">Subject</label>
              <input type="text" id="contact-subject" ref={contactSubject} />
              <label htmlFor="contact-message">Message</label>
              <textarea
                name=""
                id="contact-message"
                cols="30"
                rows="10"
                ref={contactMessage}
              ></textarea>

              <button
                type="button"
                className={`btn btn--secondary ${isSending && "btn--disabled"}`}
                onClick={handleSubmit}
              >
                {isSending ? "Sending" : "Send"}
              </button>
            </form>
            {hasError && (
              <ErrorMsg
                message={
                  "There was an error trying to send you message. Please try again later."
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
