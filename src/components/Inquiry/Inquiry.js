// @flow strict
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Inquiry.module.scss";

const Inquiry = () => {
  const [message, setMessage] = useState("");
  const [requestAccept, setRequestAccept] = useState(true);

  const handleSubmit = (e) => {
    if (!requestAccept) return;
    setRequestAccept(false);

    fetch("/", {
      method: "POST",
    })
      .then(() => {
        setRequestAccept(true);
        e.target.value.reset();
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
          method="POST"
          className="inquiry"
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" />

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>お名前</Form.Label>
            <Form.Control name="name" type="text" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control name="email" type="email" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicTextarea">
            <Form.Label>お問い合わせ内容</Form.Label>
            <Form.Control as="textarea" name="message" rows={4} />
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
