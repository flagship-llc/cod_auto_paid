Rails.application.routes.draw do
  root :to => 'home#index'
  mount ShopifyApp::Engine, at: '/'

  #require 'sidekiq/web'
  #mount Sidekiq::Web => '/sidekiq'

end
