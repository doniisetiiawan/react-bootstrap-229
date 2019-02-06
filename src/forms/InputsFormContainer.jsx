import React, { Component } from 'react';
import { fromJS } from 'immutable';

import InputsForm from './InputsForm';

function validateName(name) {
  if (name.search(/ /) === -1) {
    return 'First and last name, separated with a space';
  }
  if (name.length < 4) {
    return 'Less than 4 characters? Srsly?';
  }

  return null;
}

class InputsFormContainer extends Component {
  state = {
    data: fromJS({
      nameValue: '',
      nameChange: (e) => {
        this.data = this.data.merge({
          nameValue: e.target.value,
          nameValidationState:
            validateName(e.target.value) === null,
          nameValidationText: validateName(e.target.value),
        });
      },
      passwordValue: '',
      passwordChange: (e) => {
        this.data = this.data.set('passwordValue', e.target.value);
      },
    }),
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    return (
      <InputsForm {...this.data.toJS()} />
    );
  }
}

export default InputsFormContainer;
