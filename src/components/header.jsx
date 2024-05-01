import React from "react";
import Container from "react-bootstrap/Container"

function Header() {
    return (
        <Container style={{ padding: '0%' }}>
            <Container fluid class="text">
                <h1>Text Compare</h1>
                <p>You can now compare two text documents by using the online text compare application. The content that you want to compare can be in different formats, and you get to see the highlighted difference in results within seconds. Now you will know exactly what has been poorly paraphrased and even worse, what has been copied between two texts.</p>
            </Container>
        </Container>
    )
}

export default Header;