import React, { Component } from 'react';


 class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resAPI: ""
    };
  }


  componentWillMount() {
    fetch('http://localhost:3000/test')
      .then(res => res.text())
      .then(data => this.setState({ resAPI: data }));
  }
  
  render() {
    return (
      <div className="contact">
        <h1>TEST</h1>
        <button onClick={()=>{
            var list = this.state.resAPI
            var lister = JSON.parse(list)
          for(var i=0;i<lister.length;i++)
          {
            document.getElementById("rer").innerHTML += lister[i].nom + " ";
            document.getElementById("rer").innerHTML += lister[i].Prenom+ "<br>";
          }
            }}>
            Liste des tests
        </button>
        <p id="rer"></p>
      </div>
    )
  }
}

export default Test;