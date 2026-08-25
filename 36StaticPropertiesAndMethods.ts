// static properties and methods are associated with 
// the class itself rather than instances of the class.
// They can be accessed directly using the class name without 
// creating an instance of the class.
// Static Members are shared among all instances of the class, 
// meaning that they have the same value for all instances.

// There is no such thing as static class in TypeScript.
//  

class Company {
    // static property
    static companyName: string = "Tech Solutions Inc.";
    location: string = "Hamburg";
    country: string = "Germany";
    revenue: number = 10000000;

    constructor(location: string, revenue: number) {
        this.location = location;
        this.revenue = revenue;
    }   

    // static method
    static getCompanyInfo(): string {
        return `Company Name: ${Company.companyName}`;
    }

    getFullInfo(): string {
        return `Company Name: ${Company.companyName}, 
                Location: ${this.location}, 
                Country: ${this.country}, Revenue: ${this.revenue}`;
    }
}

 // Accessing static method without creating an instance
console.log(Company.getCompanyInfo());

// Static blocks : runs once when the class is loaded into memory,
//  and can be used to initialize static properties.
class Firm {
    static companyName: string = "Innovatech Ltd.";
    location: string = "Berlin";
    country: string = "Germany";
    static {
        console.log(`Initializing static block for ${Firm.companyName}`);
    }
}