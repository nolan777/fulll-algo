const fizzbuzz = (n: number): string => {
    switch (true) {
        case n < 1:
            console.log("error: number must be greater than 0");
            return "number must be greater than 0";
        case n % 3 === 0:
            console.log("fizz");
            return "fizz";
        case n % 5 === 0:
            console.log("buzz");
            return "buzz";
        case n % 3 === 0 && n % 5 === 0:
            console.log("fizzbuzz");
            return "fizzbuzz";
        default:
            console.log(n.toString());
            return n.toString();
    }
}

fizzbuzz(93);