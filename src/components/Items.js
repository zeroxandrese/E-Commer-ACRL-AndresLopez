import React from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import './Items.css';

function Items(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="contenidoCard">
                        <h5>{props.producto}</h5>
                        <p>{props.descripcion}</p>

                    </Card.Text>
                    <Button variant="primary">Cantidad del producto</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Items
