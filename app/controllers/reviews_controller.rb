class ReviewsController < ApplicationController
    
    skip_before_action :authorize

    def index
        reviews = Review.all 
        render json: reviews 
    end 

    def show
        review = Review.find(params[:id])
        render json: review
    end 

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end 
    def update 
        review = Review.find(params[:id])
        task.update!(review_params)
        render json: review
    end

    def delete
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end 

    private 
    def review_params
      params.permit(:description, :rating, :cocktail_id, :user_id)
    end 
end
