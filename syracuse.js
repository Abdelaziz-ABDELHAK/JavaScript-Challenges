// Here is my attempt at the Syracuse problem, also called the Collatz conjencture using JavaSript :

// Using while loop :
var N = 7;
while (N !== 1) {
  console.log(N);
  if (N % 2 == 0) {
    N = N / 2;
  } else {
    N = 3 * N + 1;
  }
}

// Using do-while loop :
var N = 7;
do {
  console.log(N);
  if (N % 2 == 0) {
    N = N / 2;
  } else {
    N = 3 * N + 1;
  }
} while (N !== 1);

// Using the for loop :
for (var N = 7; N !== 1; ) {
  console.log(N);
  if (N % 2 == 0) {
    N = N / 2;
  } else {
    N = 3 * N + 1;
  }
}
