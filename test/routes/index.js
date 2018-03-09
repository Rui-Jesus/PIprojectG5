var express = require('express');
var router = express.Router();
var mongodb= require('mongodb');
var logger; // user de login
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


/*localhost:3000 --> login page
  localhost:3000/newuser -> new user
  localhost:3000/togetherjs -> together js part
  localhost:3000/menu -> main page

/*Other urls and their .jade file -- get routing*/

/*newuser*/
router.get('/newuser',function(req,res){
  res.render('newuser',{title:'Add new User'});
});
/*togetherjs part*/
router.get('/togetherjs',function(req,res){
  res.render('togetherjs',{title:'TogetherJs Component'});
});

router.get('/test',function(req,res){
  res.render('test',{title:'TogetherJs Component'});
});


/*Routing  to confirm the login and redirect to either the main menu or to the login again if the password is incorrect*/
router.post('/',function(req,res){
  var MongoClient= mongodb.MongoClient;
  var url='mongodb://localhost:27017/testdb';
    MongoClient.connect(url,function(err,db){
      if(err){
        console.log("Unable to connect to the server",err);
      }
      else{
        console.log("Connection Established");
      }
      var collection = db.collection('testdb');
      logger=req.body.username;
      collection.find({username:logger}).toArray(function(err,result){
        if(err){
          res.send(err);
        }
        else if (result.length){
          if(result[0].password===req.body.password){
           
            res.redirect("menu");
          }
          else{
            res.render('login',{error:'Username or password incorrect'});
          }
        }
        else{
          res.render('login',{error:'Username or password incorrect'});
        }
        db.close();
      });
    });
  })

/*Routing to insert a new user -- incomplete to the new db */
router.post('/adduser',function(req,res){
	var MongoClient= mongodb.MongoClient;
	var url='mongodb://localhost:27017/testdb';
  	MongoClient.connect(url,function(err,db){
  		if(err){
  			console.log("Unable to connect to the server",err);
  		}
  		else{
  			console.log("Connection Established");
  		}
  		var collection = db.collection('testdb');
  		var user1={ username:req.body.username, password:req.body.password, personal_information: { firstname: req.body.firstname, lastname:req.body.lastname, email:req.body.email, gender:req.body.gender}}
  		collection.insert([user1], function (err,result){
  			if(err){
  				console.log(err);
  			}
  			else{
  				res.redirect("test");
  			}
  			db.close();
  		})
  	});
});

/*To get all the info from db -- more like a test function*/
router.get('/menu',function(req,res){
  var MongoClient= mongodb.MongoClient;
  var url='mongodb://localhost:27017/testdb';
    MongoClient.connect(url,function(err,db){
      if(err){
        console.log("Unable to connect to the server",err);
      }
      else{
        console.log("Connection Established");
      }
      var collection = db.collection('testdb');
      collection.find({username:logger}).toArray(function(err,result){
        if(err){
          res.send(err);
        }
        else if (result.length){
          
          res.render('menu',{"resultado":result});
        }
        else{
          res.send('No documents found');
        }
        db.close();
      });
    });
})

module.exports = router;
