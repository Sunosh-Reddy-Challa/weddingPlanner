
import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = (props) => {
  const [messagedetails, setMessagedetails] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessagedetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://mern-project-backend-opal.vercel.app/api/auth/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: messagedetails.name,
        email: messagedetails.email,
        number: messagedetails.number,
        address: messagedetails.address,
        message: messagedetails.message,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      props.setclickEvent(true);
    } else {
      alert(json.message);
    }
    setMessagedetails({
      name: "",
      email: "",
      number: "",
      address: "",
      message: "",
    });
  };

  return (
    <div>
      <motion.section
        className="contact"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading">
          <span>Contact</span> Us
        </h1>
        <motion.form
          className="form-container"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={messagedetails.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={messagedetails.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="number"
              value={messagedetails.number}
              placeholder="Your Phone Number"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              value={messagedetails.address}
              placeholder="Your Address"
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={messagedetails.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button
            type="button"
            onClick={handleSubmit}
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default Contact;
