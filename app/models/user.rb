class User < ApplicationRecord
    has_many :reviews
    has_many :cocktails, through: :reviews

    has_secure_password
    validates :user_name, presence: true, uniqueness: true 
    validates :name, presence: true
end
