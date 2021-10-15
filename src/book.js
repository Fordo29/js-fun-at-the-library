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

function calculatePageCount() {

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
