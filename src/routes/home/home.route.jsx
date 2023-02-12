import { motion } from "framer-motion";
import Heading from "../../components/heading/heading.component";
import PrimaryButton from "../../components/primary-button/primary-button.component";
const Home = () => {
  return (
    <motion.div
      className="route-view-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.2 }}
    >
      <div className="router-view">
        <div className="section-container heading-container">
          <Heading
            heading="MagicMenu"
            title="Alternative online menu"
            info={
              <p>
                For all restaurants and coffee shops, MagicMenu is an
                alternative to the traditional menu, Rather than printing your
                menu we offer a simple solution: A magic menu is an online menu
                for your business that customers can access by scanning a QR
                code.
              </p>
            }
            marker="."
          />
        </div>
        <div className="section-container button-container">
          <PrimaryButton btnName="Order Now" path="/contact" animated="animated" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
