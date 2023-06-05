import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Country = ({ allCountries, getOneCountryInfo }) => {
  // pasitikrinimo tikslais
  console.log(allCountries);

  return (
    <div className="d-inline-flex flex-wrap justify-content-center w-100">
      {/* apsauga nuo duomenu negavimo is DB (jaigu nera stalciuko, arba jis tuscias) */}
      {allCountries !== undefined && allCountries.length !== 0 ? (
        // sukamas mapiukas ispausdinti salies informacijai
        allCountries.map((country, index) => (
          <Card
            className="m-3 border-secondary "
            style={{ width: "18rem" }}
            key={index}
          >
            <Card.Img
              className="border-bottom border-secondary"
              variant="top"
              src={country.flags.png}
              alt={country.flags.alt}
              style={{ height: "10rem" }}
            />
            <Card.Body className="d-inline-flex flex-column justify-content-around">
              <Card.Title>{country.name.common}</Card.Title>
              <Card.Text>Capital: {country.capital}</Card.Text>
              <Card.Text>
                Region: {country.region} ({country.subregion})
              </Card.Text>
              <Button
                variant="dark"
                onClick={() => getOneCountryInfo(country.name.common)}
              >
                More info
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        // jai nesuveike ifukas rodomas sis tekstas narsykleje
        <h1>Duomenys nerasti</h1>
      )}
    </div>
  );
};

export default Country;
