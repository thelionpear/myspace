Rails.application.routes.draw do
  # namespace :api do
  #   get 'users/index'
  # end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :posts, :users
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
