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
//console.log("kldhjfkl;aihflkdjahlkfjdha", book);

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
