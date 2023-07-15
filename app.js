const express = require('express');
let axios = require('axios');
const app = express(); //changed from var to const

app.use(express.json());  //this was missing. 


app.post('/test', (req, res) => {
  console.log(req.body)
  return res.json(req.body)   
})




app.get('/test2', function (req, res) {
  

  res.json({"test" : "ok"})
})

app.post('/', function(req, res, next) {
  
  
  try {
    
    let results = req.body.developers.map(async d => { 
      return await axios.get(`https://api.github.com/users/${d}`);
      
    });
    console.log(results)
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));  // name is undefined
    console.log(`OUTPUT: ${out}`)
    return res.send(JSON.stringify(out));
    // return res.json(out)
  } catch (err) {   // did not pass in err
    console.log(`ERROR: ${err}`)   //ERROR: TypeError: Cannot read properties of undefined (reading 'developers')
    next(err);
  }
});


// app.listen(3000);

app.listen(3000, () => {
  
  console.log('Server running on port 3000')
});