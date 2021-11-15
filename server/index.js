const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way",
    "A friend asks only for your time not your money.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFotune = fortunes[randomIndex];

  res.status(200).send(randomFotune);
});

app.get("/api/movie", (req, res) => {
  const movies = ["gladiator", "batman", "bugs bunny", "Troy", "Patriot"];

  let randomIndex = Math.floor(Math.random() * movies.length);
  let randomMovie = movies[randomIndex];

  res.status(200).send(randomMovie);
});

app.get("/api/books", (req, res) => {
  const books = [
    "Mistborn",
    "harrypotter",
    "jason borne the book",
    "books",
    "diary of a wimpy kid",
  ];

  let randomIndex = Math.floor(Math.random() * books.length);
  let randomBooks = books[randomIndex];

  res.status(200).send(randomBooks);
});

app.get("/api/candy", (req, res) => {
  const candies = [
    "kitkat",
    "butterfinger",
    "reices",
    "butterfinger number 2",
    "snickers",
  ];

  let randomIndex = Math.floor(Math.random() * candies.length);
  let randomCandy = candies[randomIndex];

  res.status(200).send(randomCandy);
});

app.listen(4000, () => console.log("Server running on 4000"));
