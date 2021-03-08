## What is a Bitboard?

Bitboards, also called bitsets or bitmaps, are among other things used to represent the board inside a chess program in a piece centric manner. Bitboards, are in essence, finite sets of up to 64 elements - all the squares of a chessboard, one bit per square.

To represent the board we typically need one bitboard for each piece-type and color - likely encapsulated inside a class or structure, or as an array of bitboards as part of a position object. A one-bit inside a bitboard implies the existence of a piece of this piece-type on a certain square - one to one associated by the bit-position.

Learn more about bitboards at [Chess Programming Wiki](https://www.chessprogramming.org/Bitboards)

## Bitboard Editor

The Bitboard Editor allows you to visually edit a 64-bit bitmap and get a constant, unsigned 64-bit number, which can be used to create test cases for a chess engine. This editor uses [Little-Endian](https://www.chessprogramming.org/Little-endian).

```
     A    B    C    D    E    F    G    H
   +----+----+----+----+----+----+----+----+
 8 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 |  8th rank
   +----+----+----+----+----+----+----+----+
 7 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 |  7th rank
   +----+----+----+----+----+----+----+----+
 6 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 |  6th rank
   +----+----+----+----+----+----+----+----+
 5 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |  5th rank
   +----+----+----+----+----+----+----+----+
 4 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |  4th rank
   +----+----+----+----+----+----+----+----+
 3 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |  3rd rank
   +----+----+----+----+----+----+----+----+
 2 |  8 |  9 | 10 | 11 | 12 | 13 | 14 | 15 |  2nd rank
   +----+----+----+----+----+----+----+----+
 1 |  0 |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  1st rank
   +----+----+----+----+----+----+----+----+
     A    B    C    D    E    F    G    H - file(s)
```

## How to set up locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so the set up proccess is pretty straightforward:

```bash
git clone https://github.com/ndrkv/bitboard-editor
cd bitboard-editor
npm install
npm start
```

Check out create-react-app [README](https://github.com/facebook/create-react-app/blob/master/README.md) for more information.
