import React from 'react';

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
                        <p>1</p>
                    </div>
                    <div className="col-4" id="2">
                        <p>2</p>
                    </div>
                    <div className="col-4" id="3">
                        <p>3</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4" id="4">
                        <p>4</p>
                    </div>
                    <div className="col-4" id="5">
                        <p>5</p>
                    </div>
                    <div className="col-4" id="6">
                        <p>6</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4" id="7">
                        <p>7</p>
                    </div>
                    <div className="col-4" id="8">
                        <p>8</p>
                    </div>
                    <div className="col-4" id="9">
                        <p>9</p>
                    </div>
                </div>

            </div>
        );
    }
}