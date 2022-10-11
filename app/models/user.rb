class User < ApplicationRecord
    has_many :reviews
    has_many :cocktails, though: :reviews

    has_secure_password
    validates :username, presence: true, uniqueness: true 
    vaidates :name, presence: true
end
