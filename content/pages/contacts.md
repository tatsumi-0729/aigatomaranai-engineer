---
title: "Contact me"
template: "page"
socialImage: "/media/image-4.jpg"
---

<form name="contact" method="POST" action="/pages/thanks" netlify-honeypot="bot-field" netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
