class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating, :user_id, :cocktail_id
end
