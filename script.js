// Solution
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

/*
Explanation:
- We loop through numbers from 1 to 100.
- For each number, we check if it is divisible by both 3 and 5 first (i.e., 15), and print 'FizzBuzz' if true.
- If not, we check if it is divisible by 3 and print 'Fizz' if true.
- Next, we check if it is divisible by 5 and print 'Buzz' if true.
- If none of the above conditions are met, we simply print the number itself.
*/
