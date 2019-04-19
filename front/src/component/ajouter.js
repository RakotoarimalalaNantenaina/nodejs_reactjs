import React, { Component } from 'react';

 class Ajouter extends Component { 
  
  render() {
    return (
         
          <div className="container" id="containerajout"> 
          
            <form action="http://localhost:8080/list" method="POST">
          <div className="row">
            <div className="col-md-4">
              <label>Nom</label>
              <input id="zonetextnom" type="text" name="nom" required/>
            </div>
            <div className="col-md-6">
              <label>Prénom</label>
              <input id="zonetextnom" type="text" name="Prenom" required/>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary" id="bouttonajouter">Ajouter </button>
            </div>
          </div>
          </form>
        </div>
    )
  }
}

export default Ajouter;