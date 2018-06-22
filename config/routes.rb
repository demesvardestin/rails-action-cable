Rails.application.routes.draw do
  
  mount ActionCable.server => '/cable'
  devise_for :users, controllers: { registrations: 'users/registrations' }
  devise_scope :user do
    get '/sign_in', to: 'devise/sessions#new', as: 'user_login_path'
    get '/register', to: 'devise/registrations#new', as: 'user_signup_path'
  end
  resources :chatrooms, param: :slug
  resources :messages

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'chatroom#home'
  get '/chatroom/:slug', to: 'chatroom#show'
end
