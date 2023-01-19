/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  let developers = arr.map((item)=> {
    if (item.profession === "developer") {
      return item;
    }
  });
  console.log(developers);
}
 
function PrintDeveloperbyForEach() {
  arr.forEach( (person)=> {
          if (person.profession === "developer") {
            console.log(person.name);
          }
        });
      }

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
arr = arr.filter(item => item.profession !== "admin")
console.log(arr);
}

function concatenateArray() {
  let newArr = [{ id: 9, name: "Priyanka", age: "28", profession: "coder" }];
  arr = arr.concat(newArr);
  console.log(arr);
}


