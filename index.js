alert("Working");

// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.
//

// class GitHubRepo
// {
//     constructor(userName, fileName, descOfRepo, code)
//     {
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descOfRepo = descOfRepo;
//         this.code = code;
//        
//     }
//     printProps()
//     {
//         console.log(this.userName);
//         console.log(this.fileName );
//         console.log(this.descOfRepo);
//         console.log(this.code);
//     }
// }
//
// let repo = new GitHubRepo("Kandice","Aug_13_Afternoon","Classwork","17025" );
// repo.printProps();


// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties. Create an object of the class and use the two methods you created.
//

class Movie
{
    constructor(movieNames, rating,yearReleased)
    {
        this.movieNames= movieNames;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }

    movieChanges()
    {
        console.log(myMovie.rating = "R");
        alert(myMovie.yearReleased = "1968");

    }

}

let myMovie = new Movie("Austin Powers","PG13","2001");
console.log(myMovie);
myMovie.movieChanges();
console.log(myMovie);

// console.log(myMovie);

//     ### Challenge 1:
// Create a Person class with three properties: name, weight, and height. Create a method that can calculate the BMI of a person using the formula below. Create an object of the class and use the function.
//
// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.
//
//     ### Challenge 2:
// Create a Bank class with the the name and balance properties. Afterwards, create an object of the class and follow the instructions below:
//     - Creates an account named "Matt's account" with the balance of 1000
// - Creates an account named "My account" with the balance of 0
// - Withdraws 100.0 from Matt's account
// - Deposits 100.0 to My account
// - Prints both accounts
