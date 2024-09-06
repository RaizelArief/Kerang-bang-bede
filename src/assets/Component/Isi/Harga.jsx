import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
const HargaMenu = () => {
    return (
        <>
            <div className="tulisanHarga">
                <h1>Open Order Hanya Untuk Daerah Pamulang , Ciputat Dan Depok!!</h1>
                <p>Untuk Daerah diluar Pamulang, Ciputat dan Depok Nanti akan segera hadir !!!</p>
            </div>
            <div className="card-container" id="Harga">
                <div className="card-item">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="hmm2.jpg" />
                        <Card.Body className="card-body">
                            <Card.Title>Kerang Ijo  Direbus Atau Mentah</Card.Title>
                            <Card.Text>
                                Kerang Hijau yang hanya direbus atau mentah dengan harga 15K/Kg, dan bisa order setengah kilo dengan harga 8K.
                            </Card.Text>
                            <a href="https://wa.me/6289661600044"><Button variant="primary">Order Disini</Button></a>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card-item">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="KerangHijau.jpg" />
                        <Card.Body className="card-body">
                            <Card.Title>Kerang Ijo Sambel Cocol</Card.Title>
                            <Card.Text>
                                Kerang Hijau yang ditambah dengan saus padang dengan harga 22K/Kg
                            </Card.Text>
                            <a href="https://wa.me/6289661600044"><Button variant="primary">Order Disini</Button></a>
                        </Card.Body>
                    </Card>
                </div>


                <div className="card-item">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="SaosPadang.jpg" />
                        <Card.Body className="card-body">
                            <Card.Title>Kerang Ijo Sambel Gledek</Card.Title>
                            <Card.Text>
                                Kerang Hijau yang ditambah dengan saus padang dengan harga 30K/Kg
                            </Card.Text>
                            <a href="https://wa.me/6289661600044"><Button variant="primary">Order Disini</Button></a>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    );
}

export default HargaMenu;
