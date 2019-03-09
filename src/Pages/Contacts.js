import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faImage } from '@fortawesome/free-solid-svg-icons';



class Contacts extends Component {
    render() {
        return (

            <div className="App">


                <br />
                <Image fluid src={require('../img/ContactUs.jpg')} />
                <Container fluid>
                    

                    <br />
                    <Row>

                        <Container center>
                            <InputGroup variant="outline-primary" size="lg">
                                <InputGroup.Prepend>
                                    <Button variant="outline-primary"><FontAwesomeIcon icon={faPhone} color='outline-primary' size='1x' /></Button>
                            </InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">393 02.900.64</InputGroup.Text>
                        </InputGroup>

                        </Container>


                        
                            
                                
                           
                          

                    </Row>
                    <br />
                </Container>






            </div>

        );
    }
}

export default Contacts;