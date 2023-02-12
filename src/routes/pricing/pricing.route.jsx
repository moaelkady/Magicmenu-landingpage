import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.2 }}
      className="route-view-container"
    >
      <div className="router-view">Pricing</div>
    </motion.div>
  );
};

export default Pricing;
