import Footer from "../components/footer";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";   
// import GoolemapLocation from "./GoolemapLocation";
import {  SendHorizontalIcon } from "lucide-react";


const Contact = () => {
  const [loading, setLoading] = useState(null); // Correction : boolean au lieu de string
  const formRef = useRef();
  const [form, setForm] = useState({
    nom: "",
    email: "",
    object: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_o3zxb2s",
        "template_hcm3l25",
        {
          from_name: form.name,
          to_name: "regis",
          from_email: form.email,
          to_email: "regisclaude8@gmail.com",
          object: form.object,
          message: form.message,
        },
        "YS6GfzBQAm4VbdQ-g"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Envoi réussi ! Je vous répondrai dès que possible.");

          setForm({
            name: "",
            email: "",
            object: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          toast.error("Envoi impossible. Veuillez réessayer.");
          setLoading(false);
        }
      );
  };

  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} />
      <div className="content-form-contact">
        <h1 className="title-forme">Veuillez nous contactés</h1>
      </div>
      <div className="form-content container">
        <form ref={formRef} onSubmit={handleSubmit} className="form-group">
          <div className="input-hover">
            <input
              className={`animation-name ${form.name ? "filled" : ""}`}
              onChange={handleChange}
              type="text"
              name="name"
              value={form.name}
              id="nom"
              required
            />
            <label htmlFor="nom" className="form-label">
              Votre nom
            </label>
          </div>
          <div className="input-hover">
            <input
              className={`animation-name ${form.email ? "filled" : ""}`}
              onChange={handleChange}
              type="email"
              name="email"
              value={form.email}
              id="email"
              required
            />
            <label htmlFor="email" className="form-label">
              Votre adresse email
            </label>
          </div>
          <div className="input-hover">
            <input
              className={`animation-name ${form.object ? "filled" : ""}`}
              onChange={handleChange}
              type="text"
              name="object"
              value={form.object}
              id="object"
              required
            />
            <label htmlFor="object" className="form-label">
              Votre objet
            </label>
          </div>
          <div className="input-hover">
            <textarea
              className={`animation-name ${form.message ? "filled" : ""}`}
              onChange={handleChange}
              rows="3"
              name="message"
              value={form.message}
              id="message"
              required
            ></textarea>
            <label htmlFor="message" className="form-label">
              Votre message
            </label>
          </div>

          <div className="btn-submit">
            <button className="valid" type="submit">
              {loading ? "En cours..." : "Envoyer"}
              <SendHorizontalIcon className="plane" size={30}/>
            </button>
          </div>
        </form>
      </div>
      {/* <GoolemapLocation /> */}
      <Footer />
    </>
  );
};

export default Contact;