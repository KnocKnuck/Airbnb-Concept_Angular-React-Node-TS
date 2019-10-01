const Rental = require('./models/rental');
const User = require('./models/user');

class FakeDb {
    constructor() {
        this.rentals = this.rentals = [{
            title: "Nice view on ocean",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 4,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 43
            },
            {
            title: "Modern apartment in center",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 1,
            shared: false,
            description: "Very nice apartment in center of the city.",
            dailyRate: 11
            },
            {
            title: "Old house in nature",
            city: "Paris",
            street: "France",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 5,
            shared: true,
            description: "Au pieds de la Tour Eiffel",
            dailyRate: 23
            }];
        
            this.user = [{
                username = "Galaxy 1",
                email = "galaxytest@gmail.com",
                password = "testonthegalaxy",
            }]
    }

    async cleanDb() {
        await User.deleteMany({})
       await Rental.deleteMany({});
    }

    pushDatatoDb() {
        const user = new User(this.user[0]);


        this.rentals.forEach(rental => {
            const newRental = new Rental(rental); 
            newRental.user = user;
            user.rentals.push(newRental);

            newRental.save();
        });
        user.save();
    }

   async seedDb() {
      await this.cleanDb();
        this.pushDatatoDb();
    }
}

module.exports = FakeDb;