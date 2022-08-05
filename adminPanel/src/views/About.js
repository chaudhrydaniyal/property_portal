import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Property Portal
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">Property Portal</h2>
                <div className=" mb-4">
                Post your properties on Property Portal and directly expose them to thousands of potential investors, tenants, buyers, agents & brokers and other interested parties.

Save your favourite properties in your members panel to view them later at your convenience.

Use Property Portal integrated e-mail facility to track your potential buying & rental leads.

Set-up property email alerts providing you latest listings of properties instantly as they appear on Property Portal.

Search the exact kind of property you are looking for, including hundreds of developments, residential & commercial properties, homes, villas, apartments, plots, shops, offices, complete buildings & floors, warehouses, factories and labour camps
                </div>
                <img
                  src="https://www.wrappixel.com/wp-content/uploads/edd/2020/04/xtreme-react-admin-template-y.jpg"
                  alt="my"
                />
           
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
