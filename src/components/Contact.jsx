import React, { useRef } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dkge8ar", "template_68pk1x8", form.current, {
        publicKey: "ZPyTzECslm6xqANW-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold uppercase text-center text-[#001b5e]">
        Contact
      </h1>
      <h3 className="py-4 text-3xl font-bold  text-[#26396b] flex items-center justify-center">
        <AiTwotoneMail/>
        prithvikr46@gmail.com
      </h3>
      {/* <form action="" method="POST" encType="multipart/form-data"> */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="text"
              name="user_name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="text"
              name="phone_num"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-400"
            type="email"
            name="user_email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-400"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-400"
            rows="10"
            name="message"
          />
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
