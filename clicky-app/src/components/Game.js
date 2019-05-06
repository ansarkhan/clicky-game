import React from 'react';
import img1 from '../static/img/1.jpg';
import img2 from '../static/img/2.jpg';
import img3 from '../static/img/3.jpg';
import img4 from '../static/img/4.jpg';
import img5 from '../static/img/5.jpg';
import img6 from '../static/img/6.jpeg';
import img7 from '../static/img/7.jpg';
import img8 from '../static/img/8.jpeg';
import img9 from '../static/img/9.png';

export default class Game extends React.Component{
    state = {
        currentScore: 0,
        highScore: 0,
        imagesClicked: []
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                    <div className="col-4" id="1">
                        <img src={img1}></img>
                    </div>
                    <div className="col-4" id="2">
                        <img src={img2}></img>
                    </div>
                    <div className="col-4" id="3">
                        <img src={img3}></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4" id="4">
                        <img src={img4}></img>
                    </div>
                    <div className="col-4" id="5">
                        <img src={img5}></img>
                    </div>
                    <div className="col-4" id="6">
                        <img src={img6}></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4" id="7">
                        <img src={img7}></img>
                    </div>
                    <div className="col-4" id="8">
                        <img src={img8}></img>
                    </div>
                    <div className="col-4" id="9">
                        <img src={img9}></img>
                    </div>
                </div>

            </div>
        );
    }
}