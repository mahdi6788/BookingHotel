Booking website:

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
6. after getting data from datavbase in server by using url and filtered by query, should render data properties into a Link tag to be clickable.
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
12. single hotel:
it is a dynamic page, meaning that Applayout has two children: 1. Hotels containing search results and 2. singleHotel showing info of one selected hotel. in dynamic route, the page shape is the same but content differs by changing the route.
13. we need to know which hotel was selected and use this info in other components, so we write a function into context (HotelsProvider) to be available for other components.
14. use useHotel() as a custome hook in Hotels and SingleHotel to have access to states and functions.
