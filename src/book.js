function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character
}

function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return reviews
  } else {
    reviews.push(newReview);
  }
    return reviews
  }
function calculatePageCount(bookTitle) {
  var myArr = bookTitle.split("");
  return myArr.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
 var book = {
   title: bookTitle,
   mainCharacter: bookCharacter,
   pageCount: calculatePageCount(bookTitle),
   genre: genre
 }
 return book
}

function editBook(crazyBook) {
    crazyBook.pageCount *= .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
