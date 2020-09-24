Rails.application.routes.draw do
  resources :reviews
  resources :meetings do 
  resources :reviews, only: [:create, :index]
  end
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
