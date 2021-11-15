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

app.get("/random", (req, res) => {
  const bookIndex = randomIndex(data.books);
  const chapterIndex = randomIndex(data.books[bookIndex].chapters);
  const verseIndex = randomIndex(
    data.books[bookIndex].chapters[chapterIndex].verses
  );
  res.json({
    ref: data.books[bookIndex].chapters[chapterIndex].verses[verseIndex],
  });
});

app.get("/random/:book", (req, res) => {
  const bookIndex = books.indexOf(req.params.book);
  const chapterIndex = randomIndex(data.books[bookIndex].chapters);
  const verseIndex = randomIndex(
    data.books[bookIndex].chapters[chapterIndex].verses
  );
  res.json({
    ref: data.books[bookIndex].chapters[chapterIndex].verses[verseIndex],
  });
});

app.get("/random/:book/:chapter", (req, res) => {
  const bookIndex = books.indexOf(req.params.book);
  const chapterIndex = books[bookIndex].indexOf(req.params.chapter);
  const verseIndex = randomIndex(
    data.books[bookIndex].chapters[chapterIndex].verses
  );
  res.json({
    ref: data.books[bookIndex].chapters[chapterIndex].verses[verseIndex],
  });
});

app.get("/:book", (req, res) => {
  res.json({
    ref: data.books[books.indexOf(req.params.book)],
  });
});

app.get("/:book/:chapter", (req, res) => {
  res.json({
    ref: data.books[books.indexOf(req.params.book)].chapters[
      parseInt(req.params.chapter) - 1
    ],
  });
});

app.get("/:book/:chapter/:verse", (req, res) => {
  res.json({
    ref: data.books[books.indexOf(req.params.book)].chapters[
      parseInt(req.params.chapter) - 1
    ].verses[parseInt(req.params.verse) - 1],
  });
});

app.listen(PORT, () => {
  console.log("hii");
});
