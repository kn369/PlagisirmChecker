import ReactQuill from 'react-quill'
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Container } from 'react-bootstrap';
import "../components/quill.css"

function MyComponent ({value, setValue}){
    var toolbarOptions =[['bold','italic','underline']];
    const module = {
        toolbar: toolbarOptions,
    };
    return(
       <Container style={{padding: '0'}}>
            <ReactQuill  theme="snow" value={value} onChange={setValue} />
       </Container>
    )
}

  export default MyComponent;