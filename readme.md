🔗 URL Shortener
A simple and efficient URL shortener web application built using the MERN stack. It allows users to generate short, shareable links from long URLs and tracks analytics like total click count.

🚀 Features
✂️ Shorten long URLs instantly

🔁 Redirect short URLs to original destinations

📊 Track number of visits to each shortened link

🧠 Smart unique short ID generation using nanoid

💡 Clean and responsive UI for user-friendly experience

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript (or EJS/React – adjust based on your implementation)

Backend: Node.js, Express.js

Database: MongoDB

Other Tools: nanoid, dotenv, mongoose,nodemon

📂 Folder Structure


/server
  /routes
  /controllers
  /models
  /utils
🧑‍💻 How It Works
User enters a long URL in the input box.

A short unique ID is generated and stored in MongoDB.

The shortened URL is shown to the user (e.g., https://yourdomain.com/abc123).

On visiting the short URL, the server redirects to the original link and increments its visit count.

⚙️ Installation
bash
Copy
Edit
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

# Install server dependencies
cd server
npm install


env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongo_uri_here
BASE_URL=http://localhost:4000
▶️ Running Locally
bash
Copy
Edit
# Start backend
cd server
npm run dev
