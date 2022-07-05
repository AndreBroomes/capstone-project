class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :user_id, :webpage
end
