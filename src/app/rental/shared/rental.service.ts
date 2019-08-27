import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable()
export class RentalService {

    private rentals: any[] = 
    [{
        id:1,
        title: "Central Apartment",
        city: "New York",
        street:"Time Square",
        category: "Appartement",
        image: "http://via.placeholder.com/350x250",
        bedroom: 3,
        description: "En plein centre",
        dailyrate: 34,
        shared: false, 
        createdAt: "27/08/2019"
      },
      {
        id:2,
        title: "Cosy House",
        city: "Paris",
        street:"Neuilly-Sur-Seine",
        category: "House",
        image: "http://via.placeholder.com/350x250",
        bedroom: 3,
        description: "Proche du métro",
        dailyrate: 88,
        shared: false, 
        createdAt: "27/08/2019"
      },
      {
        id:3,
        title: "Central Apartment 2",
        city: "San Francisco",
        street:"Main Street",
        category: "Condo",
        image: "http://via.placeholder.com/350x250",
        bedroom: 3,
        description: "Very Nice Appartment",
        dailyrate: 39,
        shared: false, 
        createdAt: "27/08/2019"
      },
      {
        id:4,
        title: "Cosy Room for 2",
        city: "Japan",
        street:"Shibuya",
        category: "Condo",
        image: "http://via.placeholder.com/350x250",
        bedroom: 3,
        description: "En plein centre",
        dailyrate: 44,
        shared: false, 
        createdAt: "27/08/2019"
      },]

public getRentals(): any {
    const rentalObservable = new Observable((observer) => {

        setTimeout(() => {
            observer.next(this.rentals)
        }, 1000);

        setTimeout(() => {
            observer.error("I'am Error")
        }, 2000);

        setTimeout(() => {
            observer.complete()
        }, 3000);
    })
    return rentalObservable;
}

}