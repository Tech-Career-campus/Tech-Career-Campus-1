const server = require("../server/server");
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);


let token ;

describe('User token',async()=>{
it("is GET all of class schedule  ",async (done) => {
chai.request(server)
.post('/api/login')
.send({email:"czauda@gmail.com",password:"pS07rJ5m",role:"Student"})
.end((err,res)=>{
  res.should.have.status(200)
  token = res.body.data
  done()
})
})
})