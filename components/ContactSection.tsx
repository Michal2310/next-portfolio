"use client";
import { useRef } from "react";

const ContactSection = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current?.value,
          message: messageRef.current?.value,
        }),
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      id="contact"
      className="bg-[#5A3AC7] rounded-lg grid grid-cols-1 lg:grid-cols-2 mt-40 w-[80vw] sm:w-[65vw] m-auto p-8"
    >
      <div className="w-[90%] lg:w-[70%] mb-4">
        <h1 className="text-white font-medium text-3xl flex items-center mb-4">
          <span className="bg-[#FF00F5] h-7 w-[0.2rem] mr-2"></span>Contact
        </h1>
        <p className="text-white text-lg">
          If you want to start a collaboration or do a project together or and you think my skills
          might be useful or you have business questions feel free to write
        </p>
      </div>
      <div className="h-full">
        <form action="" className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            className="bg-white p-2 rounded-md"
          />
          <textarea
            placeholder="Message"
            required={true}
            ref={messageRef}
            className="bg-white p-2 my-3 rounded-md"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-[#FF00F5] text-center text-white rounded-md p-2"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
