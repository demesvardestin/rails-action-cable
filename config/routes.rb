Rails.application.routes.draw do
  
  mount ActionCable.server => '/cable'
  devise_for :users, controllers: { registrations: 'application' }
  devise_scope :user do
    get '/sign_in', to: 'devise/sessions#new'
    get '/register', to: 'devise/registrations#new'
  end
  resources :chatrooms, param: :slug
  resources :messages

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'chatroom#show'
  get '/chatroom/:slug', to: 'chatroom#show'
end
