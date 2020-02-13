import React from "react";

export default function Contact() {
  return (
    <div id="Contact">
      <h2>Contact</h2>
      <form>
        <div>
        <label>Name: </label>
        <input type="text" />
        <label>E-mail: </label>
        <input type="text" />
        </div>
        <label>Message: </label>
        <input type="text" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
