import Heading from "../../components/heading/heading.component";
import Button from "../../components/secondary-button/secondary-button.component";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.2 }}
      className="route-view-container"
    >
      <div className="router-view">
        <div className="section-container heading-container">
          <Heading
            heading="Our service"
            title="Today's Innovation"
            info={
              <p>
                MagicMenu is an alternative to the traditional menu. Rather than
                printing your menu repeatedly as you add products, we provide a
                straightforward and quicker solution: a great-looking online
                menu with a QR code to access, and you may edit it whenever you
                want.
              </p>
            }
            marker="."
          />
        </div>
        <div className="section-container button-container">
          <Link to="/contact">
            <Button btnName="Get Your Menu" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
