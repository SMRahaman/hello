const user = {
  id: 1,
  name: "maruf",
  phone: "01739192578",
};
const stringified = JSON.stringify(user);
const userObj = JSON.parse(stringified);
// console.log(user);
console.log(stringified);
console.log(userObj);
console.log(typeof stringified);
console.log(typeof userObj);
