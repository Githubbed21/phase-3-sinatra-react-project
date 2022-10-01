class Recipe < ActiveRecord::Base
  belongs_to :chef, class: 'User'
end