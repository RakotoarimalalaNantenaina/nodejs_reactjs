import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 


 class List extends Component {

constructor(props){
  super(props);
  this.state = {
    list: []
  }
}

// Récupère la liste 
componentDidMount() {
  this.getList();
}

// Récupère la liste des éléments de l'application Express
getList = () => {
  fetch('http://localhost:3000/list')
  .then(res => res.json())
  .then(list => this.setState({ list }))
}

render() {
  const { list } = this.state;

  return (
    <div className="App">

      <button onClick={()=>{
        document.getElementById("name").style.display = "block";
      }}>Lister</button>

      
      {/*Vérifiez si des objets sont trouvés */}
      {list.length ? (
        <ul >
          {/* Rendre la liste des articles */}
          {list.map((item) => {
            return(
              <div id="name">
                <li id="listedonne">{item.nom} &nbsp; {item.Prenom} <button onClick={()=>{
                    confirmAlert({
                      customUI: ({ onClose }) => {
                        return (
                          <form method="POST" action="http://localhost:3000/list?_method=PUT" enctype="application/x-www-form-urlencoded">
                            <div className='custom-ui'>
                            
                              <label>Nom : </label><input type="text" placeholder={item.nom} name="nom"/><br/><br/>
                              <label>Prenom : </label><input type="text" placeholder={item.Prenom} name="Prenom"/><br/>
                            
                              <button  type="submit"> Modifier </button> &nbsp;
                              <button onClick={onClose}>Annuler</button>
                          </div>
                          </form>
                        );
                      }
                    })
                }
                }>modifier</button></li><br/>
              </div>
            );
          })}
        </ul>
      ) : (
        <div>
          <h2>Aucune enregistrement</h2>
        </div>
      )
    }
    </div>
  );
}
}

export default List;