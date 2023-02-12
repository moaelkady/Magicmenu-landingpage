import { useState } from "react";
import { writeDataToDocs } from "../../utils/firebase/firebase.utils";

import Input from "../input/input.component";
import MessageBox from "../message-box/message-box.component";
import MessageSentBox from "../message-sent-box/message-sent-box.component";
import SecondaryButton from "../secondary-button/secondary-button.component";

import "./contact-form.styles.scss";

const defaultFormFields = {
  username: "",
  email: "",
  message: "",
  estBudget: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [msgSent, setMsgSent] = useState(false);
  const { username, email, message, estBudget } = formFields;

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
          <Input
            required
            type="number"
            placeholder="Est. Budget in $"
            min="1"
            name="estBudget"
            value={estBudget}
            disabled={!email}
            onChange={handleChange}
          />

          <MessageBox
            required
            placeholder="Tell us a bit about your project..."
            name="message"
            value={message}
            disabled={!estBudget}
            onChange={handleChange}
          ></MessageBox>

          <SecondaryButton type="submit" btnName="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
