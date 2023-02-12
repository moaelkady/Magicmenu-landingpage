import { useState } from "react";
import { writeDataToDocs } from "../../utils/firebase/firebase.utils";
import Input from "../input/input.component";
import MessageBox from "../message-box/message-box.component";
import MessageSentBox from "../message-sent-box/message-sent-box.component";
import SecondaryButton from "../secondary-button/secondary-button.component";
import Heading from "../heading/heading.component";
import "./contact-form.styles.scss";

const defaultFormFields = {
  username: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [msgSent, setMsgSent] = useState(false);
  const { username, email, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await writeDataToDocs(formFields);
    resetFormFields();
    setMsgSent(true);
  };
  const clearSuccessBox = () => {
    setMsgSent(false);
  };

  return (
    <div className="form-container">
      <Heading
        heading="Get in touch"
        theme="middle-view"
        title="Send us a message"
        marker="."
      />
      <div>
        <MessageSentBox
          clearSuccessBox={clearSuccessBox}
          msgStatus={msgSent ? "show" : "hide"}
        />
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              required
              type="text"
              placeholder="Name"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <Input
              required
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              disabled={!username}
              onChange={handleChange}
            />
          </div>
          <MessageBox
            required
            placeholder="Tell us a bit about your needs..."
            name="message"
            value={message}
            disabled={!email}
            onChange={handleChange}
          ></MessageBox>
          <SecondaryButton type="submit" btnName="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
