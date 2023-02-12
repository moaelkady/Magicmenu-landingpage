import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Heading from "../../components/heading/heading.component";
import Button from "../../components/secondary-button/secondary-button.component";

const Pricing = () => {
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
            heading="Prices"
            title="How Much Does It Cost"
            marker="?"
            info={
              <p>
                A basic MagicMenu package that includes your online menu and a
                free domain name with a server to host your menu and a QR code
                for you to use, should cost <del>$500</del> $250 (for a limited
                time only). A custom Magicmenu design with more features from
                your choice, on the other hand, will cost between $500 and
                $1,500 and will include paid domain and hosting with a panel to
                control your menu.
              </p>
            }
            theme="middle-view"
          />
        </div>
        <div className="section-container button-container">
          <Link to="/contact">
            <Button btnName="Order Now" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
