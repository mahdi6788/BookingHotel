Booking website:

Notes:
App: contains different Providers (context), Toaster displaying all errors throughout the program, Header and Routes.
Routes: During the program we need to navigate the user to some specific pages, so we need to already define the pages by using the Route. 
g.g. in header, there are some links to convey the user to other pages, like Home, Bookmark and Login. 
Also, after entering information about date, room and location, user navigate to AppLayout, by clicking on search.
AppLayout contains two sections: static part like map that does not change, and dynamic part like hotels information that has two children, Hotels and SingleHotel, so Route of AppLayout has two nested Route for its children. Accordingly, we use Outlet to handle the dynamic part, into the AppLayout.
Layout: in each layout like AppLayout or BookmarkLayout, there is a nested route with the path named index related to the main page shown to the user. and other pages have reletive paths. (absolute path has slash mark "/" and reletive path does not has slash mark.)




1. use some customHooks or components for new project: useFetch, Toast
2. when we have dynamic parts into a component we use built-in component named <Outlet/>
3. dynamic route
applayout has two parts: map and dynamic content contaning hotels and single hotel. so in AppLayout page should point to this dynamic part by using Outlet component inside the relevant element "sidebar".
map element does not change  and is not a dynamic section so do not need to outlet inside
4. Searchparams and Navigation:
createSearchParams:
first we use createSearchParams to create proper params based on our information in Header component where we generate the states data, option and destination. 
useNavigate:
then by useNavigate we create a navigate to send this params on address bar, and navigate to this path: it has "pathname" that is the name of the main route and "search" that is the params created before. 
useSearchParams:
wherever we need to have the state before use as searchparams, we can use [searchParams, setSearchParams ] = useSearchParams ()
In Hotels, we use useSearchParams to get the params (states) generated before.
Then use them in query.
5. get inforamtion from database using created useFetch hook
url: server (database),
note: if we want to search in all query string, we should use q instead of name or accommodation:
name_like=${destination || ""} ===> q=${destination || ""}
6. after getting data from database in server by using url and filtered by query, should render data properties into a Link tag to be clickable.
7. the initial value of destination can be defined by previous location searched or nothing for the first search.
8. *** we need data for both Sidebar and MapContainer: so we should create a Context and provide it in App component and consume it in useContext.
9. HotelsProvider:
Create a component as a context named HotelsProvider including createContext and useContext, also all the state required located in Hotel component.
where we need the value provided by HotelContext.Provider, we should use:
const {data, isLoading} = useHotel(). also we should use element HotelContext in App to wrap all elements there.
note: we should put any state or function that we want to pass to different components into the this context component (HotelsProvider).
10. react-leaflet:
use example of this library to show map and determine mapCenter as center. mapCenter save lat and lng of the location, and setMapCenter is in useEffect, so each time page get re-rendered center has the location of the hotel and do not prevent to refresh. also if location change, effect function will be updated and show new location. 
in Marker and Popup, we need information of each hotel so we use hotel.map to make a loop and get info.
11. use user location:
define a button  "My location". it has event function that get user location using browser navigator: navigator.geolocation.getCurrentPosition. we use a custom hook, useGeoLocation, containing function getPosition. and then import this hook to the Map use a useEffect to update setMapLocation.
12. AppLayout:
this is a dynamic page, meaning that Applayout has two types of components: the first components do not change like Map, but the second type changes and has two children: 1. Hotels containing search results and 2. SingleHotel showing info of selected hotel. the page shape is the same but content differs by changing the route.
13. we need to know which hotel was selected and use this info in other components, so we write a function into context (HotelsProvider) to be available for other components.
14. use useHotel() as a custome hook in Hotels and SingleHotel to have access to states and functions.
15. bookmark:
bookMarkLayout is shows two section :map and sidebar that is dynamic with two parts : add and list. by clicking on the map it goes to the page of bookmark/add.
16. make new BookmarkProvider to share info about bookmarks just like HotelProvider
17. SingleBookmark:
for each bookmark there is an id, so we can use this id to get info of that bookmark from server (dataset). useParams() give use the id, and useBookmark() give required states and functions. should use useEffect to run the getsingleBookmark(id) when the page is loaded and its outlet determine currentBookmark and we can use this to show information in UI. 
18. useMapEvent: is a built-in option that provide us with information of the place we clicked on the map:
useMapEvent({
    click: e => navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
18. AddNewBookmark:
firstly, write the UI that is a form. secondly, we need the location (latitude and longitude) that we make a custome hook (useUrlLocation) to get info of the clicked point on the map using useMapEvent.
19. use API to get location of each place. after getting lat and lng through useUrlLocation, we should use the API and the end of that add these lat and lng and  fetch data and find the info like cityname , country and ... . 
20. use HiTrash in react-icons/hi to have an icon. also should use preventDefault to prevent from doing Link action. 
21. then we need to delete the item having id from bookmarks also dataset, which is done in BookmarkListProvider as a context containing all states and fuctions we need. create a async-await function to delete item from dataset by using axios.delete.
22. useReducer and useContext:
* instead of using several useState, we can use useReducer containing those states and we can update them in bookmarkreducer instead of setStates based on the actions came from dispatch.
const [{ currentBookmark, bookmarks, isLoading}, dispatch] =
    useReducer(bookmarkReducer, initialState);

* note: bookmarkReducer and initialStates are outside of the context. also bookmarkReducer is a pure function so we cannot use side effect function like useEffect and event handler functions into that. so, we put them out of this function use dispatch to define type of action and transfer required data as a payload.

23. authentication: 
make a context including useReducer
24. login page
25. Authorization

26. ***RUN*** when run the app should run both dev and server: 
npm run dev
npm run server   /// if donot run the server, the server does not work correctly and throw error regarding network

