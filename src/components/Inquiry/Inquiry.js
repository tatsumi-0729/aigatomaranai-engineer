// @flow strict
import React from "react";
import styles from "./Inquiry.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Inquiry = () => (
  <div className={styles["inquiry"]}>
    <h1 className={styles["inquiry__title"]}>お問い合わせ</h1>
    <div className={styles["inquiry__body"]}>
      <Form
        name="aitoma-form"
        method="POST"
        action="/pages/thanks"
        className="inquiry"
        data-netlify="true"
      >
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>お名前</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicTextarea">
          <Form.Label>問い合わせ内容</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>

        <div className="d-grid gap-2 col-6 mx-auto">
          <Button variant="primary" size="lg">
            送信
          </Button>
        </div>
      </Form>
    </div>
  </div>
);

export default Inquiry;
