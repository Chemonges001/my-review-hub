# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 u1 = User.create(name: "Oscar Kiprop", user_name: "The Legend" )
 u2 = User.create(name: "Amos Koech", user_name: "Spiderman" )

 c1 = Cocktail.create(name: "Margarita", image: "Looks so good")
 c2 = Cocktail.create(name: "Cockatail db", image: "exciting")
 c3 = Cocktail.create(name: "Blue Margarita", image: "Amazing")

 r1 = Review.create(description: "Good Looking", rating: 5, user_id: 1, cocktail_id: 1)
 r2 = Review.create(description: "Amzing Taste", rating: 3, user_id: 1, cocktail_id: 2)
 r1 = Review.create(description: "Excellent", rating: 4, user_id: 2, cocktail_id: 1)
 