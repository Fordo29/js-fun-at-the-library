function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book);
  }
  return book
}


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
