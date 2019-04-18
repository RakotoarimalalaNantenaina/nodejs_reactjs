import React, { Component } from 'react';


 class Ajouter extends Component { 
  render() {
    return (
      <div className="ajout">
        <form action="http://localhost:8080/list" method="POST">
          <div className="center">
            <label>Nom</label>&nbsp;&nbsp;
            <input id="zonetextnom" type="text" name="nom"/>&nbsp;&nbsp;
            <label>Prenom</label>&nbsp;&nbsp;
            <input id="zonetextnom" type="text" name="Prenom"/>&nbsp;&nbsp;
            <button onClick={(e)=>{
                //e.preventDefault()
              alert("profil a bien ajoutée")}} className="btn btn-primary">Ajouter</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Ajouter;