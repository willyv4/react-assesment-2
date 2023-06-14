import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FoodList from "./components/FoodList";
import FoodItem from "./components/FoodItem";
import snackImage from "./assets/snacks.png";
import drinkImage from "./assets/drinks.png";
import useFetchData from "./hooks/fetchData";
import ItemForm from "./components/ItemForm";
import SnackOrBoozeApi from "./components/Api";

function App() {
  const { snacks, drinks, refetchData } = useFetchData();

  const handleAddItem = async (formData) => {
    await SnackOrBoozeApi.addItem(formData);
    refetchData();
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} />} />
            <Route
              path="/snacks"
              element={
                <FoodList items={snacks} title="snacks" image={snackImage} />
              }
            />
            <Route
              path="/snacks/:id"
              element={<FoodItem items={snacks} cantFind="/snacks" />}
            />
            <Route
              path="/drinks"
              element={
                <FoodList items={drinks} title="drinks" image={drinkImage} />
              }
            />
            <Route
              path="/drinks/:id"
              element={<FoodItem items={drinks} cantFind="/drinks" />}
            />
            <Route
              path="/additem"
              element={<ItemForm handleForm={handleAddItem} cantFind="/" />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
