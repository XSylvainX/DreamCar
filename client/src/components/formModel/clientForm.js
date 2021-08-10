
import '../../style/clientForm.css'

function Clientform() {
    return (

        <form className="client">
            <h3>Client</h3>
            <div className="aboutClient">
                <div className="information">
                    <label>Nom:</label>
                    <input type="text" />
                    <label>Prénom:</label>
                    <input type="text" />
                    <label>Date de naissance:</label>
                    <input type="date" />
                    <label>Adresse:</label>
                    <input type="text" />
                    <label>Lieu de résidence:</label>
                    <input type="text" />
                    <label>Durée de location:</label>
                    <input type="number" />
                    <label>Date et heure de sortie:</label>
                    <input type="datetime-local" />
                    <label>Date et heure de retour:</label>
                    <input type="datetime-local" />
                </div>
            </div>
        </form>

    )
}

export default Clientform