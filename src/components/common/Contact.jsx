import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact-info" class="py-3">
        <div class="container">
          <h1 class="l-heading">
            <span class="text-primary1">Contact</span> Us
          </h1>
          <p>Please fill out the form below to contact us</p>
          <form action="process.python">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea type="text" name="message" id="message"></textarea>
            </div>
            <button type="submit" class="my-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
