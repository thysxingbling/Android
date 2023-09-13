//const urlBacon = "https://baconipsum.com/api/?type=all-meat";
const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function () {
  $.ajax({
    method: "GET",
    url: urlBacon,
    dataType: "json",
  })
    .done(function (data) {
      console.log(data);
    })
    .fail(function () {
      alert("no good");
    });
})();

//Get all users

var url = "https://jsonplaceholder.typicode.com/todos";
var xhr1 = new XMLHttpRequest();
xhr1.open("GET", url, true);
xhr1.onload = function () {
  var users = JSON.parse(xhr1.responseText);
  if (xhr1.readyState == 4 && xhr1.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr1.send(null);

// // Post a user
var url = "https://my-json-server.typicode.com/typicode/demo/posts";
var data = {};
data.firstname = "John";
data.lastname = "Snow";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function () {
  var users1 = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "201") {
    console.table(users1);
  } else {
    console.error(users1);
  }
};
xhr.send(json);
