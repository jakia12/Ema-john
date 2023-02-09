import React from 'react';
import { Card, Button } from 'react-bootstrap';


const SingleProduct = ({ product, addToCart }) => {



    return (
        <div className="col-md-4 col-sm-6">
            <div className='product_card my-3'>
                <Card >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.title.slice(0, 15) + "..."}</Card.Title>
                        <Card.Text>
                            {product.description.slice(0, 30) + "..."}
                        </Card.Text>
                        <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default SingleProduct
