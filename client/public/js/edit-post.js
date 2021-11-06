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
picUpload.addEventListener('change', function (event) {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryUploadPreset);

  axios({
    url: cloudinaryURL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData,
  })
    .then(function (res) {
      uploadBox.setAttribute('style', 'display: none;');
      imgPreview.src = res.data.secure_url;
    })
    .catch(function (err) {
      console.error(err);
    });
});

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_content = document.querySelector(
    'textarea[name="post-content"]'
  ).value;
  const price = document.querySelector('textarea[name="post-price"]').value;
  const imgURL = imgPreview.src;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_content,
      price,
      imgURL,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
