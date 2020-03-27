import React from 'react';

function Home() {
    return (
        <div className="bg-info">
            <div className="row">
                <div className="col-sm mr-auto ml-auto mt-3 md-2">
                    <img src="https://www.talent-land.mx/wp-content/uploads/2019/12/cl2019-jalisco-talent-land-2020-logo-03-480x203.png" className="img-fluid mx-auto d-block" alt="..." height="150px" width="350px"/>
                </div>
                <div className="col-sm ml-auto mr-auto md-2">
                    <div className="card text-center text-white bg-transparent mt-3 mr-5 ml-5">
                        <h1>EVENTO SIN NOMBRE</h1>
                        <p>
                            <strong> Fecha del evento | </strong>
                            <strong> Lugar del evento</strong>
                        </p>
                    </div>
                    <p className="text-center text-white">
                        <a type="button" className="btn btn-success text-white btn-lg m-1">Adquiere tu entrada</a>
                    </p>
                </div>
                <div className="col-12 p-2"></div>
                <div className="col-6 mr-auto ml-auto mt-3">
                    <img src="https://www.talent-land.mx/wp-content/uploads/2020/01/tl2020-home-banner-enero-changing-the-world-01.png" className="img-fluid mx-auto d-block" alt="..." height="250px" width="450px"/>
                </div>
                <div className="col-6 mr-auto ml-auto mt-3">
                    <img src="https://www.talent-land.mx/wp-content/uploads/2020/01/tl2020-home-banner-enero-personajes-lands-01.png" className="img-fluid mx-auto d-block" alt="..." height="250px" width="450px"/>
                </div>
                <div className="col-12 p-2"></div>
            </div>
        </div>
    )
}
export default Home;