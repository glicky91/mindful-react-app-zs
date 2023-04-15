import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import '../App.css';

export default function TopBar() {
    return (
        <Navbar color="info" dark>
            <NavbarBrand
                xs={4}
                href="/"
                className="mx-auto display-2"
                style={{ fontFamily: "Georgia", fontSize: "45px" }}
            >
                Gratitude Journal
            </NavbarBrand>
        </Navbar>
    );
}