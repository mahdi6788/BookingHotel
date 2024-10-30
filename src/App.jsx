import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import LocationList from "./components/locationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";


function App() {
  return(
    <div>
      <Toaster/>
      <Header/ >
      <Routes>
      <Route path="/" element={<LocationList />}/>
      <Route path="/hotels" element={<AppLayout />}>
        <Route index element={<>Hotel</>} />
        <Route path=":id" element={<>Single</>}/>
      </Route>
            
      </Routes>
    </div>
  )
}

export default App;

