import "./secondary-button.styles.scss";
const SecondaryButton = ({ btnName }) => {
  return (
    <button className="secondary-button-container">
      <div className="button ">
        <span className="label">{btnName}</span>
        <span className="icon">
          <span></span>
        </span>
        <span className="icon2"></span>
      </div>
    </button>
  );
};

export default SecondaryButton;
