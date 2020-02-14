import React from "react";
import { Button } from "@material-ui/core";

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section id="Contact">
      <div className="nav-fix">
        <h2>Contact by E-mail</h2>
      </div>
      <form
        action="https://formspree.io/xpzdbvwl"
        method="POST"
        data-aos="flip-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        data-aos-mirror='true'
      >
        <div>
          <label className="formlabel">Name: </label>
          <input placeholder="Your Name" type="name" required />
        </div>
        <div>
          <label className="formlabel">E-mail: </label>
          <input
            placeholder="YourEmail@Email.com"
            type="email"
            name="_replyto"
            required
          />
        </div>
        <label className="formlabel">Message: </label>
        <textarea
          type="text"
          placeholder="Type Your Message"
          name="message"
          rows="10"
          cols="10"
          required
          style={{ resize: "none" }}
        ></textarea>
        <div className="contact-submit">
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            value="Send"
            onSubmit={handleSubmit}
          >
            Send
          </Button>
        </div>
      </form>
    </section>
  );
}
