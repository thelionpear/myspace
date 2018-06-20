class Api::UsersController < ApplicationController
  def index
    binding.pry
    render json: User.all
  end
end
