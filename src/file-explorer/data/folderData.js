const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "index.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.jsx",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "index.jsx",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "index.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
