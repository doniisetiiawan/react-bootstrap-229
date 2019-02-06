import React from 'react';
import { Form } from 'react-bootstrap';


const Input = ({
  type, label, placeholder, value, onChange, validationState, validationText,
}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isValid={validationState}
    />
    <Form.Text className="text-muted">{validationText}</Form.Text>
  </Form.Group>
);

export default Input;
