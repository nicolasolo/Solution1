import React, { Component } from 'react';
import './App.css';
import { Container, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import AppBar from './Components/AppBar';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';

class App extends Component {
  render() {
      return (
          <Router>
              <div>
                  <AppBar position="fixed" />

                  <Container>
                     

                      <Col xs="auto" md="6" lg="3">

                      <Route path="/" exact component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/gallery" component={Gallery} />

                      </Col>
                  </Container>
              </div>
              </Router>
    );
  }
}

export default App;
