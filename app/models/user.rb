class User < ApplicationRecord
    has_many :cocktails
    
    has_secure_password
    validates :user_name, presence: true, uniqueness: true 
    validates :name, presence: true
end
