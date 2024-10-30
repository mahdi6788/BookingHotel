Booking website:

1. use some customHooks or components for new project: useFetch, Toast
2. when we have dynamic parts into a component we use built-in component named <Outlet/>
3. dynamic route
applayout has two parts: map and dynamic content contaning hotels and single hotel. so in AppLayout page should point to this dynamic part by using Outlet component inside the relevant element "sidebar".
map element does not change  and is not a dynamic section so do not need to outlet inside
