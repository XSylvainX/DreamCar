import Slider from '../slide/carousel'
import '../../style/accueil.css'



function Accueil() {
    return (
        <div className="accueil-cont">
            <h1 className="text-center pt-3 text-light">Bienvenue Chez Dream Car</h1>
            <hr className="text-light" />
            <Slider />
        </div>
    )
}

export default Accueil