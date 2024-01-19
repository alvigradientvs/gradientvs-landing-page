import React from "react";
import { Button, Form, Container } from "react-bootstrap";

function ConsultationForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "10f75aba-2ce9-409a-8f8e-cbc2e6f7621c");

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
    <Container className="consultation-form">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Control type="email" name="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formFullName" className="mb-3">
          <Form.Control type="text" name="full-name" placeholder="Full Name" />
        </Form.Group>
        <Form.Group controlId="formSelect" className="mb-3">
          <Form.Select name="select" aria-label="Default select example">
            <option>Select One..</option>
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
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            type="submit"
            variant="outline-light"
            size="lg"
            className="submit-button rounded-pill"
          >
            Submit
          </Button>
        </div>
      </Form>
      <br />
      <span>{result}</span>
    </Container>
  );
}

export default ConsultationForm;
