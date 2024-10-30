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

