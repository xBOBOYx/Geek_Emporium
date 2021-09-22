const cloudinary = require("./config/cloudinary");

cloudinary.uploader.upload("background.jfif", function(err, res) {console.log(res)});