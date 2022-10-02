class UsersController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  post "/signup" do
   User.create()
  end

  post "/login" do
   # User.find_by(username:, password:)
  end


end