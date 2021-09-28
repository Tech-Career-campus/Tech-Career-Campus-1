// const server = require("../server/server");
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);

// describe("API REST /api/homework", () => {
//   it("is GET by id of course homework ", (done) => {
//     const id = "6131cf7231323fbda852fc2f";
//     chai.request(server)
//       .get("/api/homework/" + id)
//       .end((err, res) => {
//         const data = res.body.data;
//         console.log(data);
//         res.should.have.status(200);
//         data.should.be.a("object");
//         data.should.have.property("_id");
//         data.should.have.property("subject");
//         data.should.have.property("description");
//         data.should.have.property("courseId").eq(id);
//         done();
//       });
//   });

//   it("is NOT GET by id of course homework ", (done) => {
//     const id = "";
//     chai.request(server)
//       .get("/api/homework/" + id)
//       .end((err, res) => {
//         const data = res.body.data;
//         res.should.have.status(404);
//         res.text.should.be.eq(
//           "<!DOCTYPE html>\n" +
//             '<html lang="en">\n' +
//             "<head>\n" +
//             '<meta charset="utf-8">\n' +
//             "<title>Error</title>\n" +
//             "</head>\n" +
//             "<body>\n" +
//             "<pre>Cannot GET /api/homework/</pre>\n" +
//             "</body>\n" +
//             "</html>\n"
//         );
//         done();
//       });
//   });

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
//   });

// // it("is PUT a homework", (done) => {
// //   const newHomework = {
// //     id: "6131cf7231323fbda852fc2f",
// //     subject: "new homework",
// //     description: "sdddggggggggggg",
// //     link: "",
// //     role:"Staff",
// //   };
// //   chai.request(server)
// //     .put("/api/homework/")
// //     .send(newHomework)
// //     .end((err, res) => {
// //       const data = res.body.data;
// //       res.should.have.status(201);
// //       data.should.be.a("object");
// //       data.should.have.property("subject").eq(newHomework.subject);
// //       data.should.have.property("description").eq(newHomework.description);
// //       data.should.have.property("courseId").eq(newHomework.id);
// //       done();
// //     });
// // });

// });


