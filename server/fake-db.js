const Rental = require('./models/rental');

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
            }]
    }

    async cleanDb() {
       await Rental.deleteMany({});
    }

    pushRentalstoDb() {
        this.rentals.forEach(rental => {
            const newRental = new Rental(rental); 

            newRental.save();
        });
    }

    seedDb() {
        this.cleanDb();
        this.pushRentalstoDb();
    }
}

module.exports = FakeDb;