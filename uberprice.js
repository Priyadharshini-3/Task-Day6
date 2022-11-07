// QUESTION-3
// Write a “person” class to hold all the details.

class person{
    constructor(name,place,job,qualification){
        this.name=name;
        this.place=place;
        this.job=job;
        }
}
let person1=new person("Priyadharshini","Trichy","Software Developer")
let person2=new person("Sneha","Kerala","Program Tester")

console.log(person1.name)
console.log(person1.place)

console.log(person2.name)
console.log(person2.place)


// QUESTION-4
// write a class to calculate the uber price

class uber{
    constructor(distance,rate,waitingperiod){
    this.distance=distance;
    this.rate=rate;
    this.waitingperiod=waitingperiod;
}
}
getRideDetails(){
    return('The distance of the ride is $(this.distance} with rate of ${this.rate} with a waitingperiod of ${this.waitingperiod}')
}

let uber1=new uber(400,20,10);
console.log(uber1);

getPrice(){
    let price=(this.distance*this.rate)+(5*this.waitingperiod)
    return price;
}
let uber=new uber(400,20,10);
console.log(uber.getPrice)
console.log(uber1.getRideDetails)