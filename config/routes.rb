Rails.application.routes.draw do

  root 'home#index'
  resources :tv
  resources :movies
  resources :people
  resources :search
  resources :genres
  devise_for :users, :controllers => { registrations: 'registrations' }
end
