import { motion } from "framer-motion";
import Heading from "../../components/heading/heading.component";
import Button from "../../components/secondary-button/secondary-button.component";

const Product = () => {
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
            heading="Our offer to you"
            title="What do you get"
            marker="?"
            info={
              <p>
                Pay once and receive our lifetime offer, which includes:
                Customized online menu, domain, and management panel for your
                online menu. Custom QR code with your brand logo.
                <br /> 
                Additionally, you can choose to add unique features.
              </p>
            }
            theme="middle-view"
          />
        </div>
        <div className="section-container button-container">
          <a
            href="https://menuserviceonline.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Button btnName="See online Sample" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Product;
