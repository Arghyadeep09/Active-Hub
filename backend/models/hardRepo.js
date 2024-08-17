const mongoose = require("mongoose");

const validTechStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Angular",
  "Vue.js",
  "Django",
  "Flask",
  "Spring",
  "Ruby on Rails",
  "Laravel",
  "SQL",
  "NoSQL",
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  ".NET MAUI",
  "C#",
  "Tailwind",
  "Next.js",
  "MDX",
  "Dockerfile",
  "Shell"
];

const hardRepoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: {
    type: [
      {
        type: String,
        enum: validTechStack,
      },
    ],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["hard"],
    required: true,
  },
});

const hardRepo = mongoose.model("hardRepo", hardRepoSchema);
module.exports = hardRepo;
