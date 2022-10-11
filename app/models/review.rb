class Review < ApplicationRecord
    belongs_to :user
    belongs_to :cocktail

    validates :description, presence: true, length: {minimum: 50}
    validates :rating, numericality: {in: 1..5}
end
