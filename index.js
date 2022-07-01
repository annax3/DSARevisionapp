// step 1: catch the form by tag and add event  listener
document.querySelector("form").addEventListener("submit", myDSA);
let queArr = JSON.parse(localStorage.getItem("queDATA")) || [];
// if (localStorage.getItem("queDATA") == null) {
//   queArr = [];
// } else {
//   queArr = JSON.parse(localStorage.getItem("queArr"));
// }
displayTable(queArr);
function myDSA(event) {
  event.preventDefault();

  //step 2: get the value from all the input tags
  let queObj = {
    queTitle: document.querySelector("#title").value,
    queLink: document.querySelector("#link").value,
    queDifficulty: document.querySelector("#difficulty").value,
  };

  queArr.push(queObj); //here we get the data now whats the next step ?
  // console.log(queArr);
  displayTable(queArr); //after get all the data we should append so we make a function for append
  localStorage.setItem("queDATA", JSON.stringify(queArr));
}
function displayTable(queArr) {
  // before store in the local storage we display on the body
  document.querySelector("tbody").innerHTML = ""; // this will empty the body when we click submit
  queArr.forEach(function (elem) {
    let tr = document.createElement("tr"); //create a row
    // and we need four columns ie "td"
    let td1 = document.createElement("td");
    td1.innerHTML = elem.queTitle;
    let td2 = document.createElement("td");
    let link = document.createElement("a");
    link.innerText = elem.queLink;
    link.setAttribute("href", elem.queLink);
    td2.append(link);
    let td3 = document.createElement("td");
    td3.innerHTML = elem.queDifficulty;
    if (elem.queDifficulty == "Medium") {
      tr.style.background = "orange";
    }
    if (elem.queDifficulty == "Easy") {
      tr.style.background = "rgb(24, 191, 105)";
    }
    if (elem.queDifficulty == "Hard") {
      tr.style.background = "#ff6666";
    }
    let td4 = document.createElement("td");
    if (elem.queDifficulty == "Easy") {
      td4.innerText = "NO";
    } else {
      td4.innerText = "Yes";
    }
    tr.append(td1, td2, td3, td4); //all columns append to row
    document.querySelector("tbody").append(tr); // whole row append to body
  });
}
