import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // action whichi s gettign sent
      // {"ip" : ["iphone" , "iphone11"]} + {same obj}
      //   so to add all these obje ,to put state also with them , it ll merge the payload as well as state
      return { ...action.payload, ...state };
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

/**
 * how will i make the data strucure here for keeping my search suggestions
 * 1. suppose i stroe my search resutls in an array
 * ["i", "ip", "iph", "ipho"]
 * time complexity tyo search in array = O(n)  (coz u atleast needan iteration to find out , have to do linear search one by one whewere it is that search)
 * 2. some people feel, that we can use array metohds to find in an array
 * array.indexof()
 * time complexity of array.indexof() = O(n)
 * internallly it is optimizing a lot , but still it is takign same amt of time , it is just calling a for loop and checking each of these var's
 *
 *
 * {
 *   i :
 *   ip :
 *   iph :
 *   ipho:
 *
 * }
 *
 * 3. but if i put my search resutlsin an obj , then time complexity to search in a obj/map/hashmap = O(1)
 *
 * 4. new Map() or set   :- even more optimized than searchign in a nobj
 */



