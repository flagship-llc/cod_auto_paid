// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { SettingsForm } from './settings_form'
import {AppProvider, Page, Card, Button, ResourceList, TextStyle, Avatar} from '@shopify/polaris';

const customers = [
  {
    id: 341,
    url: 'customers/341',
    name: 'Mae Jemison',
    location: 'Decatur, USA',
  },
  {
    id: 256,
    url: 'customers/256',
    name: 'Ellen Ochoa',
    location: 'Los Angeles, USA',
  },
];

const app = (
  <AppProvider>
    <Page fullWidth>
      <Card title="" sectioned>
        <p>代引きの注文のFinancial Statusを、受注時に自動でPendingからPaidに変更するアプリです。</p>
        <p>&nbsp;</p>
        <SettingsForm />
      </Card>
      {/*<Card>
        <ResourceList
          resourceName={{singular: 'customer', plural: 'customers'}}
          items={customers}
          renderItem={(item) => {
            const {id, url, name, location} = item;
            const media = <Avatar customer size="medium" name={name} />;
            return (
              <ResourceList.Item
                id={id}
                url={url}
                media={media}
                accessibilityLabel={`View details for ${name}`}
              >
                <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>{location}</div>
              </ResourceList.Item>
            );
          }}
        />
      </Card>*/}
    </Page>
  </AppProvider>
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
	  app,
	  document.querySelector('#app'),
	);
})
