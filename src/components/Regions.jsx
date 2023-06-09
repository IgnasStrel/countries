import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

const Regions = ({ regions, filterData, searchCountries }) => {
  console.log(regions);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {regions.map((region, index) => (
              <Nav.Link href="#" key={index} onClick={() => filterData(region)}>
                {region}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => searchCountries(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Regions;
