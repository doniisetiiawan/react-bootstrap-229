import React, { Component } from 'react';
import { fromJS } from 'immutable';

import RadioForm from './RadioForm';

class RadioFormContainer extends Component {
  state = {
    data: fromJS({
      checkboxEnabled: false,
      radiosEnabled: true,

      checkboxEnabledChange: () => {
        this.data = this.data.set('checkboxEnabled', true);
      },

      checkboxDisabledChange: () => {
        this.data = this.data.set('checkboxEnabled', false);
      },

      checkboxChange: () => {
        this.data = this.data.update(
          'radiosEnabled',
          enabled => !enabled,
        );
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
      <RadioForm {...this.data.toJS()} />
    );
  }
}

export default RadioFormContainer;
