// The box you want to not display so the image can display:
const uploadBox = document.getElementById('upload-box');
// The submit button to be disabled and re-enabled:
const submitButton = document.getElementById('submit-button');
// The img element:
const imgPreview = document.getElementById('img-preview');
// The input element:
const picUpload = document.getElementById('file-upload');
// let uploadedImg = ''

picUpload.addEventListener('change', function(event) {
  // Disable submit button until picture is uploaded and html is returned.
  submitButton.disabled = true;
  var reader = new FileReader();
  reader.onload = function (e) {
    imgPreview.setAttribute('src', e.target.result)
    const uploadedImg = e.target.result;
  };
  reader.readAsDataURL(event.target.files[0])
});


async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('textarea[name="post-content"]').value;
  
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);