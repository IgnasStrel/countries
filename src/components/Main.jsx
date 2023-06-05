import { useState, useEffect, useRef } from "react";
import {getAllCountriesInfo, searchCountry} from "../services/countriesService";
import Country from "./Country";
import Regions from "./Regions";

const Main = () => {
  // state visada top level virsuj
  const [countries, setCountries] = useState([]);
  const [filteredCountrys, setFilteredCountrys] = useState([]);

  // statai salies paieskai pagal pavadinima
  const [name, setName] = useState([]);
  const inputRef = useRef();

  // funkcija duomenu gavimui is service (https://restcountries.com/v3.1/name/{name})
  const getSearchResult = (word)=>{
    searchCountry(word).then(response=> {
      if (response !== undefined) {
        console.log(response, word)
       setFilteredCountrys(response) }
      
    })
    
  };

  const getData = () => {
    // gauti duomenis is service aprasyto axios get metodo
    getAllCountriesInfo().then((response) => {
      setCountries(response);
      setFilteredCountrys(response);
      getSearchResult(response);
    });
  };

  // isfiltruojami unikalus regionai
  const uniqueRegions = [
    ...new Set(countries.map((oneRegion) => oneRegion.region)),
    "All",
  ];
  console.log(uniqueRegions);

  // funkcija isfiltruoja duomenis pagal regiona
  const filterData = (region) => {
    console.log(region);
    // ifas pargrazinti visus duomenis be filtracijos
    if (region !== "All") {
      // filtruojamos salys
      const filtered = countries.filter((items) =>
        items.region.includes(region)
      );
      setFilteredCountrys(filtered);
    } else {
      // priskiriamos visos salys
      setFilteredCountrys(countries);
    }
    console.log(filteredCountrys);
  };

  // paieska pagal salies pavadinimas


  // console.log(countries);
  // kada pakviesime daryti req - uzklausa pasako mums useEffect
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <Regions
      getSearchResult={getSearchResult}
        uniqueRegions={uniqueRegions}
        filterData={filterData}
        inputRef={inputRef}
        setName={setName}
        name={name}
      />
      <Country countries={countries} filteredCountrys={filteredCountrys} />
    </div>
  );
};

export default Main;
