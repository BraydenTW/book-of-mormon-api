# Book of Mormon API

_The ultimate Book of Mormon API. Built with Node and Express._

➡ https://book-of-mormon-api.vercel.app/

---

## Routes

`/random`: _Returns a random verse from and book or chapter._

`/random/:book`: _Returns a random verse from the requested book ([guidelines](#bookNames))_

`/random/:book/:chapter`: _Returns a random verse from the requested book and chapter._

`/:book/:chapter/:verse`: _Returns the verse based off the scripture reference passed in the URL._

**Below is the output structure for a verse.**

```json
{
  "reference": "1 Nephi 1:1",
  "text": "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father; and having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days; yea, having had a great knowledge of the goodness and the mysteries of God, therefore I make a record of my proceedings in my days.",
  "verse": 1
}
```

<h3 id="bookNames">Naming guidelines for books</h3>

When passing a value into the book parameter, follow the guidelines below:

```
1st Nephi = "1nephi"
2nd Nephi = "2nephi"
Jacob = "jacob"
Enos = "enos"
Jarom = "jarom"
Omni = "omni"
Words of Mormon = "wordsofmormon"
Mosiah = "mosiah"
Alma = "alma"
Heleman = "helaman"
3rd Nephi = "3nephi"
4th Nephi = "4nephi"
Mormon = "mormon"
Ether = "ether"
Moroni = "moroni"
```

---

## What is The Book of Mormon?

The Book of Mormon is another testament of Jesus Christ. It contains teachings from followers of Jesus. Learn more about it [here](https://www.churchofjesuschrist.org/comeuntochrist/believe/book-of-mormon/what-is-the-book-of-mormon).

---

Created by [@BraydenTW](https://github.com/braydentw).