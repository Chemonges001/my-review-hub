class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating
  belongs_to :cocktail
end
