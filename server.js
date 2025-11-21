const express = require("express");
const path = require("path");
const app = express();


const FULL_NAME = "STEPHANIE E. LANDICHO"; 
const SECTION = "IT BA 4101";     
const QUOTE = "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston Churchill";


app.use("/img", express.static(path.join(__dirname, "img")));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Portfolio Display</title>

        <style>
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url('/img/bgimg.jpg');
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
          }

          .container {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.65); 
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 4px 25px rgba(0,0,0,0.25);
            backdrop-filter: blur(6px); 
          }

          .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 10px;
            object-fit: cover;
            margin-right: 20px;
            border: 3px solid #444;
          }

          .text-box h1 {
            margin: 0;
            font-size: 30px;
            color: #000;  
          }

          .text-box h2 {
            margin: 5px 0 10px 0;
            font-size: 22px;
            color: #222; 
          }

          .text-box p {
            font-size: 18px;
            max-width: 330px;
            color: #333; 
          }
        </style>
      </head>

      <body>
        <div class="container">
          <img src="/img/id-photo.png" class="profile-img" />

          <div class="text-box">
            <h1>${FULL_NAME}</h1>
            <h2>Section: ${SECTION}</h2>
            <p><em>${QUOTE}</em></p>
          </div>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
