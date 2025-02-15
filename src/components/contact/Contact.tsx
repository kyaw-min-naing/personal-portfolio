import React from "react";
import { Button, Form, Input } from "antd";
import { MdEmail, MdAddCall, MdLocationPin } from "react-icons/md";
import "./Contact.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const onFinish = (values: string) => {
  console.log(values);
};

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="./images/underline-8.png" alt="Under line" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently avaible to take on new projects. Feel free to contact
            for any project that you think can by done by me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MdEmail />
              <p>kmnprof@gmail.com</p>
            </div>
            <div className="contact-detail">
              <MdAddCall />
              <p>+951234567890</p>
            </div>
            <div className="contact-detail">
              <MdLocationPin />
              <p>Yangon, Myanmar</p>
            </div>
          </div>
        </div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="contact-right"
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
            className="form-in"
          >
            <Input placeholder="Enter you name" />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
            className="form-in"
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name={["user", "note"]}
            label="Note"
            rules={[{ required: true }]}
            className="form-in"
          >
            <Input.TextArea placeholder="Write your message here" />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className="contact-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Contact;
