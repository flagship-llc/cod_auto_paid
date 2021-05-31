Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/v1/graphql"
  end
  scope 'v1', module: 'v1' do
    post '/auth/:provider/graphql', to: 'graphql#execute'
  end
  root :to => 'home#index'
  mount ShopifyApp::Engine, at: '/'

  #require 'sidekiq/web'
  #mount Sidekiq::Web => '/sidekiq'

end
