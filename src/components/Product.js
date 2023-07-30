import React, { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR: {product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ background: "white" }}>
              <Button variant="primary">ADD TO CART</Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    )
  })

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  )
}

export default Product
