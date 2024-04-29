const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');
const commentError = document.getElementById('comment-error');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get comment text
  const commentText = document.getElementById('comment').value;

  // Check if comment is empty
  if (commentText.trim() === '') {
    commentError.textContent = "Please enter a comment.";
    return;
  }

  // Simulate adding comment to the page (for demonstration)
  const newComment = document.createElement('div');
  newComment.classList.add('comment'); // Add CSS class for styling (optional)
  newComment.textContent = commentText;

  commentList.appendChild(newComment);

  // Clear comment text area and error message
  document.getElementById('comment').value = '';
  commentError.textContent = '';
});