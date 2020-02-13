import React from "react";
import { Button } from "@material-ui/core";

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div id="Contact">
      <h2>Contact by E-mail</h2>
      <form action="https://formspree.io/xpzdbvwl" method="POST">
        <div>
          <label>Name: </label>
          <input placeholder="Your Name" type="name" required />
          <label>E-mail: </label>
          <input
            placeholder="YourEmail@Email.com"
            type="email"
            name="_replyto"
            required
          />
        </div>
        <label>Message: </label>
        <textarea
          type="text"
          placeholder="Type Your Message"
          name="message"
          rows="10"
          cols="30"
          required
        ></textarea>
        <div className="contact-submit">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Send"
            onSubmit={handleSubmit}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
