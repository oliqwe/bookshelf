export const computerMock = [
  {
    id: 'GgJN2CC_2s4C',
    title: 'Pro JavaScript Techniques',
    authors: ['John Resig'],
    publisher: 'Apress',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=vOZLwYJHymQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
  },
  {
    id: 'zVY9TKaVX0IC',
    title: 'JavaScript Design',
    authors: ['William B. Sanders'],
    publisher: 'New Riders',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=17t801XaggoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
  },
  {
    id: '17t801XaggoC',
    title: 'JavaScript Application Cookbook',
    authors: ['Jerry Bradenbaugh'],
    publisher: '"O\'Reilly Media, Inc."',
    publishedDate: '1999',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=XJrXl71TITIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
  },
  {
    id: 'XJrXl71TITIC',
    title: "JavaScript Programmer's Reference",
    authors: ['Alexei White'],
    publisher: 'John Wiley & Sons',
    publishedDate: '2010-06-15',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=GgJN2CC_2s4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
  },
]

export const shelvesMock = [
  { id: '1', categoryId: '9', name: 'JS goodies', books: computerMock },
  { id: '2', categoryId: '9', name: 'More JS goodies ', books: computerMock },
]
