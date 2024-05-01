import React from "react";
import Navbar from "../components/navbar";
import { Container, Button } from "react-bootstrap";
import Header from "../components/header";
import Quill from "../components/quill"

function Tool() {
    return (
        <Container fluid style={{height: "fit-content"}}>
            <Navbar />
            <Header />
            <Container>
                
                <div style={{ display: 'flex', alignContent: 'space-evenly'}}>
                    <div style={{paddingRight: '1%', width: '60vh'}}><Quill /></div>
                    <div style={{width: '60vh'}}><Quill /></div>
                </div>
                <Button style={{marginTop: '1%'}}>Check</Button>
                <hr />
            </Container>
        </Container>
    )
}

export default Tool;