import React from "react";
import { Button, Form } from "react-bootstrap";

function ConsultationForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit} className="w-75">
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 px-4"
            required
          />
        </Form.Group>
        <Form.Group controlId="formFullName" className="mb-3">
          <Form.Control
            type="text"
            name="full-name"
            placeholder="Full Name"
            className="p-3 px-4"
            required
          />
        </Form.Group>
        <Form.Group controlId="formSelect" className="mb-3">
          <Form.Select
            name="select"
            aria-label="Default select example"
            className="p-3 px-4"
            required
          >
            <option value="">Select One..</option>
            <option value="Partner with Gradient">Partner with Gradient</option>
            <option value="Co-found with Gradient">
              Co-found with Gradient
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="Type your message"
            className="p-3 px-4"
            required
          />
        </Form.Group>
        <div className="d-grid">
          <Button
            type="submit"
            variant="outline-light"
            size="lg"
            className="submit-button rounded-pill mt-3 py-3"
          >
            Submit
          </Button>
        </div>
        <br />
        <span>{result}</span>
      </Form>
    </>
  );
}

export default ConsultationForm;
