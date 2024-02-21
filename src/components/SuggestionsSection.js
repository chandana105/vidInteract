import React from "react";

const SuggestionsSection = () => {
  return <div className="col-span-3  px-3 bg-pink-200 ">suggestions</div>;
};

export default SuggestionsSection;

// live chat in youutbe as seen in sdie of live videos
// live hcati s also like infinte scroll

// livechat >>>> infinite scroll >>>> pagination
// live streaming :- 39001 people watching , so many people are doing liove chat
// live streaing - sth which is changing rapidly on the pg, some thing live we need to fetch data agian and again

// 2 ways ca nhandle it :-
/**
 * challenges of live chat
 * 1. get data live is the major challenge
 * 2. UPdate the UI ( how do u update the data on page)
 *
 *
 * as this comment is a div, so at the end of the day , new div is appended (pushed up to the page)
 *
 * if so many people are watichgn , and i keep putting the div :- page can bloat : it ll become slow coz page size will increase
 * herei nyoutube live streram :- page is not fresszing
 *
 * complexity of a live stream is :-  u have to update ui in an efficent way  and also to gvie a bettwe experience to user
 * it is just givign me live commentds and scrolling quickly
 *
 * 2 majaor challenges
 * 1. chalenge on UI LAYER:-  is to update my page in such a waythat my page doesnot frese, even if i open my page for 1 hour (millions of commnetscoimg in , my pagecan halde it)
 * 2. challenge on DATA  layer :- how do u get data, disply it on the pg
 *
 * A. DATA (live) :- (if it not live, we can calla n api on usefect and job is done),
 * but here data which is live need to update (talking abt that)
 *   . there are two ways with which we can handle live data :-
 *
 *     1. WEB SOCKETS :- Its a two way connection established (its kind of handshake btw a server an UI)
 *        UI<-------->SERVER  (IT CREATES A HANDSHAKE , oncde u have conected that handshake , u can quickly sned data from either sides , so its a bidrectional live data
 *        u can send data ffrom Ui to backend and backed to ui also) , here is no regualr interval.
 *        its two servers connected to each other, now they can send data anytime they want to, inital connections takes a time, once theconnection is setup, its lieka handshake,
 *        now its very easy ,once the connection is estalbished, u can sedn data from any direction andcan send data whwnever u want to.
 *        examples :- a.) app where thee is stocket market ,TRADING APPS pltform (where u ened real time, where every ms u need the graph , crypto crrecny)
 *        b.) whtsapp (here cant do pooling, cause if msging fasr,torder of msgs can change , time change), in a live chat app always need websockets
 *
 *    2.API POOLING (long pooling) :- UI requests it , data flows from server to UI
 *      its  one direction and after an interval UI<-------SERVER
 *      data is unidrectional, UI ll keep pooling data after 1 second/10s, let me check after 10s new data has ocme or not, this is kniwn as poling , u pool data
 *      examples :-1.) GMAIL ( dont know whetherits pooling, r web scokets ) but if i have to develop then
 *      think abt to, (as kfw quests to urself) , do u need gmail very rela time ire them oment i sned the email, that moment only it shoiuld be recieved t othat pwerson
 *      but do i need ti right now, its ok, if i get my email afgter 10s its fine, so when buildgn gmail app, i ll check after 10s whether a new mailhas come or not
 *      in gmail u dontn eed websocket connection as also its heavy,
 *      2.) CRICBUZZ APP (in whcih live cricket commentry and ifno is shown https://www.cricbuzz.com/)
 *      here see the live match going on, clikc on it , then open console, one fetch request might be going
 *      https://www.cricbuzz.com/api/cricket-match/commentary/87096
 *      here above was going on, chec kwatterfall, after every 25s it was making request , to fetch osme results, so it is doing api pooling
 *      now u get to kow how cricbuzz works ,this is known as real engineering, dats layer ke baare u got to knoiw
 *      y 25s :- it is aligning to how cricket works
 *
 * so here, youtube is  also usng api poling for live chat of stream to fetch, seeconsole, check waterfall
 * every 1.5s makign api call, why not 5s , coz to gvie better user experince, no timestamps shwn, that means order doens t matter inthsiese apps
 *
 * NEXT IS :-  why is page not freezing in youtuber :-
 * wht youtube does is as soon asmsg explode from certain number it quicklydeletes from ur page
 * it is cleanign up the mess smartly, but i can scroll up see the top msgs , but see when u go on top, its not deletign it , but agian after 10s scoll down and agia ngo up, hat same msg ll not bew there
 * it is not pusing all thigns in dom, if it keeps up dong this, it ll explode the odm it ll inc the pagesize
 * also one thing ,youtbe does, suppose my borewwse is slown chrome or internet explored, so it ca nchange the number of item it keeps in the cache so that my browser doens ot freze
 * these are the ays ux ll improve , also u can see how many totla msgs are there at time, inspect that elent
 * in cnsole doc.getelemybytagname("tagname") , it changes (not sure why)
 *
 */
