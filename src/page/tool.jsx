import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import { Container, Button } from "react-bootstrap";
import Header from "../components/header";
import Quill from "../components/quill"

function Tool() {
    const [input,setInput] = useState('');
    const [compare, setCompare] = useState("");
    console.log(input);
    console.log(compare);
    return (
        <Container fluid style={{ padding: '0', margin: '0', background: 'white', height: '100vh'}}>
            <Navbar />
            <Header />
            <Container>
                
                <div style={{ display: 'flex', alignContent: 'space-evenly'}}>
                    <div style={{paddingRight: '1%', width: '60vh'}}><Quill value={input} setValue={setInput}/></div>
                    <div style={{width: '60vh'}}><Quill value={compare} setValue={setCompare}/></div>
                </div>
                <Button style={{marginTop: '1%'}}>Check</Button>
                <hr />
            </Container>
        </Container>
    )
}

export default Tool;