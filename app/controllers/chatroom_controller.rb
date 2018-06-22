class ChatroomController < ApplicationController
  before_action :authenticate_user!, only: [:show]
  
  def show
    @chatroom = Chatroom.find_by(slug: params[:slug])
    @message = Message.new
  end
  
  def home
    
  end
  
end
