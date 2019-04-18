import React, { Component } from 'react';

 class Ajouter extends Component { 
  render() {
    return (
          <div id="ajout">
              <form action="http://localhost:8080/list" method="POST">
            	<label>Nom &nbsp;&nbsp;</label>
              <input id="zonetextnom" type="text" name="nom" required/>
              <label id="nom">&nbsp;&nbsp;Prénom &nbsp;&nbsp;</label>
              <input id="zonetextnom" type="text" name="Prenom" required/>
              &nbsp;&nbsp;
			        &nbsp;&nbsp;
              <button class="btn btn-primary" id="bouttonajouter"
            >Ajouter </button>
              </form>
          </div>

    )
  }
}

export default Ajouter;