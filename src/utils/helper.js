const names = [
  "Mohsin",
  "Akshay",
  "Rahul",
  "Aman",
  "Priya",
  "Sara",
  "Ali",
  "John",
];

const messages = [
  "Hello everyone 👋",
  "This is a random comment",
  "React recursion is awesome!",
  "Learning NestJS microservices 🚀",
  "Nice video bro!",
  "Can someone explain this?",
  "Great content 🔥",
  "I love coding ❤️",
];

export const getRandomComment = () => {
  const randomName = names[Math.floor(Math.random() * names.length)];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return {
    name: randomName,
    message: randomMessage,
  };
};
