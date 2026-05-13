# JS FizzBuzz

FizzBuzz programming exercise in JavaScript from my Web Development course.

## Goal

Write a program that:

- prints the numbers from 1 to 100;
- prints `Fizz` instead of the number for multiples of 3;
- prints `Buzz` instead of the number for multiples of 5;
- prints `FizzBuzz` instead of the number for numbers that are multiples of both 3 and 5.

## Solution

Check the `script.js` file for the solution.

## Technical Decisions

- I considered starting from `i = 0` with the condition `i < 100` and calculating the actual number with `i + 1`, but I chose to start directly from `i = 1` and end at `i <= 100` for simplicity.
- I considered using modulo `15` to identify numbers that are multiples of both 3 and 5. I preferred the explicit condition `i % 3 === 0 && i % 5 === 0` for clarity.
- I considered using variables such as `isFizz` and `isBuzz`, but I preferred a more direct solution.

## References

- [FizzBuzz on Wikipedia](https://en.wikipedia.org/wiki/Fizz_buzz)
