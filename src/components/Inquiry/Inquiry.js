// @flow strict
import React, { useState } from "react";
import { stringify } from "qs";
import { serialize } from "dom-form-serializer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Inquiry.module.scss";

const Inquiry = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isFailure, setFailure] = useState(false);
  const [requestAccept, setRequestAccept] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requestAccept) return;
    setRequestAccept(false);

    const form = e.target;
    const data = serialize(form);
    setRequestAccept(true);
    fetch("/" + "?" + stringify(data), {
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw new Error("Network error");
        }
      })
      .then(() => {
        form.reset();
        setRequestAccept(true);
        setSuccess(true);
      })
      .catch((error) => {
        setRequestAccept(true);
        setFailure(true);
      });
  };

  return (
    <div className={styles["inquiry"]}>
      <h1 className={styles["inquiry__title"]}>お問い合わせ</h1>
      {isSuccess && (
        <div className={styles["inquiry__message"]}>
          <p className={styles["inquiry__message1"]}>
            お問い合わせありがとうございました。
          </p>
          <p className={styles["inquiry__message2"]}>
            確認してご連絡させていただきます。
          </p>
        </div>
      )}
      {isFailure && (
        <div className={styles["inquiry__message"]}>
          <p className={styles["inquiry__message1"]}>
            お問い合わせに失敗しました。
          </p>
          <p className={styles["inquiry__message2"]}>
            お手数ですが、暫く経ってから再度お問い合わせください。
          </p>
        </div>
      )}
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
          <input type="hidden" name="form-name" value="aitoma-form" />

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
