function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book);
  }
  return book
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1)
    }
  }
}
function listTitles(shelf) {
  var bookNames = [];
  for (var i = 0; i < shelf.length; i++){
    bookNames.push(shelf[i].title);
  }
  return bookNames.join(", ");
}

function searchShelf(shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
  if(shelf[i].title === book) {
    //bookSearch.includes(book)
    //
    return true
  }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
