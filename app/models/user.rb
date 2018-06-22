class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  has_many :posts
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  # self.with_posts 
  #   User.find_by_sql("
  #   Select 
  #   FROM
  #   LEFT JOIN
  #   ORDER BY ")
  # end 
end
