import "./message-sent-box.styles.scss";

const MessageSentBox = ({ msgStatus, clearSuccessBox }) => {
  return (
    <div className={"message-sent-box-container " +msgStatus}>
      <div className="message-sent-box-close">
        <span onClick={clearSuccessBox}>X</span>
      </div>
      <div className="message-sent-info">
        <span>Thank you, We Recieved Your Message</span>
      </div>
    </div>
  );
};

export default MessageSentBox;