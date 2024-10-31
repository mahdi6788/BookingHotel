import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import LocationList from "./components/locationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Hotels from "./components/Hotels";
import HotelsProvider from "./components/HotelsProvider";
import SingleHotel from "./components/SingleHotel";


function App() {
  return(
    <HotelsProvider>
    <div>
      <Toaster/>
      <Header/ >
      <Routes>
      <Route path="/" element={<LocationList />}/>
      <Route path="/hotels" element={<AppLayout />}>
        <Route index element={<Hotels/>} />
        <Route path=":id" element={<SingleHotel/>}/>
      </Route>
            
      </Routes>
    </div>
    </HotelsProvider>
  )
}

export default App;

