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

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
}
