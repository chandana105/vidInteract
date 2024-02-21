# MY YOUTUBE

- Requirements and Planning of Application.
- created structure of app (all components) in vscode

- ## HOME PAGE

  - Designed header
  - designed sidebar
  - diesigned video container (containing video cards)
  - youtube fetch api (youtube api key)
  - fetch all the videos
  - collapsing of sidebar (APP slice)
  - setup react router
  - navigating to watch page by clicking on particualar video card
  - making AD card using the concept of HOC

- ## WATCH PAGE

  - Divided page into grid for video playing and suggestions.
  - useSearchParams :- for playing video
  - fetched video details (youtube video api)
  - comments threads api (created and designed comments section)

- ## HOME PAGE :- SEARCH BAR
  well organised/optimised search
  - search is using live youtube suggestions api
  - search is using debouncing
  - search is using caching

- ## WATCH PAGE :- LIVE CHAT
  well organised/optimised LIVE CHAT
  - live chat is using API POOLING
  - data layer of live chat is set using redux
  - using setInterval for api pooling
  - sending dummy chat message

## FEATURES

- ## Home Page

  - Header
    - search bar
  - Sidebar
  - Main Container
    - Filter list
    - video container
      - video cards

- ## Watch Page
  - Header
  - Watch Container
    - video playing
      - video detials
    - comments
      - comments threads
    - suggestions
