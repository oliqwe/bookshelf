export const computerMock = [
  {
    id: 'GgJN2CC_2s4C',
    title: 'Pro JavaScript Techniques',
    thumbnail:
      'http://books.google.com/books/content?id=vOZLwYJHymQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    id: 'zVY9TKaVX0IC',
    title: 'JavaScript Design',
    thumbnail:
      'http://books.google.com/books/content?id=17t801XaggoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    id: '17t801XaggoC',
    title: 'JavaScript Application Cookbook',
    thumbnail:
      'http://books.google.com/books/content?id=XJrXl71TITIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    id: 'XJrXl71TITIC',
    title: "JavaScript Programmer's Reference",
    thumbnail:
      'http://books.google.com/books/content?id=GgJN2CC_2s4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
]

export const shelvesMock = [
  {
    id: '1',
    categoryId: '9',
    name: 'JS goodies',
    rating: 2,
    note: 'Javascript books',
    books: computerMock,
  },
  {
    id: '2',
    categoryId: '9',
    name: 'More JS goodies ',
    rating: 2,
    note: 'Javascript books',
    books: computerMock,
  },
]

export const mockBooks = {
  kind: 'books#volumes',
  totalItems: 2,
  items: [
    {
      kind: 'books#volume',
      id: 'pAmODwAAQBAJ',
      etag: 'NOAtYBzeakk',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/pAmODwAAQBAJ',
      volumeInfo: {
        title: 'JavaScript Patterns',
        subtitle: 'Build Better Applications with Coding and Design Patterns',
        authors: ['Stoyan Stefanov'],
        publisher: "O'Reilly Media",
        publishedDate: '2010-09-09',
        description:
          "What's the best approach for developing an application with JavaScript? This book helps you answer that question with numerous JavaScript coding patterns and best practices. If you're an experienced developer looking to solve problems related to objects, functions, inheritance, and other language-specific categories, the abstractions and code templates in this guide are ideal—whether you're using JavaScript to write a client-side, server-side, or desktop application. Written by JavaScript expert Stoyan Stefanov—Senior Yahoo! Technical and architect of YSlow 2.0, the web page performance optimization tool—JavaScript Patterns includes practical advice for implementing each pattern discussed, along with several hands-on examples. You'll also learn about anti-patterns: common programming approaches that cause more problems than they solve. Explore useful habits for writing high-quality JavaScript code, such as avoiding globals, using single var declarations, and more Learn why literal notation patterns are simpler alternatives to constructor functions Discover different ways to define a function in JavaScript Create objects that go beyond the basic patterns of using object literals and constructor functions Learn the options available for code reuse and inheritance in JavaScript Study sample JavaScript approaches to common design patterns such as Singleton, Factory, Decorator, and more Examine patterns that apply specifically to the client-side browser environment",
        readingModes: {
          text: false,
          image: true,
        },
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        previewLink:
          'http://books.google.com/books?id=pAmODwAAQBAJ&pg=PP2&dq=javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=pAmODwAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/JavaScript_Patterns.html?hl=&id=pAmODwAAQBAJ',
      },
      saleInfo: {
        country: 'MD',
      },
      accessInfo: {
        country: 'MD',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        accessViewStatus: 'SAMPLE',
      },
      searchInfo: {
        textSnippet:
          '\u003cb\u003eJavaScript\u003c/b\u003e. Patterns. Stoyan. has. urillen. What&#39;s the best approach for \u003cbr\u003e\ndeveloping an application with the. g0-0. guide. so. p \u003cb\u003eJavaScript\u003c/b\u003e? This book \u003cbr\u003e\nhelps you answer that question with o numerous \u003cb\u003eJavaScript\u003c/b\u003e coding patterns and \u003cbr\u003e\nbest practices.',
      },
    },
    {
      kind: 'books#volume',
      id: 'PXa2bby0oQ0C',
      etag: 'wDMRW+JfRmg',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/PXa2bby0oQ0C',
      volumeInfo: {
        title: 'JavaScript: The Good Parts',
        subtitle: 'The Good Parts',
        authors: ['Douglas Crockford'],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: '2008-05-08',
        description:
          "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
        readingModes: {
          text: true,
          image: true,
        },
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '0.6.6.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        previewLink:
          'http://books.google.com/books?id=PXa2bby0oQ0C&printsec=frontcover&dq=javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=PXa2bby0oQ0C&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/JavaScript_The_Good_Parts.html?hl=&id=PXa2bby0oQ0C',
      },
      saleInfo: {
        country: 'MD',
      },
      accessInfo: {
        country: 'MD',
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        accessViewStatus: 'SAMPLE',
      },
      searchInfo: {
        textSnippet:
          'If you develop sites or applications for the Web, this book is an absolute must.',
      },
    },
  ],
}

export const mockBook = {
  kind: 'books#volume',
  id: 'pAmODwAAQBAJ',
  etag: '0Gv8ItwbUAU',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/pAmODwAAQBAJ',
  volumeInfo: {
    title: 'JavaScript Patterns',
    subtitle: 'Build Better Applications with Coding and Design Patterns',
    authors: ['Stoyan Stefanov'],
    publisher: '"O\'Reilly Media, Inc."',
    publishedDate: '2010-09-09',
    description:
      "\u003cp\u003eWhat's the best approach for developing an application with JavaScript? This book helps you answer that question with numerous JavaScript coding patterns and best practices. If you're an experienced developer looking to solve problems related to objects, functions, inheritance, and other language-specific categories, the abstractions and code templates in this guide are ideal—whether you're using JavaScript to write a client-side, server-side, or desktop application.\u003c/p\u003e\u003cp\u003eWritten by JavaScript expert Stoyan Stefanov—Senior Yahoo! Technical and architect of YSlow 2.0, the web page performance optimization tool—\u003ci\u003eJavaScript Patterns\u003c/i\u003e includes practical advice for implementing each pattern discussed, along with several hands-on examples. You'll also learn about anti-patterns: common programming approaches that cause more problems than they solve.\u003c/p\u003e\u003cul\u003e\u003cli\u003eExplore useful habits for writing high-quality JavaScript code, such as avoiding globals, using single var declarations, and more\u003c/li\u003e\u003cli\u003eLearn why literal notation patterns are simpler alternatives to constructor functions\u003c/li\u003e\u003cli\u003eDiscover different ways to define a function in JavaScript\u003c/li\u003e\u003cli\u003eCreate objects that go beyond the basic patterns of using object literals and constructor functions\u003c/li\u003e\u003cli\u003eLearn the options available for code reuse and inheritance in JavaScript\u003c/li\u003e\u003cli\u003eStudy sample JavaScript approaches to common design patterns such as Singleton, Factory, Decorator, and more\u003c/li\u003e\u003cli\u003eExamine patterns that apply specifically to the client-side browser environment\u003c/li\u003e\u003c/ul\u003e",
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '1449397042',
      },
      {
        type: 'ISBN_13',
        identifier: '9781449397043',
      },
    ],
    readingModes: {
      text: false,
      image: true,
    },
    pageCount: 236,
    printedPageCount: 234,
    printType: 'BOOK',
    categories: [
      'Computers / Programming Languages / JavaScript',
      'Computers / Web / Web Programming',
    ],
    averageRating: 4,
    ratingsCount: 1,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/publisher/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73BPG4KKtq9BHCnC804fYJQK0-1W-aCAhwLkcncmIHXOyG85Qc3NfPpY92hO7Iee9J5DrSZFTV_TDCMaOu-yVYiNNHivYDj2FNEdMy959AX86e2m-Ji85zwCh_J_f6L66Gn25dt&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/publisher/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73LVaoVN8R5zd2M9tiP2vs38bOgqVK54yza2FDcafqcBkCjfDolLuiim36qUCXC9xU1kcbaCA0CvgnZar0pCxJ1cB07pIKr4LV8fQuzcpeTV367_I0IZQmreuEqWqPJG9SKaJrl&source=gbs_api',
      small:
        'http://books.google.com/books/publisher/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72HZJgUrTv7oHowdQhN28HgRXAXVhKjxC2eJN47V822EO511v2Y7KvE1GyQXDD9kAULTEFDQ0q4w_-vZO5zOR1XKX6D7iPiMbSsIBEw3lqzibqM_7sD3-Hqw2icN6ifaD_G0jxn&source=gbs_api',
      medium:
        'http://books.google.com/books/publisher/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72Vcfg_f1ReyILqYxYTWE3o2hxnFhhxdEE4Ue4SbyHU6yGuq6gK_PJbqNp4Czs0z00bjTfSmS9DS_BLz3SRWUf8ysn1zgxB5zM67grakAqnffnPw9cMAHckuqjWkUwI867IueLn&source=gbs_api',
      large:
        'http://books.google.com/books/publisher/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71QLNcqeiaM5HcqWvlb99ugmELmwpfHdKjVqm5779ae2kLSyv8i4uwc497qWyK4TMROPd5ukeoAHCVNR4HvgC2VGu1Jalq_IGRLntfm7_3v6PT4mOUM-7AWijbHmM_X9zuOd1Wb&source=gbs_api',
      extraLarge:
        'http://books.google.com/books/publisher/content?id=pAmODwAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE71fWWvcJBsBJg01GEKyCJtpi9HLlPPfQWZnV1Yo_1mXogbOD-acQU9DxCIOnwt5ukADjK_EVOipL0EY66wCB1C51kRXgCZVEoB6Q4PkYNEJrmr1Vfqy3iIbEnv3XKXyYRY5Ug16&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com/books?id=pAmODwAAQBAJ&hl=&source=gbs_api',
    infoLink:
      'https://play.google.com/store/books/details?id=pAmODwAAQBAJ&source=gbs_api',
    canonicalVolumeLink:
      'https://play.google.com/store/books/details?id=pAmODwAAQBAJ',
  },
  saleInfo: {
    country: 'MD',
    saleability: 'NOT_FOR_SALE',
    isEbook: false,
  },
  accessInfo: {
    country: 'MD',
    viewability: 'PARTIAL',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: false,
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink:
      'http://play.google.com/books/reader?id=pAmODwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false,
  },
}
