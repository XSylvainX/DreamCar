import React from "react";
import '../../style/carForm.css'
import { useState } from "react";
import Axios from "axios"



const Formulary = () => {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [immat, setImmat] = useState(0);
    const [color, setColor] = useState("");
    const [stateOut, setStateOut] = useState("");
    const [stateIn, setStateIn] = useState("");

    const [vehiculeList, setVehiculeList] = useState([]);

    const [updateRegistration, setUpdateRegistration] = useState(0)
    const [updateColor, setUpdateColor] = useState("")
    const [updateStateOut, setUpdateStateOut] = useState("")
    const [updateStateIn, setUpdateStateIn] = useState("")




    const addVehicule = () => {

        Axios.post("http://localhost:3001/addNewVehicule", {
            marque: brand,
            modele: model,
            immatriculation: immat,
            couleur: color,
            etat_sortie: stateOut,
            etat_retour: stateIn
        }).then(() => {
            setVehiculeList([
                ...vehiculeList,
                {
                    marque: brand,
                    modele: model,
                    immatriculation: immat,
                    couleur: color,
                    etat_sortie: stateOut,
                    etat_retour: stateIn
                }
            ])
        })
    };


    const updateVehiculeRegistration = (id) => {
        Axios.put("http://localhost:3001/update/immat", { immatriculation: updateRegistration, id: id })
            .then((response) => {
                alert('registration update');
            }
            );
    };


    const updateVehiculeColor = (id) => {
        Axios.put("http://localhost:3001/update/color", { couleur: updateColor, id: id })
            .then((response) => {
                alert('color update')
            })
    }


    const updateVehiculeStateOut = (id) => {
        Axios.put("http://localhost:3001/update/stateout", { etat_sortie: updateStateOut, id: id })
            .then((response) => {
                alert('stateOut update ')
            })
    }

    const updateVehiculeStateIn = (id) => {
        Axios.put("http://localhost:3001/update/statein", { etat_retour: updateStateIn, id: id })
            .then((response) => {
                alert('stateIn update ')
            })
    }

    const showAllVehicule = () => {
        Axios.get("http://localhost:3001/getAllVehicules").then((response) => {
            console.log(response.data)
            setVehiculeList(response.data)
        });
    };

    const deleteVehicule = (id) => {
        Axios.delete(`http://localhost:3001/deleteVehicule/${id}`).then((response) => {
            setVehiculeList(vehiculeList.filter((val) => {
                return val.id !== id
            }))
        });
    };

    return (

        //form

        <div className="container-sm pt-5">
            <h3>Véhicules</h3>
            <hr className="text-light" />
            <div className="subcontent d-flex justify-content-center">
                <div className="d-flex flex-column pb5 mb-5 text-light">
                    <label>Marque du véhicule:</label>
                    <input type="text" onChange={(event) => {
                        setBrand(event.target.value);
                    }}
                    />
                    <label>Modèle du véhicule:</label>
                    <input type="text" onChange={(event) => {
                        setModel(event.target.value);
                    }} />
                    <label>Immatriculation:</label>
                    <input type="text" onChange={(event) => {
                        setImmat(event.target.value);
                    }} />
                    <label>Couleur du véhicule:</label>
                    <input type="text" onChange={(event) => {
                        setColor(event.target.value);
                    }} />
                    <label>état sortie:</label>
                    <textarea id="stateout" name="stateout" rows="5" cols="33" onChange={(event) => {
                        setStateOut(event.target.value);
                    }}></textarea>
                    <label>état entrée:</label>
                    <textarea id="statein" name="statein" rows="5" cols="33" onChange={(event) => {
                        setStateIn(event.target.value);
                    }}></textarea>
                </div>

                {/*block button*/}

                <div className="d-flex flex-column pt-5 ms-5">
                    <div>
                        <button onClick={addVehicule} className="act btn btn-primary">Ajouter un véhicule</button>
                    </div>

                    <div>
                        <button onClick={showAllVehicule} className="act btn btn-primary">Afficher tous les vehicules</button>
                    </div>

                </div>

                {/*block results*/}

                <div className="result ms-5">

                    {vehiculeList.map((val) => {
                        return (

                            <div className="table-responsive">

                                <table className="table caption-top">
                                    <caption>Véhicule</caption>
                                    <thead className="primary">
                                        <tr>
                                            <th scope="col">Marque</th>
                                            <th scope="col">Modele</th>
                                            <th scope="col">Immatriculation</th>
                                            <th scope="col">Couleur</th>
                                            <th scope="col">Etat sortie</th>
                                            <th scope="col">Etat entrée</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{val.marque}</td>
                                            <td>{val.modele}</td>
                                            <td>{val.immatriculation}</td>
                                            <td>{val.couleur}</td>
                                            <td>{val.etat_sortie}</td>
                                            <td>{val.etat_retour}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex">
                                    <div className="d-flex flex-column">
                                        <input className="input-update" type="text" onChange={(event) => {
                                            setUpdateRegistration(event.target.value);
                                        }} />
                                        <button className="act btn btn-primary btn-sm me-1" onClick={() => { updateVehiculeRegistration(val.id) }}>Mettre à jour immatriculation</button>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <input className="input-update" type="text" onChange={(event) => {
                                            setUpdateColor(event.target.value);
                                        }} />
                                        <button className="act btn btn-primary btn-sm me-1" onClick={() => { updateVehiculeColor(val.id) }}>Mettre à jour couleur</button>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <input className="input-update" type="text" onChange={(event) => {
                                            setUpdateStateOut(event.target.value);
                                        }} />
                                        <button className="act btn btn-primary btn-sm me-1" onClick={() => { updateVehiculeStateIn(val.id) }}>Mettre à jour status sortie</button>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <input className="input-update" type="text" onChange={(event) => {
                                            setUpdateStateIn(event.target.value);
                                        }} />
                                        <button className="act btn btn-primary btn-sm me-1" onClick={() => { updateVehiculeStateOut(val.id) }}>Mettre à jour status entrée</button>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <button className="act btn btn-primary btn-sm me-1" onClick={() => { deleteVehicule(val.id) }}>Supprimer le vehicule</button>
                                    </div>

                                </div>
                            </div>

                        );
                    })}
                </div>

            </div>
        </div>

    )
}

export default Formulary;