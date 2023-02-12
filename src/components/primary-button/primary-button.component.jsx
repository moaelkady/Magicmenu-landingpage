import { Link } from "react-router-dom";

import "./primary-button.styles.scss";
const PrimaryButton = ({ path, btnName, animated }) => {
  return (
    <Link to={path} className={"primary-button-container " + animated}>
      <span className="btn-name">{btnName}</span>
      <span className="hover-effect">Hover effect</span>
    </Link>
  );
};

export default PrimaryButton;
