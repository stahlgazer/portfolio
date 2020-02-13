import React from "react";

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div id="Contact">
      <h2>Contact</h2>
      <form>
        <div>
          <label>Name: </label>
          <input placeholder="Your Name" type="name" required />
          <label>E-mail: </label>
          <input placeholder="YourEmail@Email.com" type="email" required />
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
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
