Doom: Spotify Mood Detector
Project Overview
Doom: Spotify Mood Detector is a web application that provides dynamic song search, playback, and recommendations based on the user's mood. The project integrates Spotify API for music search and playback and Echo Nest API for analyzing song moods. The recommendation algorithm utilizes Python and Node.js to provide personalized song recommendations.

Features
Search and Playback: Users can search for songs and play them directly from the app using the Spotify API.
Mood-Based Recommendations: Songs are recommended based on mood analysis using the Echo Nest API.
User-Friendly Interface: The front-end is built with HTML, CSS, and TypeScript, providing a simple, clean interface.
Backend with Node.js: Handles API requests and serves data to the front-end.
Recommendation Algorithm: The recommendation logic is implemented in Python and integrated into the Node.js backend.
Tech Stack
Frontend: HTML, CSS, TypeScript
Backend: Node.js, Express, Python
APIs: Spotify API, Echo Nest API
Database: MongoDB (for storing user preferences)
Version Control: Git
Project Structure
bash
Copy code
doom-spotify-mood-detector/
│
├── public/              # Static assets (images, icons, etc.)
├── src/                 # Frontend source files
│   ├── app.ts           # Main TypeScript app logic
│   ├── index.html       # Main HTML file
│   ├── styles.css       # Application styles
│
├── server.js            # Node.js server
├── recommendation.py    # Python file for song mood analysis and recommendation
├── manifest.json        # Chrome Extension manifest
├── package.json         # Project dependencies
├── README.md            # Documentation
How to Run
Clone the repository:

bash
Copy code
git clone https://github.com/username/doom-spotify-mood-detector.git
cd doom-spotify-mood-detector
Install Dependencies:

Install Node.js dependencies:
bash
Copy code
npm install
Install Python dependencies (Echo Nest API):
bash
Copy code
pip install echonest
Set up API keys:

Create a .env file in the root directory and add the following:
env
Copy code
SPOTIFY_API_KEY=your_spotify_api_key
ECHO_NEST_API_KEY=your_echo_nest_api_key
Run the Application:

Start the backend server:
bash
Copy code
node server.js
Open index.html in your browser or use live server.
Future Enhancements
Enhance the recommendation algorithm by incorporating more mood factors and user history.
Improve the UI/UX with animations and better song list display.
Add more detailed logging and analytics for song searches and recommendations.
