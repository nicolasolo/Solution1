import React from 'react';
import { CardImg } from 'reactstrap';
import image from '../images/header-bg.jpg';
const Example = (props) => {

    return (
        <div>

                <CardImg center width="100%" src={image} alt="Card image cap" />

            <br></br>
        </div>

    );
};

export default Example;