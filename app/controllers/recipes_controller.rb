class RecipesController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
 get "/recipes" do
  render json: Recipe.all
 end




end