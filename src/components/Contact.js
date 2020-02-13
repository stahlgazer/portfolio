import React from "react";

export default function Contact() {

const handleSubmit = e => {
e.preventDefault()
}

  return (
    <div id="Contact">
      <h2>Contact</h2>
      <form>
        <div>
          <label>Name: </label>
          <input type="name" required />
          <label>E-mail: </label>
          <input type="email" required />
        </div>
        <label>Message: </label>
        <input type="text" required />
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
