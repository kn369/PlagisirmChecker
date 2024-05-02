import React from "react";
import Navbar from "../components/navbar";
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import background from "../page/bg.jpg";
import "../page/home.css"
function Home() {
    return (
        <Container fluid id="main" style={{padding: '0',margin: '0'}}>
            <Navbar />
            <Container fluid style={{height: '100%'}}>
                <Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Home;