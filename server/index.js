const cors = require("cors")
const express = require("express");
const app = express();
const { db } = require("./conf")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/getAllVehicules", (req, res) => {

    const sqlSelect = "SELECT * from vehicules";

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
});



app.post("/addNewVehicule", (req, res) => {
    const marque = req.body.marque;
    const modele = req.body.modele;
    const immatriculation = req.body.immatriculation;
    const couleur = req.body.couleur;
    const etat_sortie = req.body.etat_sortie;
    const etat_retour = req.body.etat_retour;


    const newInsert =
        "INSERT INTO vehicules (marque,modele,immatriculation,couleur,etat_sortie,etat_retour) VALUES (?,?,?,?,?,?)"

    db.query(newInsert, [marque, modele, immatriculation, couleur, etat_sortie, etat_retour], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    })

})

app.put("/update/immat", (req, res) => {
    const id = req.body.id;
    const immatriculation = req.body.immatriculation;

    const sqlUpdate = "UPDATE vehicules SET immatriculation = ? where id = ?"

    db.query(
        sqlUpdate, [immatriculation, id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(" registration update");
            }
        }
    );
});

app.put("/update/color", (req, res) => {
    const id = req.body.id;
    const color = req.body.couleur;

    const sqlUpdate = "UPDATE vehicules SET couleur = ? where id = ?"

    db.query(
        sqlUpdate, [color, id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("color update");
            }
        }
    );
});


app.put("/update/stateout", (req, res) => {
    const id = req.body.id;
    const stateout = req.body.etat_sortie;

    const sqlUpdate = "UPDATE vehicules SET etat_sortie = ? where id = ?"

    db.query(
        sqlUpdate, [stateout, id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("state update");
            }
        }
    );
});


app.put("/update/statein", (req, res) => {
    const id = req.body.id;
    const statein = req.body.etat_retour;

    const sqlUpdate = "UPDATE vehicules SET etat_retour = ? where id = ?"

    db.query(
        sqlUpdate, [statein, id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("state update");
            }
        }
    );
});

app.delete("/deleteVehicule/:id", (req, res) => {
    const id = req.params.id;

    const sqlDelete = "DELETE FROM vehicules where id=?"

    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("vehicule deleted")
        }
    });
})

app.listen(3001, () => {
    console.log("server running on port 3001");
})