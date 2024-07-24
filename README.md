# VidInteract - Video Platform for Seamless Interaction

VidInteract is a comprehensive video platform featuring video listings, real-time chat, nested comments, and powerful search functionality, inspired by YouTube. Built with Reactjs, Redux Toolkit, and TailwindCSS.

- Live demo: [VidInteract](https://vidinteract.netlify.app/)

# Tech Stack

- Reactjs: JavaScript library for building user interfaces.
- Redux Toolkit: State management library for handling application state.
- React Router DOM: Declarative routing for React applications.
- TailwindCSS: Utility-first CSS framework for rapid UI development.
- React Icons: Library of popular icons for React applications.

## Features

#### Video List Page / Home Page

- Rendering list of videos using YouTube Video API.
- Showing the concept of Higher Order Component (HOC) by making Advertisement Card.
- SearchBar: A well-organized and optimized search that shows suggestions using YouTube search suggestions API.
  - #### Live Search using YouTube Suggestions API:
    As users type in the search bar, real-time suggestions are fetched from the YouTube search suggestions API to provide relevant options.
  - #### Search with Debouncing:
    Debouncing is implemented to reduce the number of API calls by waiting for a short period (e.g., 200ms) before making a request, ensuring that rapid keystrokes do not trigger excessive API calls.
  - #### Caching Search Results:
    Search results are cached using Redux. If a user searches for the same term again, the results are retrieved from the cache, speeding up the response and reducing server load.
  - #### Performance-Efficient Search Implementation:
    By combining debouncing and caching, the search functionality is optimized for performance, providing a smooth and responsive user experience.
- Collapsing Sidebar.

#### Watch Page

- Playing the video selected on home page by fetching videos details from the query params by using useSearchParams and showing the video details.

- Live Chat Feature (using mock data) :
  - #### Real-Time Interaction:
    The live chat feature allows users to interact in real-time by sending dummy chat messages.
  - #### API Polling:
    The chat system uses API polling to fetch new messages at regular intervals, ensuring the chat is updated without overloading the server.
  - #### Efficient Data Management:
    - Data Layer: The chat data is managed with Redux, ensuring efficient state management and a responsive UI.
    - Use of setInterval: The chat system employs setInterval to poll the server for new messages every few seconds, appending new messages to the chat log.
    - Optimized Performance: To prevent UI freezes, the chat log maintains a fixed length by splicing old messages and appending new ones, ensuring smooth performance even during heavy usage.
- #### Comments Section :
  - Nested Comments: The comments section supports multi-level nested comments, allowing users to reply to replies, creating a tree structure.
  - Mock Data: The comments are generated using mock data, with replies stored as arrays of comments.
  - Recursion: The comments list is rendered recursively. Each comment can have a list of replies, which are also comments, leading to a nested, pyramid-like structure.
  - UI and Data Structure: This feature combines UI design with data structure concepts, showcasing recursion for rendering comments and their replies.


# Screenshots
<img width="490" alt="Screenshot 2024-07-07 at 7 13 50 PM" src="https://github.com/chandana105/my-youtube/assets/39641650/6648bd6b-714c-4c1f-b3f3-b4cef6717d81">  &nbsp; 
<img width="490" alt="Screenshot 2024-07-07 at 7 14 04 PM" src="https://github.com/chandana105/my-youtube/assets/39641650/4b24ace2-50dc-42ca-8be0-6a1875d33fdc">  &nbsp;
<img width="490" alt="Screenshot 2024-07-07 at 7 14 32 PM" src="https://github.com/chandana105/my-youtube/assets/39641650/1452ba24-3ef5-454d-a12c-120272e473d8">  &nbsp;
<img width="490" alt="Screenshot 2024-07-07 at 7 14 46 PM" src="https://github.com/chandana105/my-youtube/assets/39641650/3135a516-a0d1-402b-b7dd-771dfee2f6c5">  &nbsp; 


