async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('textarea[name="post-content"]').value;
  const price = document.querySelector('input[name="post-price"]').value;

 

  const response = await fetch(`/api/posts`,{
    method: 'POST',
    body: JSON.stringify({
      title,
      price,
      post_content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
