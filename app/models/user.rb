class user < ActiveRecord::Base
  has_many :recipes
end