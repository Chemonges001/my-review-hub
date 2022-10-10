class User < ApplicationRecord
    has_many :reviews
    has_many :cocktails, though: :reviews
end
