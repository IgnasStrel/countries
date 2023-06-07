const OneCountryModal = ({ oneCountry, setModalIsOpenToFalse }) => {
  console.log(oneCountry[0]);
  return (
    <div className="card" style={{ width: "420px", padding: 20 }}>
      <h2 className="card-title text-center my-2">
        {oneCountry[0].name.common}
      </h2>
      <img
        src={oneCountry[0].flags.png}
        alt={oneCountry[0].name.common}
        style={{ border: "1px solid black" }}
      />

      <div className="card-body">
        <p>
          <strong>Region: </strong> {oneCountry[0].region}
        </p>
        <p>
          <strong>Capital city: </strong>{" "}
          {oneCountry[0].capital && typeof oneCountry[0].capital == "object"
            ? oneCountry[0].capital[0]
            : oneCountry[0].capital || "No capital city"}
        </p>
        <p>
          <strong>Population: </strong> {oneCountry[0].population}
        </p>
        <p>
          <strong>Area Size: </strong> {oneCountry[0].area}
        </p>
        <p>
          <strong>TimeZone: </strong> {oneCountry[0].timezones[0]}
        </p>
        <p>
          <strong>Borders: </strong>
          {oneCountry[0].borders && typeof oneCountry[0].borders == "object"
            ? Object.keys(oneCountry[0].borders).map((first, index) => {
                return <p key={index}>{oneCountry[0].borders[first]}</p>;
              })
            : oneCountry[0].borders || "No borders"}
        </p>
        <p>
          <strong>Languages: </strong>{" "}
          {oneCountry[0].languages && typeof oneCountry[0].languages == "object"
            ? Object.keys(oneCountry[0].languages).map((first, index) => {
                return <p key={index}>{oneCountry[0].languages[first]}</p>;
              })
            : oneCountry[0].languages || "No languages"}
        </p>
        <p>
          <strong>Currencies : </strong>{" "}
          {oneCountry[0].currencies &&
          typeof oneCountry[0].currencies == "object" ? (
            <ul>
              {Object.keys(oneCountry[0].currencies).map((first, index) => {
                return (
                  <li key={index}>
                    {first}
                    <ul>
                      {Object.keys(oneCountry[0].currencies[first]).map(
                        (second, index) => {
                          return (
                            <li key={index}>
                              {second}:{" "}
                              {oneCountry[0].currencies[first][second]}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </li>
                );
              })}{" "}
            </ul>
          ) : (
            oneCountry[0].currencies || "No currencies"
          )}
        </p>
      </div>
      <button
        type="button"
        className="btn btn-dark"
        onClick={setModalIsOpenToFalse}
      >
        Close
      </button>
    </div>
  );
};

export default OneCountryModal;
