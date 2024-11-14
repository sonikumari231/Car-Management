import React from "react";

function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-4">
                        <h5>Car Management using PHP API and MySQL</h5>
                        <img 
                            src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" // Replace with your actual image URL
                            alt="Car"
                            className="img-fluid mt-3"
                            style={{ width: "100%", height: "auto" }} // Makes the image take full width
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
