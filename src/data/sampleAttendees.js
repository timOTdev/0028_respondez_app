// (OA technique)
// Structure: Object > Array 
// No array methods to change order of event1, event2
// Good if you just need to render the attendees, order doesn't matter
// {
//   event2: [...],
//   event1: [...]
// }

const sampleAttendees = {
  event9: [
    {
      uid: "timuid",
      name: "Timothy Hoang",
      avatar: "https://avatars0.githubusercontent.com/u/19733413",
      bio: "Web Developer with focus on JavaScript, ES6, and ReactJS!",
      github: "https://github.com/timh1203",
      blog: "timothyhoang.net"
    },
    {
      uid: "brianuid",
      name: "Brian Mendoza",
      avatar: "https://avatars0.githubusercontent.com/u/31445238",
      bio: "Full stack developer in MEAN (MongoDB, Express, Angular, Node.js), Python (Django, Flask), Java (Spring Boot)",
      github: "https://github.com/bcmendoza",
      blog: ""
    }
  ],
  event10: [
    {
      uid: "juanuid",
      name: "Juan Sierra",
      avatar: "https://avatars1.githubusercontent.com/u/8007671",
      bio: "front-end things",
      github: "https://github.com/juan-sierra",
      blog: "",
    },
    {
      uid: "timuid",
      name: "Timothy Hoang",
      avatar: "https://avatars0.githubusercontent.com/u/19733413",
      bio: "Web Developer with focus on JavaScript, ES6, and ReactJS!",
      github: "https://github.com/timh1203",
      blog: "timothyhoang.net"
    },
  ],
  event11: [
    {
      uid: "timuid",
      name: "Timothy Hoang",
      avatar: "https://avatars0.githubusercontent.com/u/19733413",
      bio: "Web Developer with focus on JavaScript, ES6, and ReactJS!",
      github: "https://github.com/timh1203",
      blog: "timothyhoang.net"
    },
    {
      uid: "timuid",
      name: "Timothy Hoang",
      avatar: "https://avatars0.githubusercontent.com/u/19733413",
      bio: "Web Developer with focus on JavaScript, ES6, and ReactJS!",
      github: "https://github.com/timh1203",
      blog: "timothyhoang.net"
    },
    {
      uid: "peteruid",
      name: "Peter CruckShank",
      avatar: "https://avatars3.githubusercontent.com/u/26460352",
      bio:"I have an associates in Information Technology, and I excited to get back into coding! I had to take some time off, but I'm back. I live on Cape Cod in MA.",
      github: "https://github.com/petercr",
      blog: ""
    }
  ]
}

export default sampleAttendees

// {
//   uid: "timuid",
//   name: "Timothy Hoang",
//   avatar: "https://avatars0.githubusercontent.com/u/19733413",
//   bio: "Web Developer with focus on JavaScript, ES6, and ReactJS!",
//   github: "https://github.com/timh1203",
//   blog: "timothyhoang.net"
// },
// {
//   uid: "brianuid",
//   name: "Brian Mendoza",
//   avatar: "https://avatars0.githubusercontent.com/u/31445238",
//   bio: "Full stack developer in MEAN (MongoDB, Express, Angular, Node.js), Python (Django, Flask), Java (Spring Boot)",
//   github: "https://github.com/bcmendoza",
//   blog: ""
// },
// {
//   uid: "juanuid",
//   name: "Juan Sierra",
//   avatar: "https://avatars1.githubusercontent.com/u/8007671",
//   bio: "front-end things",
//   github: "https://github.com/juan-sierra",
//   blog: "",
// },
// {
//   uid: "peteruid",
//   name: "Peter CruckShank",
//   avatar: "https://avatars3.githubusercontent.com/u/26460352",
//   bio:"I have an associates in Information Technology, and I excited to get back into coding! I had to take some time off, but I'm back. I live on Cape Cod in MA.",
//   github: "https://github.com/petercr",
//   blog: ""
// }