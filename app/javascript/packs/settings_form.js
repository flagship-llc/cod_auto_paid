import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {FormLayout, Form, TextField, Button} from '@shopify/polaris';
import axios from 'axios';

export class SettingsForm extends React.Component {
  state = {
    value: ''
  };

  componentWillMount() {
    axios.post(`/v1/graphql`, {
      query: `
        query GetShop { 
          shop { 
            gateway_name
          }
        }
      `,
    }).then(resp => {
      this.setState({ 
        value: resp.data.data.shop.gateway_name
      })
      console.log(this.state.value);
    });
  }

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
    var query = `
      mutation($input: UpdateGatewayInput!) {
        updateGatewayMutation(input: $input) {
          shop {
            gateway_name
          }
        }
      }
    `;

    axios.post(`/v1/graphql`, {
      query: query,
      variables: {
        input: {
          gateway_name: this.state.value
        }
      }
    }).then(resp => {
      this.setState({ 
        value: resp.data.data.updateGatewayMutation.shop.gateway_name
      })
      console.log(this.state.value);
    });
  };

  handleChange = (value) => {
    this.setState({value});
  };
}

