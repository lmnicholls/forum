// your code here
var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  // access the textarea box
  var post = document.getElementsByTagName('textarea')[0].value;

  // create a new div to hold the post
  var postDiv = document.createElement('div');

  // create a new p1 to hold the post
  var p1 = document.createElement('p');

  // access the username box
  var userName = document.getElementsByTagName('input')[0].value;

  // create a new p2 to hold the post
  var p2 = document.createElement('p');

  // create delete button
  var delBtn = document.createElement("input");
  delBtn.setAttribute("type", "button");
  delBtn.setAttribute("value", "Delete");
  delBtn.setAttribute("id", "btnDelete");

  // add hr
  var hr = document.createElement("HR");

  // Add innter HTML to p1 and p2
  var text = "Posted by: ";
  p1.innerHTML = post;
  p2.innerHTML = text + userName.bold();
  
  // add posts to div element -- rework this?????
  postDiv.prepend(hr);
  postDiv.prepend(delBtn);
  postDiv.prepend(p2);
  postDiv.prepend(p1);

  // access the div for posts
  const posts = document.getElementsByClassName("posts")[0];

  posts.prepend(postDiv);

  // add a delete button event listener
  delBtn.addEventListener('click', function () {
    this.parentElement.remove();
  }, false);
});

