Rails.application.routes.draw do

  root 'home#index'
  resources :tv
  resources :movie
  resources :people
end
