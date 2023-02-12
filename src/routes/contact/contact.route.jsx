import { motion } from "framer-motion";

import ContactForm from "../../components/contact-form/contact-form.component";
const Contact = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.2 }}
      className="route-view-container"
    >
      <div className="router-view">
      <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
