// your code here
var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  var post = document.getElementsByTagName('textarea')[0].value;
  var p1 = document.createElement('p');
  var userName = document.getElementsByTagName('input')[0].value;
  var p2 = document.createElement('p');
  var text = "Posted by: ";
  
  p1.innerHTML = post;
  p2.innerHTML = text + userName;
  console.log(p2);
  const posts = document.getElementsByClassName("posts")[0];
  posts.appendChild(p1);
  posts.appendChild(p2);
});