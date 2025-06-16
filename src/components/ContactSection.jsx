import React, { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  // State for form handling and feedback
  const [form, setForm] = useState({ name: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setIsSending(true);
    // Simulate sending (AJAX call here)
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      setForm({ name: "", message: "" });
    }, 1300);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-100 to-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-blue-800 mb-6 tracking-wide"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contactez-nous
        </motion.h2>

        {/* Contact Informations */}
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FaMapMarkerAlt className="inline-block text-red-500 mr-2" />
          <span className="font-medium">Adresse :</span> Tokoin Wuiti
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 mt-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <FaPhone className="inline-block text-green-500 mr-2" />
          <span className="font-medium">Téléphone :</span> 98801667 / 79797940
        </motion.p>

        {/* Contact Form */}
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form
            className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md border border-gray-200"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              className="border-b-2 border-gray-300 focus:border-blue-400 focus:outline-none w-full py-3 mb-6 text-gray-700 placeholder-gray-400"
              disabled={isSending}
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              className="border-b-2 border-gray-300 focus:border-blue-400 focus:outline-none w-full py-3 mb-6 text-gray-700 placeholder-gray-400 h-32 resize-none"
              disabled={isSending}
            ></textarea>
            {error && (
              <div className="mb-4 text-red-500 text-sm">{error}</div>
            )}
            {sent && (
              <motion.div
                className="mb-4 text-green-600 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Merci, votre message a été envoyé !
              </motion.div>
            )}
            <motion.button
              type="submit"
              className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transform transition-transform hover:scale-105 w-full flex items-center justify-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              disabled={isSending}
            >
              {isSending ? (
                <span className="animate-spin rounded-full border-2 border-t-white border-blue-200 h-5 w-5 mr-2"></span>
              ) : null}
              {isSending ? "Envoi..." : "Envoyer"}
            </motion.button>
          </form>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://wa.me/22898801667"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transform transition-transform hover:scale-105 text-lg"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Contacter via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;