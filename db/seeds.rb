i = 1
50.times do
  name = Faker::Name.name
  email = "test#{i}@test.com"
  password = "password"
  password_confirmation = "password"
  user = User.create(name: name, email: email, password: password, password_confirmation: password, reset_password_token: nil)
  puts "Created user #{name}, #{email}"
  i += 1
    10.times do
        user.posts.create(
        body: Faker::VForVendetta.quote
        )
    end 
end

