async function check(req, res) {
    try {
      const a = await someOtherFunction();
      const b = await somethingElseFunction();
      res.send("result")
    } catch (error) {
      res.send(error.stack);
    }
  }

  async function check(req, res){

      Promisify[await someOtherFunction(), await somethingElseFunction()].then(() =>{
        res.send("result");
      }).catch((error)=>{
        res.send(error.stack);
      }) 
    
  } 