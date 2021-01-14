import jwt from "jsonwebtoken";

const token = jwt.sign({
  hello: "world",
  hi: "hi",
  howAreYou: "i am fine, thank you.",
  whereAreYouGoing: "i am going to my company.",
  thatsNice: "that is right.",
  youLoveMoney: "why not ?",
  IThinkSo: "Ha ha"
}, "23333", {
  expiresIn: "1h"
});
console.log(token);

// setTimeout(() => {
  jwt.verify(token, "23333", { maxAge: "4" }, (err, decoded) => {
    if(err) {
      return console.error(err);
    }
    console.log(decoded);
    
  });
// }, 4000);


