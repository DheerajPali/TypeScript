
// always try to use const before enum , then it will not generate a lot of code in js.

const enum seatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW = 'window',
    Fourth = 5 
    //you can assign value as per your need. 
}

let hcSeat = seatChoice.WINDOW;


export {}