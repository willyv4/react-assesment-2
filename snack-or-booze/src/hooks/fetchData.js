import { useEffect, useState } from "react";
import SnackOrBoozeApi from "../components/Api"; // Replace with the correct path to your API file

function useFetchData() {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const fetchData = async () => {
    const [snacks, drinks] = await Promise.all([
      SnackOrBoozeApi.getSnacks(),
      SnackOrBoozeApi.getDrinks(),
    ]);
    setSnacks(snacks);
    setDrinks(drinks);
  };

  const refetchData = async () => {
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { snacks, drinks, refetchData };
}

export default useFetchData;
