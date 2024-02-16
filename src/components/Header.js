import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_URL, YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // API CALL
    // only if diff btw key storke is greater than 200ms

    // make an API CALL after every key press ===  getSearchSuggestions()
    // but ifthe diff btw 2 API calls is <200ms
    // decline the API call

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // let see the reconcilation

  // lets dry run again (that means lets check it agian)
  /**
   *
   * key i -
   *   - render the component
   *   - useEffect()
   *    - start the timer _> and will make an api call after 200ms
   *
   * ip -
   *    - (suppose before 200ms , it presses the key p then:-)destroy the componenet (when its is destroytung it wil call useefectr return  method also) settimout(200) = decline
   *    - re-render the component (it destroys the comp and updates it)
   *    - useEffect()
   *     - start the timer _> and will make an api call after 200ms (again nd its new timer , smae searcquery is a constant stil we are able to change it y? coz its a new variable everytime its rerendering) (a new timer is setup and now its agian counting those 200ms, suppose 200ms passed in , there was no other key presss- it ll automaitcally make an api call)
   *
   * thisi sdebouncing
   *
   * in js settimeout(200) browser starts the timer and waits for ti finish then it makes the api call,
   * but wht abt if timer is still running , anothe key is pressed then it triggers rthe reconcialtion process again, thne it has to clear things up (ie clear timeout) and cleartimout is calle when the comp is unmounted
   */

  const getSearchSuggestions = async () => {
    console.log("API CALL - ", searchQuery);
    const response = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);

    const json = await response.json();

    // console.log(json[1]);
    // if a person types very fast ie on speed of suppose 150ms then no API call
    // else if speed is suppose greater than 200ms then fetch the resords (that means user is typing very slow so that he neds suggerstions )
  };

  return (
    <div className="grid grid-flow-col px-8 py-1 shadow-lg bg-white items-center ">
      <div className="flex col-span-1 items-center gap-3   ">
        <div onClick={handleToggleMenu} className="cursor-pointer">
          <RxHamburgerMenu size={24} />
        </div>
        <a href={`/`}>
          <div>
            <img src={LOGO_URL} alt="logo" className="w-28" />
          </div>
        </a>
      </div>

      <div className="col-span-10  items-center justify-center flex">
        <div className="w-[80%] flex items-center justify-center">
          <input
            type="text"
            alt=""
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 w-[60%] p-2 px-4 rounded-l-3xl border-slate-200 "
          />
          <button className="rounded-r-3xl border-y-2 border-r-2  p-2 w-[8%] px-5 bg-slate-200">
            <IoIosSearch size={24} />
          </button>
        </div>
      </div>

      <div className="col-span-1">
        <CgProfile size={30} className="self-end" />
      </div>
    </div>
  );
};

export default Header;

// now most imp interview ques:- is to build search bar (whether its youtube, swiggy , amazon, fb , search is the most imp thing)
// lets study search

/**
 * when in youtube u start writng india :- it starts givign yuo suggestions,
 * it makes an API call and shows u suggestions,
 * go to youtube search :- in each and every key presss:- it is making an API CALL,
 * but this is not the case , to check this :- i typed i nvery fast then for 5 letters only 3 api calls were made,
 * so test this again thourughly , lets terst it on flipkart as utube apis are very fast
 * so in flipkart, i saw , it is not makign api call onevey key stroke
 *
 * so this is called debouncing :-when u are doing somthetihng very fast (suppose i am typign very fast)
 * so wht happens is it ksut skips some of the events
 * so when i ma typhng very fast in lfipkart :- it makes 3 api clals for 10-15letters
 * but for if i m typing slow, its maing api call for very key stroke
 *
 * SO , HOW IS IT ABLE TO DO THIS
 * SO THE CONCEPT BEHIND THIS IS :- DEBOUNCING
 *   DEBOUNCING SAYS :-  if u are typing very fast , diff btw two key strokes is very less
 *  and suppsoe if i m typing very slow, the idff btw two key strokes is very high
 *
 * so like for typing slow, suppose diff btw key strokes is 200ms and vice versa
 * typign slow = 200ms
 * typing fast = 30ms
 *
 * s othink, if i m typing fast, does i need suggestions of intermediate resutls (user behavious)
 * so then it is useless, to call api for every key sotre (SO THIS IS THE CONCLUSIION IF WE THING BASED ON USER BEHAVIOUR)
 *
 *now some people ll say, it hardly makes a diff , instead of 3 api calls u make 7 pai calss
  (without debouncing) -- iphone pro max = 14 letters * 1000(people are making it at same time) = 140000 api calls 
  (with debouncing) -- 3 API calls * 1000 = 3000 (api calls)

  also, whycant we only use search icon :- and click on it but no companies need to give gud user experience
  they are showing results :- to give better user experience
  websites need to show this , but they also need to make a very performant call
  
  so, in flipkart its visible :- 
  Debouncing in 200ms :- 
   - if diff btw the two key strokes is < 200ms = i should decline the APIA call
   - > 200ms : make an api call (ie if user has stopped typing that menas they might need suggestions )
   
  if we compare flipkart and youtube :- flipkart : might be debouncing of 200ms
  but in youutbe its very fast , but still there is debouncing (its less coz they want to give much more better user expoerince )
  also apis are fast of yuotube as compared to flipakrt 

  so find youtube suggestions api (from google)
  then its a hack always to first put fetch(url) in console andcheck it, it shows promise fulfilled
  then check network tab 

  STEPS TO PRODUCE SEARCH SUGGESTIONS :- 
  1. done with getting youutbe search api
  2. if i type in namastey on search :- it sohuld show suggestions (lets do debouncing , build it)
  3. now for that ,lets first tie up the input box 
  4. after setting and consoling it , its like prinintg console .log on every key storke 
  that means its making api calls on every key press , so lets set up debouncing
  5. now generally we used to make api call in useeffect and it should make on change of searchquery
  6. now lets create getSearchSuggestions fxn
    setTimeout(() => getSearchSuggestions(), 200);
  7. now withthis above, we had mae the call after 20ms but when will this useffect ll be called
  everytime my searchquery changes :- this useefect ll be called and a settimeout ll be generated 
  8. nderstad the basics (hen u can usnderstand debouncing)
 *
 */

// useEffect(() => {
//   // API CALL
//   // only if diff btw key storke is greater than 200ms

//   // make an API CALL after every key press ===  getSearchSuggestions()
//   // but ifthe diff btw 2 API calls is <200ms
//   // decline the API call

//   setTimeout(() => getSearchSuggestions(), 200);
// }, [searchQuery]);

// when we set the timeout need to clear out also
