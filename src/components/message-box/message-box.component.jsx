import "./message-box.styles.scss";
const MessageBox = ({ ...props }) => {
  return (
    <div>
      <textarea className="message-box" {...props}></textarea>
    </div>
  );
};

export default MessageBox;
