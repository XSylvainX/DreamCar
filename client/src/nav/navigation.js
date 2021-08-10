import React from "react";
import Accueil from '../components/pages/Accueil';
import Formulary from '../components/formModel/carForm'
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/Notfound'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../style/navigation.scss'


function Navigation() {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                                <a className="nav-link" href="/Vehicules">Vehicules</a>
                                <a className="nav-link" href="/Contact">A propos</a>
                            </div>
                        </div>
                        <h1 className="title me-5">
                            <span>Dream CAR</span>
                            <span>Dream CAR</span>
                        </h1>
                    </div>
                </nav>

                <Switch>
                    <Route path="/" exact component={Accueil} />
                    <Route path="/Vehicules" exact component={Formulary} />
                    <Route path="/Contact" exact component={Contact} />
                    <Route path="*" exact component={NotFound} />
                </Switch>

            </Router>
        </div>


    )
}

export default Navigation
