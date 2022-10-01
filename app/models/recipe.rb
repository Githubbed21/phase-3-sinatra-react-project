class Recipe < ActiveRecord::Base
  belongs_to :chef, class_name: 'User'
end