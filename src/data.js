// hash map object
  const data= {
    columns: ["list-1", "list-2", "list-3", "list-4"],
    lists: {
      "list-1": {
        id: "list-1",
        title: "list 1",
        cards: ["card-1", "card-2", "card-4"],
      },
      "list-2": {
        id: "list-2",
        title: "list 2",
        cards: ["card-3"],
      },
      "list-3": {
        id: "list-3",
        title: "list 3",
        cards: ["card-5"],
      },
      "list-4": {
        id: "list-4",
        title: "list 4",
        cards: [],
      },
    },
    cards: {
      "card-1": {
        id: "card-1",
        title: "card 1",
        description: "",
        member: [
          {
            id: "member-1",
            name: "member 1",
          },
        ],
        status: "NEW",
      },
      "card-2": {
        id: "card-2",
        title: "card 2",
        description: "",
        member: [
          {
            id: "member-1",
            name: "member 1",
          },
        ],
        status: "NEW",
      },
      "card-3":  {
        id: "card-3",
        title: "card 3",
        description: "",
        member: [
          {
            id: "member-1",
            name: "member 1",
          },
        ],
        status: "NEW",
      },
      "card-4":  {
        id: "card-4",
        title: "card 4",
        description: "",
        member: [
          {
            id: "member-2",
            name: "member 2",
          },
        ],
        status: "NEW",
      },
      "card-5":  {
        id: "card-5",
        title: "card 5",
        description: "",
        member: [
          {
            id: "member-2",
            name: "member 2",
          },
        ],
        status: "NEW",
      },
    }
  };

  export default data;