import PropTypes from 'prop-types';
import React from 'react';
import { Card, Form } from 'react-bootstrap';

import Input from './Input';

const InputsForm = (props) => {
  const {
    nameValue, nameChange, nameValidationState, nameValidationText, passwordValue, passwordChange,
  } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Inputs</Card.Title>
        <Form>
          <Input
            type="text"
            label="Name"
            placeholder="First and last..."
            value={nameValue}
            onChange={nameChange}
            validationState={nameValidationState}
            validationText={nameValidationText}
          />

          <Input
            type="password"
            label="Password"
            value={passwordValue}
            onChange={passwordChange}
          />
        </Form>
      </Card.Body>
    </Card>
  );
};

InputsForm.defaultProps = {
  nameChange: () => {},
  nameValidationState: undefined,
  nameValidationText: '',
  nameValue: '',
  passwordChange: () => {},
  passwordValue: '',
};

InputsForm.propTypes = {
  nameChange: PropTypes.func,
  nameValidationState: PropTypes.oneOf([undefined, 'success', 'warning', 'error']),
  nameValidationText: PropTypes.string,
  nameValue: PropTypes.string,
  passwordChange: PropTypes.func,
  passwordValue: PropTypes.string,
};

export default InputsForm;
