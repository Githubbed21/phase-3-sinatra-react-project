class RecipesController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
 get "/recipes" do
  render json: Recipe.all
 end

 get "/recipes/:id" do
  render json: Recipe.find(params[:id])
 end

  post "/recipes" do
    render json: Recipe.create(params)
  end

  patch "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    render json: recipe.update(params)
  end

end