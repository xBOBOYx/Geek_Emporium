// The box you want to not display so the image can display:
const uploadBox = document.getElementById('upload-box');
// The submit button to be disabled and re-enabled:
const submitButton = document.getElementById('submit-button');
// The img element:
const imgPreview = document.getElementById('img-preview');
// The input element:
const picUpload = document.getElementById('file-upload');



// Include cloudinary in .env variables, use that way? May need to JAWSDB to use w/heroku?
const cloudinaryURL = '	https://api.cloudinary.com/v1_1/dx0fgntfp/upload';
const cloudinaryUploadPreset = 'qakcvqzh';

// Change to jquery to differentiate?
// img tag currently doesn't exist
// const imgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event) {
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryUploadPreset);

    // Can you do this with not axios to differentiate?
    axios({
        url: cloudinaryURL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res) {
        uploadBox.setAttribute("style", "display: none;")
        imgPreview.setAttribute("style", "height: 20vh;")
        imgPreview.src = res.data.secure_url;
        console.log(res.data.secure_url);
    }).catch(function(err) {
        console.error(err);
    });
});

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
