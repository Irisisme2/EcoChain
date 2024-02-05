import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Delivered Products</p>
                      <Card.Title as="h4">2001</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Average Delivery Time</p>
                      <Card.Title as="h4">3 days</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Returns</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
  <Col md="12">
    <Card>
      <Card.Header>
        <Card.Title as="h4">Supply Chain Stages</Card.Title>
        <p className="card-category">Stages in the Supply Chain Process</p>
      </Card.Header>
      <Card.Body>
        <div className="ct-chart" id="chartSupplyChainStages">
          <ChartistGraph
            data={{
              labels: ["Production", "Transport", "Warehousing", "Distribution"],
              series: [
                [250, 200, 180, 300], // Example data, replace with actual values
              ],
            }}
            type="Bar"
            options={{
              high: 400,
              axisX: {
                showGrid: false,
              },
              axisY: {
                onlyInteger: true,
                offset: 20,
              },
              seriesBarDistance: 15,
              chartPadding: {
                right: 50,
                left: 10,
              },
            }}
            responsiveOptions={[
              [
                "screen and (max-width: 640px)",
                {
                  axisX: {
                    labelInterpolationFnc: function (value) {
                      return value[0];
                    },
                  },
                },
              ],
            ]}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="legend">
          <i className="fas fa-square text-info"></i> Production{" "}
          <i className="fas fa-square text-danger"></i> Transport{" "}
          <i className="fas fa-square text-warning"></i> Warehousing{" "}
          <i className="fas fa-square text-success"></i> Distribution
        </div>
        <hr></hr>
        <div className="stats">
          <i className="fas fa-history"></i> Updated 3 minutes ago
        </div>
      </Card.Footer>
    </Card>
  </Col>
</Row>
<Row>
<Col md="12">
  <Card>
    <Card.Header>
      <Card.Title as="h4">Sustainable Development Goals Progress</Card.Title>
      <p className="card-category">Statistics on EcoChain Goals Achievements</p>
    </Card.Header>
    <Card.Body>
      <div className="ct-chart" id="chartSDG">
        <ChartistGraph
          data={{
            labels: [
              "Emission Tracking",
              "Water Usage Efficiency",
              "Sustainable Energy Sources",
              "Responsible Mining",
              "Gender Equality in the Supply Chain",
              "Waste Management",
              "Clean Energy Sources",
              "Sustainable Economic Growth",
              "Technological Innovations",
              "Community Sustainable Development",
              "Sustainable Cities and Communities",
              "Responsible Consumption and Production",
            ],
            series: [
              [
                { meta: 'Emission Tracking', value: 75, className: 'bar-info' },
                { meta: 'Water Usage Efficiency', value: 80, className: 'bar-success' },
                { meta: 'Sustainable Energy Sources', value: 65, className: 'bar-warning' },
                { meta: 'Responsible Mining', value: 90, className: 'bar-danger' },
                { meta: 'Gender Equality in the Supply Chain', value: 70, className: 'bar-primary' },
                { meta: 'Waste Management', value: 85, className: 'bar-secondary' },
                { meta: 'Clean Energy Sources', value: 75, className: 'bar-dark' },
                { meta: 'Sustainable Economic Growth', value: 88, className: 'bar-info' },
                { meta: 'Technological Innovations', value: 92, className: 'bar-success' },
                { meta: 'Community Sustainable Development', value: 78, className: 'bar-warning' },
                { meta: 'Sustainable Cities and Communities', value: 87, className: 'bar-danger' },
                { meta: 'Responsible Consumption and Production', value: 94, className: 'bar-primary' },
              ],
            ],
          }}
          type="Bar"
          options={{
            high: 120,
            axisX: {
              showGrid: false,
            },
            axisY: {
              onlyInteger: true,
              offset: 20,
            },
            seriesBarDistance: 15,
            chartPadding: {
              right: 50,
              left: 10,
            },
          }}
          responsiveOptions={[
            [
              "screen and (max-width: 640px)",
              {
                axisX: {
                  labelInterpolationFnc: function (value) {
                    return value[0];
                  },
                },
              },
            ],
          ]}
        />
      </div>
    </Card.Body>
    <Card.Footer>
      <div className="legend">
        <i className="fas fa-circle text-info"></i> Emission Tracking
        <i className="fas fa-circle text-success"></i> Water Usage Efficiency
        <i className="fas fa-circle text-warning"></i> Sustainable Energy Sources
        <i className="fas fa-circle text-danger"></i> Responsible Mining
        <i className="fas fa-circle text-primary"></i> Gender Equality in the Supply Chain
        <i className="fas fa-circle text-secondary"></i> Waste Management
        <i className="fas fa-circle text-dark"></i> Clean Energy Sources
        <i className="fas fa-circle text-info"></i> Sustainable Economic Growth
        <i className="fas fa-circle text-success"></i> Technological Innovations
        <i className="fas fa-circle text-warning"></i> Community Sustainable Development
        <i className="fas fa-circle text-danger"></i> Sustainable Cities and Communities
        <i className="fas fa-circle text-primary"></i> Responsible Consumption and Production
      </div>
      <hr></hr>
      <div className="stats">
        <i className="fas fa-check"></i> Data information certified
      </div>
    </Card.Footer>
  </Card>
</Col>


        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
