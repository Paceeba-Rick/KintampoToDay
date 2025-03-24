let likeCount = 0;
let dislike = 0;

function changeTheme(){
    let changeTheme = document.getElementById('themer');
changeTheme.style.backgroundColor ="rgb(45, 211, 233)";
}
function likePost() {
  likeCount++;
  document.getElementById('like-count').textContent = likeCount;
}

function dislikePost() {
  dislike++;
  document.getElementById('dislike-count').textContent = dislike;
}

function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentList = document.getElementById('comment-list');
  const newComment = document.createElement('li');
  newComment.textContent = commentInput.value;
  commentList.appendChild(newComment);
  commentInput.value = '';
}

document.getElementById('book-order-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for your order! We will contact you shortly.');
});