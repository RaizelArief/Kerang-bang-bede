import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import './styles.css'; // Pastikan untuk mengimpor file CSS yang benar

function NavigationBar() {
  const [color, setColor] = useState("white");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Hapus semua kelas gradien dan warna
    document.body.classList.remove('gradient-yellow-violet', 'gradient-violet');
    
    // Terapkan kelas gradien atau warna sesuai dengan status
    if (color === "yellow" || color === "violet") {
      document.body.classList.add('gradient-yellow-violet');
    } else if (color === "violet") {
      document.body.classList.add('gradient-violet');
    } else {
      document.body.style.backgroundColor = color;
    }
  }, [color]);

  const handleSwitchChange = () => {
    if (color === "white") {
      setColor("violet");
      setIsChecked(true);
    } else if (color === "violet") {
      setColor("yellow");
      setIsChecked(false);
    } else {
      setColor("white");
      setIsChecked(false);
    }
  };

  return (
    <>
      <div className="NavigationBar">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <img src="Kerang.jpeg" alt="" className="Kerang w-7 h-8" />
            <Navbar.Brand href="#home">Lapak Kerang Ijo BANG BEDE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Pengertian">Pengertian Kerang</Nav.Link>
                <Nav.Link href="#Harga">Harga Kerang</Nav.Link>
                <Nav.Link href="https://wa.me/6289661600044">Order</Nav.Link>
                <Nav.Link href="#Footer">Alamat Toko</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Ganti Warna BG"
            checked={isChecked}
            onChange={handleSwitchChange}
          />
        </Form>
      </div>
    </>
  );
}

export default NavigationBar;
