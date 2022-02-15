// @flow strict
import React, { useState } from "react";
import Helmet from "react-helmet";
import { stringify } from "qs";
import { serialize } from "dom-form-serializer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Inquiry.module.scss";

const Inquiry = () => {
  const messageProps = {
    successMessage: "お問い合わせありがとうございました。",
    errorMessage:
      "お問い合わせに失敗しました。お手数ですが再度お問い合わせください。",
  };

  const [disable, setDisable] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disable) return;

    const form = e.target;
    console.log(form);
    const data = serialize(form);
    console.log(data);
    setDisable(true);
    fetch(form.action + "?" + stringify(data), {
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
        setDisable(false);
        setMessage(messageProps.successMessage);
      })
      .catch((err) => {
        console.error(err);
        setDisable(false);
        setMessage(messageProps.errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" />
      </Helmet>
      <div className={styles["inquiry"]}>
        <h1 className={styles["inquiry__title"]}>お問い合わせ</h1>
        {message && <div className="inquiry__message">{message}</div>}
        <div className={styles["inquiry__body"]}>
          <Form
            name="aitoma-form"
            method="POST"
            action="/"
            className="inquiry"
            onSubmit={handleSubmit}
            data-netlify="true"
          >
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
              <Form.Control as="textarea" name="content" rows={4} />
            </Form.Group>

            <div className="d-grid gap-2 col-6 mx-auto">
              <Button variant="primary" type="submit" size="lg">
                送信
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
