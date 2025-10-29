import React from "react";
import { Button,Container,Form } from "react-bootstrap";


const Login = () => {
  return (
    <Container>
      <Form className="form-area">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>SIGN IN OR CREATE NEW ACCOUNT</Form.Label>
          <Form.Control className="login-box-size" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We will process your personal data in accordance with COS Privacy Notice.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control className="login-box-size" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="login-box-size" variant="primary" type="submit">
          LOG IN
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
