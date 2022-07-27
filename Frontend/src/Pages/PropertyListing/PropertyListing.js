import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import originURL from "../../url";

import axios from "axios";
import { useState, useEffect } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import img1 from "../../Assets/1.webp";
import img2 from "../../Assets/2.webp";
import img3 from "../../Assets/3.webp";
import { Link, useLocation } from "react-router-dom";
const PropertyListing = (props) => {
  const location = useLocation();

  console.log("location",location)
  // Houses_Property

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  var url = "";
  if (location.state) {
    url = `${originURL}/properties?propertyType=${location.state.propertyType}&page=${page}&limit=20`;
  } else {
    url = `${originURL}/properties?propertyType=all_properties&page=${page}&limit=20`;
  }
  const fetchDATA = async () => {
    try {
      const res = await axios.get(url);
      const properties = res.data;
      setData(properties);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDATA();
    console.log(data);
  }, [page]);

  return (
    <>
      <div className="header"></div>

      <Container style={{ marginTop: "20px", marginBottom: "50px" }}>
        <Card className=" px-5" style={{ border: "none" }}>
          <div className="">
            {" "}
            <p className="" style={{ fontSize: "20px", fontWeight: "bold" }}>

              {location.state?location.state.propertyType:"Property Listing"}

            </p>
          </div>
          <Row className="  mb-5">
            {data.map((item) => {
              return (
                <>
                  <Col className="items" lg="3" key={item._id}>
                    <Card style={{ width: "18rem" }}>
                    <Link
                          to="propertyDetail"
                          state={{
                                item:item
                          }}
                          style={{textDecoration:"none",
                          color:"#444"
                          }}>
                      <Card.Img
                        variant="top"
                        src={item.img}
                        alt="propertypic"
                        className="img"
                      />
                      <Card.Body>
               
                          <Card.Title>
                            {" "}
                            <div>
                              {" "}
                              {item.Price ? (
                                <p
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    color: "green",
                                  }}
                                >
                                  {item.Price}
                                </p>
                              ) : (
                                "-"
                              )}
                            </div>
                          </Card.Title>
                        <Card.Text>
      
                          <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                            {item.Title}
                          </p>

                          <div
                            style={{ display: "flex", justifyContent: "start" }}
                          >
                            <div>
                              <i class="fa-solid fa-bath"></i>
                              &nbsp;
                              {item["Bath(s)"]}
                            </div>
                            <div className="px-2">
                              <i class="fa-solid fa-bed"></i>
                              &nbsp;
                              {item["Bedroom(s)"]}
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                      </Link>

                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Card>
      </Container>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={location.state ? 200 : 400}
            size="large"
            onChange={(e, p) => {
              console.log("eeeeeeeee", p);
              setPage(p);
            }}
          />
        </Stack>
      </div>
    </>
  );
};

export default PropertyListing;
