Rails.application.routes.draw do
  
  resources :teams
  resources :comments
  resources :topics
  resources :meetups
  # resources :users
  resources :user_meetups
  resources :user_topics
  
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    # post '/users/login', to: 'users#login'
    post "/login", to: "sessions#login"
    delete "/logout", to: "sessions#logout"


    post "/join", to: "users#joinMeetup"
    delete "/usertopic/delete", to: "users#deleteTopic"
    delete "/usermeetup/delete", to: "users#leaveMeetup"
    # get '/loggedInUser', to: 'users#loggedInUser'

 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end