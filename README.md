# README

## Tech Stack
- Ruby 2.6
- Rails 5
- React ([Polaris](https://polaris.shopify.com/))

## Preparation

- setup redis
- setup [forego](https://dl.equinox.io/ddollar/forego/stable)
- setup ngrok for local development
- The original developer uses rbenv for local Ruby environment
- The original developer uses heroku for its cloud hosting


## Preparing a Shopify App

- Sign up for [Shopify Partners](https://www.shopify.jp/partners).
- Create an app, and you will get your API key and API secret key there (to be put in .env)
- the Whitelisted redirection URL should be like https://host.com/auth/shopify/callback


## Setup

- `$ bundle install`  
- `$ rake db:setup`  
- `$ cp .env.example .env` and fill in credentials


## Start up

`$ forego start` 

