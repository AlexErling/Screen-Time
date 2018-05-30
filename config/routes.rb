Rails.application.routes.draw do

  devise_for :users, :controllers => { registrations: 'registrations' }
  root 'home#index'
  resources :tv
  resources :movie
  resources :people
  resources :search
end
