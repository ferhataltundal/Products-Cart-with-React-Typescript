import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="p-1 me-auto">
          <Nav.Link to={"/"} as={NavLink} className="mx-3">
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink} className="mx-3">
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink} className="mx-3">
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "10rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
          >
            Product Cart
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "#fff",
                width: "2rem",
                height: "2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
