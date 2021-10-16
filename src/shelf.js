function shelfBook(book, sciFiShelf) {
  sciFiShelf.unshift(book);
  console.log("iklahjfkdjhal;kifrhel;kaihfknalkfnladks", shelfBook.length);
  sciFiShelf.length = 3
  return book
}


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
