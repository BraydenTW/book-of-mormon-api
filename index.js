const express = require("express");

const data = require("./book-of-mormon.json");

const app = express();
const PORT = process.env.PORT || 8000;

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

const books = [
  "1nephi",
  "2nephi",
  "jacob",
  "enos",
  "jarom",
  "omni",
  "wordsofmormon",
  "mosiah",
  "alma",
  "helaman",
  "3nephi",
  "4nephi",
  "mormon",
  "ether",
  "moroni",
];

app.get("/", (req, res) =>
  res.json({
    message: "Welcome to the ultimate Book of Mormon API! Instructions are here: https://github.com/BraydenTW/book-of-mormon-api/",
  })
);

app.get("/random", (req, res) => {
  const bookIndex = randomIndex(data.books);
  const chapterIndex = randomIndex(data.books[bookIndex].chapters);
  const verseIndex = randomIndex(
    data.books[bookIndex].chapters[chapterIndex].verses
  );
  res.json(data.books[bookIndex].chapters[chapterIndex].verses[verseIndex]);
});

app.get("/random/:book", (req, res) => {
  const bookIndex = books.indexOf(req.params.book);
  const chapterIndex = randomIndex(data.books[bookIndex].chapters);
  const verseIndex = randomIndex(
    data.books[bookIndex].chapters[chapterIndex].verses
  );
  res.json(data.books[bookIndex].chapters[chapterIndex].verses[verseIndex]);
});

app.get("/random/:book/:chapter", (req, res) => {
  const bookIndex = books.indexOf(req.params.book);
  const chapterIndex = parseInt(req.params.chapter) - 1;
  const verseIndex = randomIndex(
    data.books[bookIndex].chapters[chapterIndex].verses
  );
  res.json(data.books[bookIndex].chapters[chapterIndex].verses[verseIndex]);
});

app.get("/:book/:chapter/:verse", (req, res) => {
  res.json(
    data.books[books.indexOf(req.params.book)].chapters[
      parseInt(req.params.chapter) - 1
    ].verses[parseInt(req.params.verse) - 1]
  );
});

app.listen(PORT, () => {
  console.log("hii");
});
