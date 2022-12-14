Rails.application.routes.draw do
  
  
  resources :cocktails, only: [:index, :show, :create, :destroy]
  resources :reviews
  resources :users, only: [:index, :show, :create]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  root :to => 'index#index'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
