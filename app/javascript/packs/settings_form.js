import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {FormLayout, Form, TextField, Button} from '@shopify/polaris';

export class SettingsForm extends React.Component {
  state = {
    value: '',
  };

  render() {

    return (
      <FormLayout>
        <Form noValidate onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.value}
            onChange={this.handleChange}
            label="代引き決済のGateway名"
            placeholder="e.g. 代金引換"
            helpText="デフォルトの「Cash on Delivery (COD)」を選択している場合は空欄のままで問題ありません。"
          />
          <Button submit>保存</Button>
        </Form>
      </FormLayout>
    );
  }

  handleSubmit = (event) => {
    this.setState({value: ''});
  };

  handleChange = (value) => {
    this.setState({value});
  };
}

