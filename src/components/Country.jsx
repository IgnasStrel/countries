import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Country = ({ allCountries }) => {
  console.log(allCountries);
  return (
    <div>
      {allCountries !== undefined && allCountries.length !== 0 ? (
        allCountries.map((country, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={country.flags.png} />
            <Card.Body>
              <Card.Title>{country.name.common}</Card.Title>
              <Card.Text>
                <p>
                  <b>Population: </b>
                  {country.population}
                </p>
              </Card.Text>
              <Card.Text>
                <b>Region: </b>
                {country.region}
              </Card.Text>
              <Card.Text>
                <b>Capital: </b>
                {country.capital}
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>Duomenys nerasti</h1>
      )}
    </div>
  );
};
export default Country;
