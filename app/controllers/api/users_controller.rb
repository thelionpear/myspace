class Api::UsersController < ApplicationController
  def index
    render json: User.all 
    #make it User.with_posts to put the user and its posts in redux 
  end
end
