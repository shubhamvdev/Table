let students = [
  {
    name: "Ratnesh Dubey",
    hindi: 20,
    english: 30,
    c: 22,
    focs: 15,
    ds: 35,
  },
  {
    name: "Aryan Meena",
    hindi: 70,
    english: 35,
    c: 22,
    focs: 15,
    ds: 35,
  },
  {
    name: "Shubham Vishwakarma",
    hindi: 20,
    english: 45,
    c: 22,
    focs: 15,
    ds: 35,
  },
  {
    name: "Mansi Bhati",
    hindi: 30,
    english: 55,
    c: 22,
    focs: 15,
    ds: 35,
  },
  {
    name: "Akansha Parmar",
    hindi: 50,
    english: 25,
    c: 22,
    focs: 15,
    ds: 35,
  },
  {
    name: "Anmol Rajput",
    hindi: 60,
    english: 25,
    c: 22,
    focs: 15,
    ds: 35,
  },
];

(function display() {
  let tabledata = "";
  // const total = {
  //   hindi: [],
  //   english: [],
  //   c: [],
  //   focs: [],
  //   ds: [],
  // };
  const total = {
    hindi: 0,
    english: 0,
    c: 0,
    focs: 0,
    ds: 0,
  };
  students.forEach(function (stu, index) {
    let currentrow = `<tr>
    <td>${index + 1}</td>
    <td>${index + 2001}</td>
    <td>${stu.name}</td>
    <td>${stu.hindi}</td>
    <td>${stu.english}</td>
    <td>${stu.c}</td>
    <td>${stu.focs}</td>
    <td>${stu.ds}</td>
    </tr>`;

    // total.hindi.push(stu.hindi);
    // total.english.push(stu.english);
    // total.c.push(stu.c);
    // total.focs.push(stu.focs);
    // total.ds.push(stu.ds);
    total.hindi += stu.hindi;
    total.english += stu.english;
    total.c += stu.c;
    total.focs += stu.focs;
    total.ds += stu.ds;

    tabledata += currentrow;
  });
  console.log(total);
  // <td>${totaler(total.hindi)}</td>
  // <td>${totaler(total.english)}</td>
  // <td>${totaler(total.c)}</td>
  // <td>${totaler(total.focs)}</td>
  // <td>${totaler(total.ds)}</td>
  // <td>${percentage(total.hindi)}</td>
  // <td>${percentage(total.english)}</td>
  // <td>${percentage(total.c)}</td>
  // <td>${percentage(total.focs)}</td>
  // <td>${percentage(total.ds)}</td>
  // TOTAL 
  tabledata += `<tr id="total">
  <td colspan="3"><strong><center>Total</center></strong></td>
  <td>${total.hindi}</td>
  <td>${total.english}</td>
  <td>${total.c}</td>
  <td>${total.focs}</td>
  <td>${total.ds}</td>
  </tr>`;
  // PERCENTAGE
  tabledata += `<tr id="percentage"> 
  <td colspan="3"><strong><center>Percentage</center></strong></td>
  <td>${(total.hindi / 6).toFixed(2)}%</td>
  <td>${(total.english / 6).toFixed(2)}%</td>
  <td>${(total.c / 6).toFixed(2)}%</td>
  <td>${(total.focs / 6).toFixed(2)}%</td>
  <td>${(total.ds / 6).toFixed(2)}%</td>
  </tr>`;
  document.getElementById("tdata").innerHTML = tabledata;
  document.getElementById("total").style.visibility = "hidden";
  document.getElementById("percentage").style.visibility = "hidden";
  // document.getElementById("total").style.display = "none";
  // document.getElementById("percentage").style.display = "none";
})();

// function totaler(numbers) {
//   return numbers.reduce(
//     (previousValue, currentValue) => previousValue + currentValue
//   );
// }

// function percentage(numbers) {
//   return (
//     (
//       numbers.reduce(
//         (previousValue, currentValue) => previousValue + currentValue
//       ) / 6
//     )
//       .toFixed(2)
//       .toString() + "%"
//   );
// }

function per() {
  document.getElementById("percentage").style.visibility = "visible";
  // document.getElementById("percentage").style.display = "block";
}

function sum() {
  // document.getElementById("total").style.display = "block";
  document.getElementById("total").style.visibility = "visible";
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;

  let newdata = students.filter(function (stu) {
    return stu.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  display(newdata);
}
