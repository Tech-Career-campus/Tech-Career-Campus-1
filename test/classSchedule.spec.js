const server = require("../server/server");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const ScheduleModel = require('../server/models/classScheduleModel')

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlcyI6W10sIl9pZCI6IjYxNDg0YmMzYzEzNmZhNjEzNTY1YmQ5YyIsImZpcnN0TmFtZSI6IteX158iLCJsYXN0TmFtZSI6IteW15DXldeT15QiLCJlbWFpbCI6ImN6YXVkYUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDQ0NDQ0NTQiLCJwYXNzd29yZCI6IiQyYiQxMiRkWHNjQS5IQXJBeVdlaDRzRmlwYW5ld0RjM25oV2tCUEZXTGhiWUdzYlVlc256Nm5CekljVyIsImFnZSI6MjUsImNvdXJzZU5hbWUiOiLXpNeZ16rXldeXINeeIiwiY291cnNlSWQiOiI2MTMxY2Y3MjMxMzIzZmJkYTg1MmZjMmYiLCJyb2xlIjoiU3R1ZGVudCIsInByb2ZpbGVJbWciOiIiLCJJZE51bWJlciI6IiIsInRlc3RzIjpbXSwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yMFQwODo1MjoxOS44ODRaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yMlQxOTo1ODo0Ni4yMDRaIiwiX192IjowLCJpYXQiOjE2MzI4NDkwMTIsImV4cCI6MTYzMjkzNTQxMn0.s2i7H4PP-ldS1fUqLWIyg8zBwx45Sm9CCO2cZvZ0wxY"


describe("API REST /api/classSchedule", async () => {
  // it("is GET all of class schedule  ", done => {
  //   chai.request(server)
  //     .get("/api/classSchedule/")
  //     .set('Authorization',token)
  //     .end((err, res) => {
  //       const data = res.body.data;
  //       console.log(data);
  //       res.should.have.status(200);
  //       data.should.be.a("array");
  //       data[0].should.have.property("_id");
  //       data[0].should.have.property("days");
  //       data[0].days[0].should.have.property('hours')
  //       data[0].days[0].hours[0].should.have.property('_id').to.be.a('string')
  //       data[0].days[0].hours[0].should.have.property('className').to.be.a('string')
  //       data[0].days[0].hours[0].should.have.property('isTaken').to.be.a('boolean')
  //       data[0].days[0].hours[0].should.have.property('hour').to.be.a('string')
  //       done();
  //     });

  // });


  /////not working
  // it("is NOT GET all of class schedule  ", done => {
  //   chai.request(server)
  //     .get("/api/classSchedule/")
  //     .set('Authorization',token)
  //     .end((err, res) => {
  //       res.body.should.be.a('object')
  //       res.body.message.should.be.eq("invalid or expired token")
  //       res.should.have.status(401);
  //       // res.text.should.be.eq('{"success":"false","message": "invalid or expired token","error":"jwt expired"}')

  //       done();
  //     });

  // });

  ///////not working
  //   it("is GET class schedule by id  ", done => {
  //     const classSchedule = {
  //          days: [
  //            {
  //              hours:[
  //                {hour:'8-10',isTaken:true,className:'testing'}
  //              ]
  //            }
  //          ]
  //        }
  //   chai.request(server)
  //     .post("/api/classSchedule/")
  //     .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJjb3Vyc2VzIjpbXSwibWVzc2FnZXMiOlsiNjE1MWMzMGU3NTYwZjI3ODg4Y2U0OTM2IiwiNjE1MWQ1ZjdhNzM0NjM0ZThjODA2Y2M0Il0sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiJpbWFnZXNcXDE2MzI3NjU4MDMxOTRfZ2lybGF2YXRhci5qcGciLCJJZE51bWJlciI6IiIsImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15kiLCJsYXN0TmFtZSI6Iten15XXp9eUIiwiZW1haWwiOiJ0YWxpZ2VyZ3JlQGdtYWlsLmNvbSIsInBob25lIjoiMDU0NjI2NTU3NSIsInBhc3N3b3JkIjoiJDJiJDEyJDJyd21QdS5iUEcvdXl0QS4xbFZFei5WVEZNc2F3UnN6RTdaNVRJbXVYWTBoUnlUZTU5VHFpIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0xM1QxODoxMjo0OC41MjJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yOFQxNToxMToyOS4yOTBaIiwiX192IjozLCJpYXQiOjE2MzI4NTMyMjAsImV4cCI6MTYzMjkzOTYyMH0.2qBFkNahqbpY_gvnBwLuAVDxf0ca2qIVoRq6DWK3VPE' )
  //       .send(classSchedule)
  //     .end((err, res) => {
  //     console.log(res.text)
  //       res.should.have.status(201);

  //       done();
  //     });
  //     afterEach(async () => {
  //       await ScheduleModel.deleteOne({className: "testing"})
  //   })

  // });


  //  it("is NOT GET class schedul  by id ", (done) => {
  const isTaken = 'isTaken'
  const spot = 'isTaken'
  const hours = 'hours'
  const classId = '6147aa0d5adea82a506a1dd4'
  const dayId = '6147aa0d5adea82a506a1dd5'
  const hourId = '6147aa0d5adea82a506a1dd6'

  it('it should UPDATE a classSchedule given the id', (done) => {
    const classId = '6147aa0d5adea82a506a1dd4'
    const hourId = '6147aa0d5adea82a506a1dd6'
    // ScheduleModel.findByIdAndUpdate((err, resulte) => {
    chai.request(server)
      .put('/api/classSchedule')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJjb3Vyc2VzIjpbXSwibWVzc2FnZXMiOlsiNjE1MWMzMGU3NTYwZjI3ODg4Y2U0OTM2IiwiNjE1MWQ1ZjdhNzM0NjM0ZThjODA2Y2M0Il0sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiJpbWFnZXNcXDE2MzI3NjU4MDMxOTRfZ2lybGF2YXRhci5qcGciLCJJZE51bWJlciI6IiIsImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15kiLCJsYXN0TmFtZSI6Iten15XXp9eUIiwiZW1haWwiOiJ0YWxpZ2VyZ3JlQGdtYWlsLmNvbSIsInBob25lIjoiMDU0NjI2NTU3NSIsInBhc3N3b3JkIjoiJDJiJDEyJDJyd21QdS5iUEcvdXl0QS4xbFZFei5WVEZNc2F3UnN6RTdaNVRJbXVYWTBoUnlUZTU5VHFpIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0xM1QxODoxMjo0OC41MjJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yOFQxNToxMToyOS4yOTBaIiwiX192IjozLCJpYXQiOjE2MzI4NTMyMjAsImV4cCI6MTYzMjkzOTYyMH0.2qBFkNahqbpY_gvnBwLuAVDxf0ca2qIVoRq6DWK3VPE')
      .send({
        _id: classId,
        days: [
          {
            _id: dayId,
            hours: [
              { _id: hourId, hour: '8-10', isTaken: false, className: 'testing' }
            ]
          }]
      })
      .end((err, res) => {
        console.log(res.text)
        res.should.have.status(200);
        // res.body.should.be.a('object');
        // res.body.should.have.property('message').eql('Book updated!');
        // res.body.book.should.have.property('year').eql(1950);
        done();
      })
    //  chai.request(server)
    //    .put("/api/classSchedule/")
    //    .set('Authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJjb3Vyc2VzIjpbXSwibWVzc2FnZXMiOlsiNjE1MWMzMGU3NTYwZjI3ODg4Y2U0OTM2IiwiNjE1MWQ1ZjdhNzM0NjM0ZThjODA2Y2M0Il0sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiJpbWFnZXNcXDE2MzI3NjU4MDMxOTRfZ2lybGF2YXRhci5qcGciLCJJZE51bWJlciI6IiIsImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15kiLCJsYXN0TmFtZSI6Iten15XXp9eUIiwiZW1haWwiOiJ0YWxpZ2VyZ3JlQGdtYWlsLmNvbSIsInBob25lIjoiMDU0NjI2NTU3NSIsInBhc3N3b3JkIjoiJDJiJDEyJDJyd21QdS5iUEcvdXl0QS4xbFZFei5WVEZNc2F3UnN6RTdaNVRJbXVYWTBoUnlUZTU5VHFpIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0xM1QxODoxMjo0OC41MjJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yOFQxNToxMToyOS4yOTBaIiwiX192IjozLCJpYXQiOjE2MzI4NTMyMjAsImV4cCI6MTYzMjkzOTYyMH0.2qBFkNahqbpY_gvnBwLuAVDxf0ca2qIVoRq6DWK3VPE')
    //   //  .send()
    //  .end((err, res) => {
    //   res.should.have.status(403);
    //   res.body.message.to.be.eq("you don\'t have access")
    //   res.text.should.be.eq('{"success":"false","message":"you don\'t have access"}')
    //   res.text.should.be.eq(
    //     "<!DOCTYPE html>\n" +
    //     '<html lang="en">\n' +
    //     "<head>\n" +
    //     '<meta charset="utf-8">\n' +
    //     "<title>Error</title>\n" +
    //     "</head>\n" +
    //     "<body>\n" +
    //     "<pre>Cannot GET /api/homework/</pre>\n" +
    //     "</body>\n" +
    //     "</html>\n"
    //   );
    //   done();
    // });
  });

  //   it("is POST new homework", (done) => {
  //     const newHomework = {
  //       id: "6131cf7231323fbda852fc2f",
  //       subject: "new homework",
  //       description: "sdddggggggggggg",
  //       link: "",
  //       role:"Staff",
  //     };
  //     chai.request(server)
  //       .post("/api/homework/")
  //       .send(newHomework)
  //       .end((err, res) => {
  //         const data = res.body.data;
  //         res.should.have.status(201);
  //         data.should.be.a("object");
  //         data.should.have.property("subject").eq(newHomework.subject);
  //         data.should.have.property("description").eq(newHomework.description);
  //         data.should.have.property("courseId").eq(newHomework.id);
  //         done();
  //       });
  //   });

  //   it("it should NOT POST new homework without a require field for example description" ,(done)=> {
  //     const newHomework = {
  //         id: "6131cf7231323fbda852fc2f",
  //         subject: "new homework",
  //         link: "",
  //         role:"Staff",
  //       };
  //  chai.request(server)
  //       .post("/api/homework/")
  //       .send(newHomework)
  //       .end((err, res) => {
  //           res.should.have.status(400);
  //           res.text.should.be.eq('{"message":"create new homework filed","error":"homework validation failed: description: Path `description` is required."}')
  //           done();
  //       })
  //   })

});


// const signUp = 'api/login'
// const preSave = { email: "chen@gmail.com", password: "12345678", role: 'Staff' }
// const user = { email: "czauda@gmail.com", password: "pS07rJ5m", role: "Student" }



// describe('User token', async () => {

//   it('bla', done => {
//     chai.request(server)
//       .get('api/classSchedule')
//       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlcyI6W10sIl9pZCI6IjYxNDg0YmMzYzEzNmZhNjEzNTY1YmQ5YyIsImZpcnN0TmFtZSI6IteX158iLCJsYXN0TmFtZSI6IteW15DXldeT15QiLCJlbWFpbCI6ImN6YXVkYUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDQ0NDQ0NTQiLCJwYXNzd29yZCI6IiQyYiQxMiRkWHNjQS5IQXJBeVdlaDRzRmlwYW5ld0RjM25oV2tCUEZXTGhiWUdzYlVlc256Nm5CekljVyIsImFnZSI6MjUsImNvdXJzZU5hbWUiOiLXpNeZ16rXldeXINeeIiwiY291cnNlSWQiOiI2MTMxY2Y3MjMxMzIzZmJkYTg1MmZjMmYiLCJyb2xlIjoiU3R1ZGVudCIsInByb2ZpbGVJbWciOiIiLCJJZE51bWJlciI6IiIsInRlc3RzIjpbXSwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yMFQwODo1MjoxOS44ODRaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yMlQxOTo1ODo0Ni4yMDRaIiwiX192IjowLCJpYXQiOjE2MzI2NTE2MjYsImV4cCI6MTYzMjczODAyNn0.iOy6UqY1vRYB5RhHtdysMmkBFFohk5DpLN4VOwIVJv8')
//       .end((err, res) => {
//         const data = res.body.data;
//         console.log(data);
//         res.should.have.status(200);
//         data.should.be.a("array");
//         done()
//       })

//   })
// })




///////////////////////////