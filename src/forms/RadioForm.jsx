import PropTypes from 'prop-types';
import React from 'react';
import { Card, Form } from 'react-bootstrap';

const RadioForm = (props) => {
  const {
    checkboxEnabledChange, checkboxEnabled, radiosEnabled, checkboxDisabledChange, checkboxChange,
  } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Radios & Checkboxes</Card.Title>
        <Form.Check
          custom
          type="radio"
          id="Checkbox enabled"
          label="Checkbox enabled"
          onChange={checkboxEnabledChange}
          checked={checkboxEnabled}
          disabled={!radiosEnabled}
        />
        <Form.Check
          custom
          type="radio"
          id="Checkbox disabled"
          label="Checkbox disabled"
          onChange={checkboxDisabledChange}
          checked={!checkboxEnabled}
          disabled={!radiosEnabled}
        />
        <Form.Check
          custom
          type="checkbox"
          id="Radios disabled"
          label="Radios disabled"
          onChange={checkboxChange}
          checked={radiosEnabled}
          disabled={!checkboxEnabled}
        />
        <Form />
      </Card.Body>
    </Card>
  );
};

RadioForm.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  checkboxDisabledChange: PropTypes.func.isRequired,
  checkboxEnabled: PropTypes.bool.isRequired,
  checkboxEnabledChange: PropTypes.func.isRequired,
  radiosEnabled: PropTypes.bool.isRequired,
};

export default RadioForm;
