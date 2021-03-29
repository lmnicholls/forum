// your code here
var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  // access the textarea box
  var post = document.getElementsByTagName('textarea')[0].value;

  // create a new p1 to hold the post
  var p1 = document.createElement('p');

  // access the username box
  var userName = document.getElementsByTagName('input')[0].value;

  // create a new p2 to hold the post
  var p2 = document.createElement('p');

  // add hr
  var hr = document.createElement("HR");

  // Add innter HTML to p1 and p2
  var text = "Posted by: ";
  p1.innerHTML = post;
  p2.innerHTML = text + userName.bold();
  
  // access the div for posts
  const posts = document.getElementsByClassName("posts")[0];

  // add posts to div element
  posts.prepend(hr);
  posts.prepend(p2);
  posts.prepend(p1);
});