import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Regions = ({
  uniqueRegions,
  filterData,
  getSearchResult
}) => {
  return (
    <div>
      <Navbar bg="white" variant="bg-dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {uniqueRegions.map((newRegion, index) => (
              <Nav
                key={index}
                className="me-auto my-2 my-lg-0 m-4"
                style={{ maxHeight: "100px"}}
                navbarScroll
              >
                <Nav.Link href="#action1" onClick={() => filterData(newRegion)}>
                  {newRegion}
                </Nav.Link>
              </Nav>
            ))}
            <Form className="d-flex">
              <Form.Control

                type="search"
                placeholder="Country name"
                className="me-2"
                aria-label="Search"
                onChange={(e) => getSearchResult(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Regions;
