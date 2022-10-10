class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_name, :password_digest
end
