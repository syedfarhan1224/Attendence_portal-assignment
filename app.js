// var userData = [
//   {
//     name: "John Doe",
//     fatherName: "Richard Doe",
//     age: 16,
//     rollNo: "101",
//     class: "10th Grade",
//   },
//   {
//     name: "Jane Smith",
//     fatherName: "Robert Smith",
//     age: 15,
//     rollNo: "102",
//     class: "9th Grade",
//   },
//   {
//     name: "Michael Johnson",
//     fatherName: "James Johnson",
//     age: 17,
//     rollNo: "103",
//     class: "11th Grade",
//   },
//   {
//     name: "Emily Davis",
//     fatherName: "William Davis",
//     age: 14,
//     rollNo: "104",
//     class: "8th Grade",
//   },
//   {
//     name: "Jessica Brown",
//     fatherName: "Charles Brown",
//     age: 16,
//     rollNo: "105",
//     class: "10th Grade",
//   },
//   {
//     name: "Daniel Wilson",
//     fatherName: "Thomas Wilson",
//     age: 15,
//     rollNo: "106",
//     class: "9th Grade",
//   },
//   {
//     name: "Sarah Taylor",
//     fatherName: "Andrew Taylor",
//     age: 17,
//     rollNo: "107",
//     class: "11th Grade",
//   },
//   {
//     name: "David Lee",
//     fatherName: "George Lee",
//     age: 14,
//     rollNo: "108",
//     class: "8th Grade",
//   },
//   {
//     name: "Laura Martin",
//     fatherName: "Paul Martin",
//     age: 16,
//     rollNo: "109",
//     class: "10th Grade",
//   },
//   {
//     name: "Kevin White",
//     fatherName: "Mark White",
//     age: 15,
//     rollNo: "110",
//     class: "9th Grade",
//   },
//   {
//     name: "Anna Harris",
//     fatherName: "Steven Harris",
//     age: 17,
//     rollNo: "111",
//     class: "11th Grade",
//   },
//   {
//     name: "Brian Clark",
//     fatherName: "Edward Clark",
//     age: 14,
//     rollNo: "112",
//     class: "8th Grade",
//   },
//   {
//     name: "Sophia Lewis",
//     fatherName: "Henry Lewis",
//     age: 16,
//     rollNo: "113",
//     class: "10th Grade",
//   },
//   {
//     name: "Christopher Walker",
//     fatherName: "Frank Walker",
//     age: 15,
//     rollNo: "114",
//     class: "9th Grade",
//   },
//   {
//     name: "Grace Hall",
//     fatherName: "Peter Hall",
//     age: 17,
//     rollNo: "115",
//     class: "11th Grade",
//   },
//   {
//     name: "Justin Allen",
//     fatherName: "Patrick Allen",
//     age: 14,
//     rollNo: "116",
//     class: "8th Grade",
//   },
//   {
//     name: "Olivia Young",
//     fatherName: "Bruce Young",
//     age: 16,
//     rollNo: "117",
//     class: "10th Grade",
//   },
//   {
//     name: "Nathan Hernandez",
//     fatherName: "Larry Hernandez",
//     age: 15,
//     rollNo: "118",
//     class: "9th Grade",
//   },
//   {
//     name: "Mia King",
//     fatherName: "Joe King",
//     age: 17,
//     rollNo: "119",
//     class: "11th Grade",
//   },
//   {
//     name: "Ethan Wright",
//     fatherName: "Stanley Wright",
//     age: 14,
//     rollNo: "120",
//     class: "8th Grade",
//   },
//   {
//     name: "Ava Lopez",
//     fatherName: "Timothy Lopez",
//     age: 16,
//     rollNo: "121",
//     class: "10th Grade",
//   },
//   {
//     name: "Jacob Scott",
//     fatherName: "Chris Scott",
//     age: 15,
//     rollNo: "122",
//     class: "9th Grade",
//   },
//   {
//     name: "Samantha Green",
//     fatherName: "Shawn Green",
//     age: 17,
//     rollNo: "123",
//     class: "11th Grade",
//   },
//   {
//     name: "Andrew Adams",
//     fatherName: "Jason Adams",
//     age: 14,
//     rollNo: "124",
//     class: "8th Grade",
//   },
//   {
//     name: "Ella Baker",
//     fatherName: "Ryan Baker",
//     age: 16,
//     rollNo: "125",
//     class: "10th Grade",
//   },
// ];

// var userTable = document.getElementById("userTable");
// var userName = document.getElementById("name");
// var fatherName = document.getElementById("fatherName");
// var rollno = document.getElementById("rollno");
// var age = document.getElementById("age");
// var Pd = document.getElementById("present");
// var Ad = document.getElementById("absent");
// var Ld = document.getElementById("leave");

// function addData() {
//   userTable.innerHTML = "";
//   for (var i = 0; i < userData.length; i++) {
//     userTable.innerHTML += `
//     <tr>
//       <td>${i + 1 < 10 ? "0" + (i + 1) : i + 1}</td>
//       <td>${userData[i].name}</td>
//       <td>${userData[i].fatherName}</td>
//       <td>${userData[i].rollNo}</td>
//       <td>${userData[i].age}</td>
//       <td onclick="likeUser(this)"><i class="fa-regular fa-heart"></i></td>
//       <td><input type="radio" name="status${i}" value="present" onclick="updateStatus(${i}, 'present')"></td>
//       <td><input type="radio" name="status${i}" value="absent" onclick="updateStatus(${i}, 'absent')"></td>
//       <td><input type="radio" name="status${i}" value="leave" onclick="updateStatus(${i}, 'leave')"></td>
//     </tr>`;
//   }
// }
// addData();

// function updateStatus(index, status) {
//   // Update the userData array
//   if (status === 'present') {
//     userData[index].present++;
//     userData[index].absent = 0; // Reset absent and leave days
//     userData[index].leave = 0;
//   } else if (status === 'absent') {
//     userData[index].absent++;
//     userData[index].present = 0; // Reset present and leave days
//     userData[index].leave = 0;
//   } else if (status === 'leave') {
//     userData[index].leave++;
//     userData[index].present = 0; // Reset present and absent days
//     userData[index].absent = 0;
//   }

//   // Update the table cell directly
//   document.getElementById(`present${index}`).textContent = userData[index].present;
//   document.getElementById(`absent${index}`).textContent = userData[index].absent;
//   document.getElementById(`leave${index}`).textContent = userData[index].leave;

//   // Update the radio buttons
//   var radios = userTable.rows[index + 1].querySelectorAll('input[type="radio"]');
//   radios.forEach(function(radio) {
//     radio.checked = (radio.value === status);
//   });
// }

// function addUser() {
//   var obj = {
//     name: userName.value,
//     fatherName: fatherName.value,
//     rollNo: rollno.value,
//     age: age.value,
//   };

//   userData.push(obj);
//   addData();
// }

// function likeUser(element) {
//   if (element.firstElementChild.className === "fa-regular fa-heart") {
//     element.innerHTML = '<i class="fa-solid fa-heart"></i>';
//   } else {
//     element.innerHTML = '<i class="fa-regular fa-heart"></i>';
//   }
// }
// part 2
// var userData = [
//   {
//     name: "John Doe",
//     fatherName: "Richard Doe",
//     age: 16,
//     rollNo: "101",
//     present: 0,
//     absent: 0,
//     leave: 0,
//   },
//   {
//     name: "Jane Smith",
//     fatherName: "Robert Smith",
//     age: 15,
//     rollNo: "102",
//     present: 0,
//     absent: 0,
//     leave: 0,
//   },
//   // Add more initial user data if needed
// ];

// var userTable = document.getElementById("userTable");
// var userName = document.getElementById("name");
// var fatherName = document.getElementById("fatherName");
// var rollno = document.getElementById("rollno");
// var age = document.getElementById("age");
// var presentCount = document.getElementById("present");
// var absentCount = document.getElementById("absent");
// var leaveCount = document.getElementById("leave");

// function addData() {
//   userTable.innerHTML = "";
//   for (var i = 0; i < userData.length; i++) {
//     userTable.innerHTML += `
//     <tr>
//       <td>${i + 1 < 10 ? "0" + (i + 1) : i + 1}</td>
//       <td>${userData[i].name}</td>
//       <td>${userData[i].fatherName}</td>
//       <td>${userData[i].rollNo}</td>
//       <td>${userData[i].age}</td>
//       <td onclick="likeUser(this)"><i class="fa-regular fa-heart"></i></td>
//       <td><input type="radio" name="status${i}" value="present" onclick="updateStatus(${i}, 'present')"></td>
//       <td><input type="radio" name="status${i}" value="absent" onclick="updateStatus(${i}, 'absent')"></td>
//       <td><input type="radio" name="status${i}" value="leave" onclick="updateStatus(${i}, 'leave')"></td>
//     </tr>`;
//   }
//   updateTotalCounts();
// }
// addData();

// function updateStatus(index, status) {
//   if (status === "present") {
//     userData[index].present++;
//   } else if (status === "absent") {
//     userData[index].absent++;
//   } else if (status === "leave") {
//     userData[index].leave++;
//   }
//   updateTotalCounts();
// }

// function updateTotalCounts() {
//   var presentDays = userData.reduce((sum, user) => sum + user.present, 0);
//   var absentDays = userData.reduce((sum, user) => sum + user.absent, 0);
//   var leaveDays = userData.reduce((sum, user) => sum + user.leave, 0);
//   presentCount.textContent = `Present days: ${presentDays}`;
//   absentCount.textContent = `Absent days: ${absentDays}`;
//   leaveCount.textContent = `Leave days: ${leaveDays}`;
// }

// function addUser() {
//   var obj = {
//     name: userName.value,
//     fatherName: fatherName.value,
//     rollNo: rollno.value,
//     age: age.value,
//     present: 0,
//     absent: 0,
//     leave: 0,
//   };
//   userData.push(obj);
//   addData();
// }

// function likeUser(element) {
//   if (element.firstElementChild.className === "fa-regular fa-heart") {
//     element.innerHTML = '<i class="fa-solid fa-heart"></i>';
//   } else {
//     element.innerHTML = '<i class="fa-regular fa-heart"></i>';
//   }
// }

var userData = [
  {
    name: "John Doe",
    fatherName: "Richard Doe",
    age: 16,
    rollNo: "101",
    class: "10th Grade",
  },
  {
    name: "Jane Smith",
    fatherName: "Robert Smith",
    age: 15,
    rollNo: "102",
    class: "9th Grade",
  },
  {
    name: "Michael Johnson",
    fatherName: "James Johnson",
    age: 17,
    rollNo: "103",
    class: "11th Grade",
  },
  {
    name: "Emily Davis",
    fatherName: "William Davis",
    age: 14,
    rollNo: "104",
    class: "8th Grade",
  },
  {
    name: "Jessica Brown",
    fatherName: "Charles Brown",
    age: 16,
    rollNo: "105",
    class: "10th Grade",
  },
  {
    name: "Daniel Wilson",
    fatherName: "Thomas Wilson",
    age: 15,
    rollNo: "106",
    class: "9th Grade",
  },
  {
    name: "Sarah Taylor",
    fatherName: "Andrew Taylor",
    age: 17,
    rollNo: "107",
    class: "11th Grade",
  },
  {
    name: "David Lee",
    fatherName: "George Lee",
    age: 14,
    rollNo: "108",
    class: "8th Grade",
  },
  {
    name: "Laura Martin",
    fatherName: "Paul Martin",
    age: 16,
    rollNo: "109",
    class: "10th Grade",
  },
  {
    name: "Kevin White",
    fatherName: "Mark White",
    age: 15,
    rollNo: "110",
    class: "9th Grade",
  },
  {
    name: "Anna Harris",
    fatherName: "Steven Harris",
    age: 17,
    rollNo: "111",
    class: "11th Grade",
  },
  {
    name: "Brian Clark",
    fatherName: "Edward Clark",
    age: 14,
    rollNo: "112",
    class: "8th Grade",
  },
  {
    name: "Sophia Lewis",
    fatherName: "Henry Lewis",
    age: 16,
    rollNo: "113",
    class: "10th Grade",
  },
  {
    name: "Christopher Walker",
    fatherName: "Frank Walker",
    age: 15,
    rollNo: "114",
    class: "9th Grade",
  },
  {
    name: "Grace Hall",
    fatherName: "Peter Hall",
    age: 17,
    rollNo: "115",
    class: "11th Grade",
  },
  {
    name: "Justin Allen",
    fatherName: "Patrick Allen",
    age: 14,
    rollNo: "116",
    class: "8th Grade",
  },
  {
    name: "Olivia Young",
    fatherName: "Bruce Young",
    age: 16,
    rollNo: "117",
    class: "10th Grade",
  },
  {
    name: "Nathan Hernandez",
    fatherName: "Larry Hernandez",
    age: 15,
    rollNo: "118",
    class: "9th Grade",
  },
  {
    name: "Mia King",
    fatherName: "Joe King",
    age: 17,
    rollNo: "119",
    class: "11th Grade",
  },
  {
    name: "Ethan Wright",
    fatherName: "Stanley Wright",
    age: 14,
    rollNo: "120",
    class: "8th Grade",
  },
  {
    name: "Ava Lopez",
    fatherName: "Timothy Lopez",
    age: 16,
    rollNo: "121",
    class: "10th Grade",
  },
  {
    name: "Jacob Scott",
    fatherName: "Chris Scott",
    age: 15,
    rollNo: "122",
    class: "9th Grade",
  },
  {
    name: "Samantha Green",
    fatherName: "Shawn Green",
    age: 17,
    rollNo: "123",
    class: "11th Grade",
  },
  {
    name: "Andrew Adams",
    fatherName: "Jason Adams",
    age: 14,
    rollNo: "124",
    class: "8th Grade",
  },
  {
    name: "Ella Baker",
    fatherName: "Ryan Baker",
    age: 16,
    rollNo: "125",
    class: "10th Grade",
  },
];
var userTable = document.getElementById("userTable");
var userName = document.getElementById("name");
var fatherName = document.getElementById("fatherName");
var rollno = document.getElementById("rollno");
var age = document.getElementById("age");
var presentCount = document.getElementById("present");
var absentCount = document.getElementById("absent");
var leaveCount = document.getElementById("leave");

function addData() {
  userTable.innerHTML = "";
  for (var i = 0; i < userData.length; i++) {
    userTable.innerHTML += `
        <tr>
            <td>${i + 1 < 10 ? "0" + (i + 1) : i + 1}</td>
            <td>${userData[i].name}</td>
            <td>${userData[i].fatherName}</td>
            <td>${userData[i].rollNo}</td>
            <td>${userData[i].age}</td>
            <td onclick="likeUser(this)"><i class="fa-regular fa-heart"></i></td>
            <td><input type="radio" name="status${i}" value="present" onclick="updateStatus(${i}, 'present')" ${
      userData[i].status === "present" ? "checked" : ""
    }></td>
            <td><input type="radio" name="status${i}" value="absent" onclick="updateStatus(${i}, 'absent')" ${
      userData[i].status === "absent" ? "checked" : ""
    }></td>
            <td><input type="radio" name="status${i}" value="leave" onclick="updateStatus(${i}, 'leave')" ${
      userData[i].status === "leave" ? "checked" : ""
    }></td>
        </tr>`;
  }
  updateTotalCounts();
}
addData();

function updateStatus(index, newStatus) {
  const prevStatus = userData[index].status;
  userData[index].status = newStatus;

  if (prevStatus === "present") {
    presentCount.textContent = `Present days: ${
      parseInt(presentCount.textContent.split(": ")[1]) - 1
    }`;
  } else if (prevStatus === "absent") {
    absentCount.textContent = `Absent days: ${
      parseInt(absentCount.textContent.split(": ")[1]) - 1
    }`;
  } else if (prevStatus === "leave") {
    leaveCount.textContent = `Leave days: ${
      parseInt(leaveCount.textContent.split(": ")[1]) - 1
    }`;
  }

  if (newStatus === "present") {
    presentCount.textContent = `Present days: ${
      parseInt(presentCount.textContent.split(": ")[1]) + 1
    }`;
  } else if (newStatus === "absent") {
    absentCount.textContent = `Absent days: ${
      parseInt(absentCount.textContent.split(": ")[1]) + 1
    }`;
  } else if (newStatus === "leave") {
    leaveCount.textContent = `Leave days: ${
      parseInt(leaveCount.textContent.split(": ")[1]) + 1
    }`;
  }
}

function addUser() {
  // Validate inputs
  if (!userName.value || !fatherName.value || !rollno.value || !age.value) {
    alert("Please fill in all fields.");
    return;
  }

  var obj = {
    name: userName.value,
    fatherName: fatherName.value,
    rollNo: rollno.value,
    age: age.value,
    status: "",
  };
  userData.push(obj);
  addData();
  clearInputs();
}

function clearInputs() {
  userName.value = "";
  fatherName.value = "";
  rollno.value = "";
  age.value = "";
}

function likeUser(element) {
  if (element.firstElementChild.className === "fa-regular fa-heart") {
    element.innerHTML = '<i class="fa-solid fa-heart"></i>';
  } else {
    element.innerHTML = '<i class="fa-regular fa-heart"></i>';
  }
}

function updateTotalCounts() {
  var presentDays = userData.filter((user) => user.status === "present").length;
  var absentDays = userData.filter((user) => user.status === "absent").length;
  var leaveDays = userData.filter((user) => user.status === "leave").length;

  presentCount.textContent = `Present days: ${presentDays}`;
  absentCount.textContent = `Absent days: ${absentDays}`;
  leaveCount.textContent = `Leave days: ${leaveDays}`;
}
