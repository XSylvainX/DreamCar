
import slide01 from "../../assets/images/carOne.jpg"
import slide02 from "../../assets/images/carTwo.jpg"
import slide03 from "../../assets/images/carThree.jpg"
import "../../style/carousel.css"

function Slider() {
    return (

        <div>
            {/*carrousel begin  */}

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={slide01} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block fw-bold fs-2">
                            <h5>Nous sommes là</h5>
                            <p className="sub">Des modèles récents ou anciens.</p>
                        </div>
                    </div>


                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slide02} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block fw-bold fs-2">
                            <h5>Pour réaliser</h5>
                            <p className="sub">De la sportive à la berline.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={slide03} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block fw-bold fs-2">
                            <h5>Vos rêves</h5>
                            <p className="sub">Dream Car est là pour trouver votre voiture de rêve.</p>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>


    )
}

export default Slider