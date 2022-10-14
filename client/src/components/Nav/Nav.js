import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigationbar = () =>{

    return(
        <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/Home">home</NavLink>
                   
                </Nav>
            </Navbar.Collapse>

        </Navbar>
        </>
    )
}

export default Navigationbar;