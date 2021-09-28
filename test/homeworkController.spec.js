const server = require("../server/server");
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

// describe("API REST /api/homework", () => {
//   it("GET by id of course homework from /api/homework/:id", (done) => {
//     const id = "6131cf7231323fbda852fc2f";
//     chai
//       .request(server)
//       .get("/api/homework/" + id)
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
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

// })

// describe("API REST /api/homework", () => {

//   it("is NOT GET from /api/homework/:id when the ID is empty string", (done) => {
//     const id = "";
//     chai
//       .request(server)
//       .get("/api/homework/" + id)
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
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

// })

// describe("API REST /api/homework", () => {
//   it("POST to /api/homework/ a new homework ", () => {
//     const newHomework = {
//       id: "6131cf7231323fbda852fc2f",
//       subject: "new homework",
//       description: "klklklklklklklkl",
//       link: "",
//     };
//     chai
//       .request(server)
//       .post("/api/homework/")
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
//       .send(newHomework)
//       .end((err, res) => {
//         console.log(res)
//         const data = res.body.data;
//         res.should.have.status(201);
//         data.should.be.a("object");
//         data.should.have.property("subject").eq(newHomework.subject);
//         data.should.have.property("description").eq(newHomework.description);
//         data.should.have.property("courseId").eq(newHomework.id);
//         done();
//       });
//   });
// })

// describe("API REST /api/homework", () => {
//   it("it should NOT POST to /api/homework/ a new homework without a require field for example description", (done) => {
//     const newHomework = {
//       id: "6131cf7231323fbda852fc2f",
//       subject: "new homework",
//       link: "",
//       role: "Staff",
//     };
//     chai
//       .request(server)
//       .post("/api/homework/")
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
//       .send(newHomework)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.text.should.be.eq(
//           '{"success":false,"massage":"create new homework filed","error":"homework validation failed: description: Path `description` is required."}'
//         );
//         done();
//       });
//   });
// });


// describe("API REST /api/homework", () => {
//   it("PUT to /api/homework/:id", (done) => {
//     const id = "615167e06ab3de34e052ec9a";
//     const newHomework = {
//       id: "6131cf7231323fbda852fc2f",
//       subject: "put homework",
//       description: "kjhdsfzdxfghkljvcb",
//       link: "",
//     };
//     chai
//       .request(server)
//       .put("/api/homework/" +id)
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjc2NTgwMzE5NF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15kiLCJsYXN0TmFtZSI6Iten15XXp9eUIiwiZW1haWwiOiJ0YWxpZ2VyZ3JlQGdtYWlsLmNvbSIsInBob25lIjoiMDU0NjI2NTU3NSIsInBhc3N3b3JkIjoiJDJiJDEyJDJyd21QdS5iUEcvdXl0QS4xbFZFei5WVEZNc2F3UnN6RTdaNVRJbXVYWTBoUnlUZTU5VHFpIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0xM1QxODoxMjo0OC41MjJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yOFQxNToxMToyOS4yOTBaIiwiX192IjozLCJpYXQiOjE2MzI4NjkyNzgsImV4cCI6MTYzMjk1NTY3OH0.rtMvkgK1YY7bUMZJra1GtLi5MVOlrq4EFH3gIzjt5gw"
//       )
//       .send(newHomework)
//       .end((err, res) => {
//         const data = res.body.data;
//         console.log(res.text);
//         res.should.have.status(200);
//         data.should.be.a("object");
//         data.should.have.property("subject").eq(newHomework.subject);
//         data.should.have.property("description").eq(newHomework.description);
//         data.should.have.property("courseId").eq(newHomework.id);
//         done();
//       });
//   });

// })

// describe("API REST /api/homework", () => {
//   it("should NOT PUT to /api/homework/:id when the ID is empty string", (done) => {
//     const id = " ";
//     const newHomework = {
//       id: "6131cf7231323fbda852fc2f",
//       subject: "put homework",
//       description: "should not",
//       link: "",
//     };
//     chai
//       .request(server)
//       .put("/api/homework/" + id)
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
//       .send(newHomework)
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.type.should.be.eq('text/html');
//         done();
//       });
//   });

// })

// describe("API REST /api/homework", () => {
//   it("DELETE to /api/homework/:id", (done) => {
//     const id = "61516682206a272084b4e969";
//     chai
//       .request(server)
//       .delete("/api/homework/" + id)
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
//       .end((err, res) => {
//         console.log(res.text);
//         res.should.have.status(201);
//         res.text.should.be.a.eq('{"success":true,"massage":"delete by id homework success!"}');
//         done();
//       });
//   });
// })


// describe("API REST /api/homework", () => {
//   it("DELETE to /api/homework/:id failed because they did not give an ID certificate of the course in the body" , (done) => {
//     const id = " ";
//     chai
//       .request(server)
//       .delete("/api/homework/" + id)
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
//       .end((err, res) => {
//         console.log(res.text);
//         res.should.have.status(404);
//         done();
//       });
//   });
// });


// describe("API REST /api/homework", () => {
//   it("DELETE to /api/homework/:id failed because they did not give an ID certificate of the course in the body" , (done) => {
//     const id = "12345";
//     chai
//       .request(server)
//       .delete("/api/homework/" + id)
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6W10sIl9pZCI6IjYxM2Y5NGEwYmM0NDY3NTQ4YzcyMTM0ZSIsInJvbGUiOiJTdGFmZiIsInByb2ZpbGVJbWciOiIxNjMyNDEyMDIzMjMxX2dpcmxhdmF0YXIuanBnIiwiSWROdW1iZXIiOiIiLCJjb3Vyc2VzIjpbXSwiZXZlbnRzIjpbXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiLXoNeV15nXlCIsImxhc3ROYW1lIjoi16fXlden15QiLCJlbWFpbCI6InRhbGlnZXJncmVAZ21haWwuY29tIiwicGhvbmUiOiIwNTQ2MjY1NTc1IiwicGFzc3dvcmQiOiIkMmIkMTIkMnJ3bVB1LmJQRy91eXRBLjFsVkV6LlZURk1zYXdSc3pFN1o1VEltdVhZMGhSeVRlNTlUcWkiLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTEzVDE4OjEyOjQ4LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTIzVDE1OjQ3OjAzLjI3NFoiLCJfX3YiOjAsImlhdCI6MTYzMjY5MTA4MSwiZXhwIjoxNjMyNzc3NDgxfQ.x1NqSBkSjl47hsrCzO1FT_KtOmwt7l7hyptP3muXsfE"
//       )
//       .end((err, res) => {
//         console.log(res.text);
//         res.should.have.status(500);
//         done();
//       });
//   });
// });
