import React, { Component } from 'react';


 class Ajouter extends Component { 
  render() {
    return (
      <div>
        <form action="http://localhost:8080/list" method="POST">
          <div className="center">
            <label>Nom</label>
            <input type="text" name="nom"/><br/>
            <label>Prenom</label>
            <input type="text" name="Prenom"/><br/>
            <button onClick={(e)=>{
                //e.preventDefault()
              alert("profil a bien ajoutée")}}>Ajouter</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Ajouter;