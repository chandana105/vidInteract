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

TODO: TO include those thiongs omy whoch are fxnyionl - tech stack - reactjs - redux toolkit - react router dom - tailwind css - bundler ?

- features
  - header
  - sidebar collapseses
  - search bar
  - usericon (reomce)
  - filters list
  - body :- youutbe videsl ist
  - clicking on videos :- opens new page (reactoruter dom /watch)
  - /watch :- same header , video playing, live commnets / sufggesion , commnets
  - youutbe video api
  - react router dom , outlet
  - shown video ist and then on watch page onyl video player
  - vieo playing ( useSearchparmas se vidoe ki id then vieo in i frame put and rendered ,)
  - sdiebar collapsed on watch page
  - serch fucntionalty :- caching of api calls , if write fast (DEBOUNCING concept :- typing very fast : - skips some of the events )
    PERFORMANCE
  - as if 14 letters \* (1000 peopple hitting api at one time ) = 14000
  - else ytyping veryfast : -3 api calls 3 \* 1000 = 3000 with debouncing
  - it makes a huge diff
  - why showing suggestion ;- to give a good user exp
  - so that menas debouncign wtih 200ms :- if diff btw two key strokes is <200 ms> :- declien the api call
  - > 200ms show the results in search api (time in api is less con sole)
  - youtube search suggestions api
  - debouncign expaed
  - suggesion ui
  - caching in search results :- if search of india alrteady done , it not making api call : using redux for it (when i am searcihng i ll make my cache insdie redux )
  - when searcihn for iphoen :- it ll stroe the api sugggestion resutls int oredux store :- and then searcihgn for same keyword :- it shoudl nto make api call for ip
  - caching here perfdormance friendly :- as if u refresh the page :- it refreshes the store (so not to worry , performance good )
  - we ll not bloat our state :- as in one session how much suer can search 1, 10 etc if lajhs then oroblenm ( so for that hee we have used LRU cache :- least recent used) if cace memeory is 100 limit, if it increaes , start removign cache form top aas obj length inc by 100 , start removng by top
    (NOT DEVELOPED HERE , DONT INCLUEDE)
  - comments section :- n level nested comments, youtbe has 2 level deep (reddit eg) becoems pyramid dome , like tree structre (ui lanugage , lil bit of data strucrre aas well as recursion )
  - created mock data for this (repliesisa narrayof same comment ), have to loop in to createm roe cokmments , recursion , in commnts list , below a commnet its replies should be seen ( and repliesare just array of commnets , recursion fxn callling itslef agai nanf agian) :rpelies :- is commnetsl it
  - SEARCH PART REMAINING
  - live chat :0 is also infitne scroll :- its much more powerful than that (u scroll and after some time more bvideos load ie infinte scroll)
  live streaming :- sth is live , we needto fetch data agian and angian  :
  2 ays to handle it 
  challenges : get datal ive (data lyaer),(ui layer) update the ui in efficent way ( so that page doenst freezes )
  - 2 ways to do it :- we ll use e API pooloing (ui is pooliong data after certain interval for eg :- after 10 sec etc , its one directional, to check data whether it has come or not :- its to ppoll data ) (as here we dont nened instant reaction like in web sockets )
  useffect mein setinterval mein 2s kebaad fetch data, and then redux se append chat toh , splice krke 10,1 10 length rkh i and eremove one for mtop now ll not freese  (higly performant live chat, ll nto explsw )
