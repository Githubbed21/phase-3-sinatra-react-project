class User < ActiveRecord::Base
  def recipes
  #   ActiveRecord::Base.connection.exec_query("SELECT * from recipes where chef_id = #{self.id}")
    Recipe.where(chef_id: self.id)
  end
end