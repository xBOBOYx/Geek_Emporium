// The upload box that will disappear when image is displayed:
const uploadBox = document.getElementById('upload-box');
// The img element:
const imgPreview = document.getElementById('img-preview');
// The input element:
const picUpload = document.getElementById('file-upload');
// Created posts uploaded image element:
const postImg = document.getElementById('post-img');


const cloudinaryURL = '	https://api.cloudinary.com/v1_1/dx0fgntfp/upload';
const cloudinaryUploadPreset = 'qakcvqzh';

// Credit to YouTube channel Learn with Coffee for client-side upload to cloudinary tutorial.
picUpload.addEventListener('change', function(event) {
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryUploadPreset);

    axios({
        url: cloudinaryURL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res) {
        uploadBox.setAttribute("style", "display: none;")
        imgPreview.src = res.data.secure_url;
    }).catch(function(err) {
        console.error(err);
    });
});

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('textarea[name="post-content"]').value;
  const price = document.querySelector('input[name="post-price"]').value;
  const imgURL = imgPreview.src;

  const response = await fetch(`/api/posts`,{
    method: 'POST',
    body: JSON.stringify({
      title,
      price,
      post_content,
      imgURL,
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
