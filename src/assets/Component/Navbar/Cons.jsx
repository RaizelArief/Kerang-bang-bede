import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Const = () => {
  return (
    <div className="mb-5 Const" id="Const">
      <Container>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={8} lg={6} className="text-center">
            <div className="tulisan mt-20">
              <a href="#Footer" className="d-block mt-4">
                <Button variant="danger">Alamat Toko</Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Const;
