// @flow strict
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Inquiry.module.scss";

const Inquiry = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [requestAccept, setRequestAccept] = useState(true);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&amp;");
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (!requestAccept) return;
    setRequestAccept(false);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "aitoma-form", ...formState }),
    })
      .then(() => {
        setRequestAccept(true);
        document.getElementById("aitoma-form").reset();
        setMessage("お問い合わせありがとうございました。");
      })
      .catch((error) => {
        setRequestAccept(true);
        setMessage(
          "お問い合わせに失敗しました。暫く経ってから再度お問い合わせください。"
        );
      });

    e.preventDefault();
  };

  return (
    <div className={styles["inquiry"]}>
      <h1 className={styles["inquiry__title"]}>お問い合わせ</h1>
      {message && <div className="inquiry__message">{message}</div>}
      <div className={styles["inquiry__body"]}>
        <Form
          name="aitoma-form"
          id="aitoma-form"
          method="POST"
          className="inquiry"
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="aitoma-form" />
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>お名前</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicTextarea">
            <Form.Label>お問い合わせ内容</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-grid gap-2 col-6 mx-auto">
            <Button variant="primary" type="submit" size="lg">
              送信
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Inquiry;
