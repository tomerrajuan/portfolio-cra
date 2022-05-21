import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h1 className="contact">Contact Us</h1>
      <form
        action="https://formspree.io/f/tomer.rajuan@gmail.com"
        method="POST"
        id="contactForm"
        name="sentMessage"
        noValidate
      >
        <div className="form">
          <input
            className="form-control"
            id="name"
            type="text"
            name="name"
            required
            data-validation-required-message="Please enter your name."
          />
          <label htmlFor="name" className="label-name zero-left">
            <span className="content-name">Name</span>
          </label>
          <p className="help-block text-danger"></p>
        </div>
        <div className="form">
          <input
            className="form-control"
            id="email"
            type="text"
            name="_replyto"
            required
            data-validation-required-message="Please enter your email address."
          />
          <label htmlFor="email" className="label-name zero-left">
            <span className="content-name">Email</span>
          </label>
          <p className="help-block text-danger"></p>
        </div>
        <div className="textbox">
          <div className="text">
            <textarea
              name="message"
              className="form-control"
              id="message"
              placeholder="your message"
              required
              data-validation-required-message="Please enter a message."
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-lg-12 text-center">
          <div id="success"></div>
          <button
            id="sendMessageButton"
            className="btn btn-primary btn-xl text-uppercase"
            type="submit"
            value="Send"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
