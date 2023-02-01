const joe: { name: string; age: number } = {
  name: "Yousef",
  age: 30,
};

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

type User = {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string];
  role: Role;
};
const person: User = {
  name: "Yousef",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) console.log("Is Admin: ", person.role);
