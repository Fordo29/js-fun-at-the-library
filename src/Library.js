function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: shelf = {
        fantasy: [],
        fiction: [],
        nonFiction: [],
    }
  }
      return library;
}


function addBook(libraryName, book) {
      libraryName.shelves[book.genre].push(book);
  }

function checkoutBook(libraryName, bookTitle, shelf) {
  var genreHell = libraryName.shelves[shelf];
  for (var i = 0; i < genreHell.length; i++) {
    if (genreHell[i].title === bookTitle) {
      genreHell.splice(i, 1)
    return `You have now checked out ${bookTitle} from the ${libraryName.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
}
