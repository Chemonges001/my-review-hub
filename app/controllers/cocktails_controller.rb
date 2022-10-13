class CocktailsController < ApplicationController
    def index
        cocktails = Cocktail.all
        render json: cocktails
    end

    def show
        cocktail = Cocktail.find(params[:id])
        render json: cocktail
    end 
    def create
        cocktail = @current_user.cocktails.create!(cocktail_params)
        render json: cocktail, status: :created
    end

    def destroy
        cocktail = Cocktail.find(params[:id])
        cocktail.destroy
        head :no_content
    end

    private
    def cocktail_params
        params.permit(:name, :image, :description)
    end
end
