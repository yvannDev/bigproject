import Footer from "../components/footer";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false); // Correction : boolean au lieu de string
  const formRef = useRef();
  const [form, setForm] = useState({
    nom: "",
    email: "",
    objet: "",
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
          from_name: form.nom,
          to_name: "regis",
          from_email: form.email,
          to_email: "regisclaude8@gmail.com",
          objet: form.objet,
          message: form.message,
        },
        "YS6GfzBQAm4VbdQ-g"
      )
      .then(
        () => {
          setLoading(false);
          alert("Envoi réussi ! Je vous répondrai dès que possible.");

          setForm({
            nom: "",
            email: "",
            objet: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Envoi impossible. Veuillez réessayer.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className="content-form-contact">
        <h1 className="title-forme">Veuillez me contacter en cas d'urgence</h1>
      </div>
      <div className="form-content container">
        <form ref={formRef} onSubmit={handleSubmit} className="form-group">
          <div className="input-hover">
            <input
              className={`animation-name ${form.nom ? "filled" : ""}`}
              onChange={handleChange}
              type="text"
              name="nom"
              value={form.nom}
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
              className={`animation-name ${form.objet ? "filled" : ""}`}
              onChange={handleChange}
              type="text"
              name="objet"
              value={form.objet}
              id="objet"
              required
            />
            <label htmlFor="objet" className="form-label">
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
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;