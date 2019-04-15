const fs = require('fs');

exports.test = function(req,res){
    var lire =  fs.readFileSync('./Model/test.json', 'utf8')
    var parser = JSON.parse(lire)
    res.send(parser);   
}
exports.default = function (req, res) {
    res.send('hello world')
}
exports.list = function(req,res){
    var lire =  fs.readFileSync('./Model/note.json', 'utf8')
    var parser = JSON.parse(lire)
    res.send(parser);    
}

exports.posterlist = function(req, res){ 
    var nom  = req.body.nom;
    var prenom  = req.body.Prenom; 
   
 
    var readfichier = fs.readFileSync('./Model/note.json', 'utf8')
   
    var  data = JSON.parse(readfichier)
          
     if (data.length > 0){
         var  id = data[data.length-1].id + 1
     }
     else {
          id = 0;
     }

    data.push({"id": id,"nom": nom,"Prenom": prenom})
    
    res.send(data)
    fs.writeFileSync('./Model/note.json', JSON.stringify(data))

}

exports.editlist = function(req, res){ 

    var nom  = req.body.nom;
    var prenom  = req.body.Prenom; 
    var id = parseInt(req.body.id);  
    var readfichier = fs.readFileSync('./Model/note.json', 'utf8')
    
    var  data = JSON.parse(readfichier)
    
    for(var i=0;i<data.length;i++){
         if(i+1==id)
         {
              if(nom)
              {
                   data[i].nom=nom;
              }
              if(prenom)
              {
                   data[i].Prenom=prenom;
                   
              }
         }         
    }
    res.send(data)
   fs.writeFileSync('./Model/note.json', JSON.stringify(data))
}
exports.supprimerlist = function(req, res){ 
    var id = req.body.id;  
    var readfichier = fs.readFileSync('./Model/note.json', 'utf8')
    var  data = JSON.parse(readfichier)

    for(var i=0;i<data.length;i++){
         if (data[i].id==id) {
              data.splice(i,1)   
         }     
    }
    res.send(data)
   fs.writeFileSync('./Model/note.json', JSON.stringify(data))
}
