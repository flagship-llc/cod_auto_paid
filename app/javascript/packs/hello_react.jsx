// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {AppProvider, Page, Card, Button} from '@shopify/polaris';

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

const app = (
  <AppProvider>
    <Page title="COD AUTO PAID">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>
  </AppProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM.render(
  //   <Hello name="React" />,
  //   document.body.appendChild(document.createElement('div')),
  // )
	ReactDOM.render(
	  app,
	  document.querySelector('#app'),
	);
})
