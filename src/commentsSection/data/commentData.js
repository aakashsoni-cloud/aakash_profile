const commentData = [
  {
    id: 1,
    name: "John Doe",
    comment: "This is the first comment",
    isMainComment: true,
    replies: [
      {
        id: 2,
        name: "Jane Doe",
        comment: "This is a first reply to the first comment",
        isMainComment: false,
        replies: [],
      },
      {
        id: 3,
        name: "Bob Smith",
        comment: "This is second reply to the first comment",
        isMainComment: false,
        replies: [],
      },
    ],
  },
  {
    id: 4,
    name: "John Doe",
    comment: "This is the second comment",
    isMainComment: true,
    replies: [
      {
        id: 5,
        name: "Jane Doe",
        comment: "This is a first reply to the second comment",
        isMainComment: false,
        replies: [
          {
            id: 7,
            name: "Bob Smith",
            comment: "This is first of first reply to the second comment",
            isMainComment: false,
            replies: [],
          },
        ],
      },
      {
        id: 6,
        name: "Bob Smith",
        comment: "This is second reply to the second comment",
        isMainComment: false,
        replies: [],
      },
    ],
  },
  {
    id: 8,
    name: "Bob Smith",
    comment: "This is the third comment",
    isMainComment: false,
    replies: [],
  },
];

export default commentData;
