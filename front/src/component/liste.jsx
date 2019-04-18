import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import Ajouter from './ajouter'
import 'bootstrap/dist/css/bootstrap.min.css';


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
  fetch('http://localhost:8080/list')
  .then(res => res.json())
  .then(list => this.setState({ list }))
}

render() {
  const { list } = this.state;

  return (  
        <div className="container">
        <div className="flex-row">
          <div className="flex-large">
           <Ajouter/>
          </div>
        </div>
      <br/>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
          <th id="th1">Id</th>
          <th id="th1">Nom</th>
          <th id="th1">Prenom</th>
          <th id="th1">Actions</th>
          </tr>
        </thead>
        <tbody>
      
        {list.length ? (

              list.map(item => (
                <tr key={item.id}>
                  <td id="td1"><center>{item.id}</center></td>
                  <td id="td1"><center>{item.nom}</center></td>
                  <td id="td1"><center>{item.Prenom}</center></td>
                <td>
                <button onClick={()=>{
                    confirmAlert({
                      customUI: ({ onClose }) => {
                        return (
                          <div className='custom-ui' id="modifier">
                           <form method="POST" action="http://localhost:8080/list?_method=PUT" enctype="application/x-www-form-urlencoded">
                              <input type="hidden" name="_method" value="PUT"/>
                              <table>
                                <tr>
                                  <td><label>Nom :</label><input id="inputmodifiernom" type="text" name="nom" placeholder={item.nom}/></td>
                               </tr>
                               <tr>
                                  <td> <label>Prénom :</label><input id="inputmodifierprenom" type="text" name="Prenom" placeholder={item.Prenom}/></td>
                               </tr>                          
                            
                                  <input type="hidden" name="id" value={item.id}/>
                                    <div id="bouttonmodifier">
                                      <button className="btn btn-primary">OK</button>&nbsp;&nbsp;
                                      <button onClick={onClose} className="btn btn-secondary">Annuler</button>
                                  </div>
                              </table> 
                            </form>

                          </div>
                        );
                      }
                    })
                }
                } className="btn btn-success">Edit</button>&nbsp;&nbsp;
                
                <button onClick = {()=>{
                    confirmAlert({
                     customUI: ({ onClose }) => {
                       return (
                         <div className='custom-ui' id="supprimer">
                           <form method="POST" action="http://localhost:8080/list?_method=DELETE" enctype="application/x-www-form-urlencoded">
                             <input type="hidden" name="_method" value="DELETE"/>
                             <input type="hidden" name="id" value={item.id}/>

                             <span>Confirmer la suppression<br/>{item.nom}</span>
                             <br/><br/>
                           <button className="btn btn-danger">OUI</button>&nbsp;&nbsp;
                           <button onClick={onClose} className="btn btn-secondary">NON</button>
                           </form>
                         </div>
                       );
                     }
                   });
                  }} className="btn btn-danger">X</button> 
                </td>
                </tr>
              ))
              ) : (
              <tr>	
              </tr>
              )}        
    </tbody>
    </table>
    </div>
  );
}
}

export default List;