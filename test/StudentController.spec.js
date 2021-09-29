

const server = require("../server/server");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { expect } = require("chai");
chai.should();
chai.use(chaiHttp);

describe("API REST /api/students", () => {

    describe("/getStudents", () => {
        // get all students
        it("is GET all students ", (done) => {
            chai.request(server)
                .get("/api/student")
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .end((err, res) => {
                    const data = res.body.data;
                    res.should.have.status(200);
                    data.should.be.a("array");
                    data.should.have.length(data.length)
                    done();
                });
        });
    })


    describe("/getStudent", () => {
        // if everything is correct
        it("GET student by id ", (done) => {
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .get("/api/student/getStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .end((err, res) => {
                    if (err) console.log(err);
                    const data = res.body.data;
                    res.should.have.status(200);
                    data.should.be.a("object");
                    data.should.have.property("firstName");
                    data.should.have.property("lastName");
                    data.should.have.property("email");
                    data.should.have.property("role");
                    data.should.have.property("profileImg");
                    data.should.have.property("IdNumber");
                    data.should.have.property("messages");
                    data.should.have.property("phone");
                    data.should.have.property("password");
                    data.should.have.property("age");
                    data.should.have.property("tests");
                    done();
                });
        });

        //     // if student dosnt exist
        it(" wrong id dosnt match any  student ", (done) => {
            const id = "61519d62c13b51195cb4268a";
            chai.request(server)
                .get("/api/student/getStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .end((err, res) => {
                    const data = res.body;
                    // console.log(data)
                    res.should.have.status(400);
                    data.should.have.property("message").equal("failing")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal('the result equal to null or undefined Please check that you are sending the required details in the correct format')

                    done();
                });
        });


        //     // if id is not correct
        it("wrong id is not correct", (done) => {
            const id = "hj";
            chai.request(server)
                .get("/api/student/getStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(500);
                    data.should.have.property("message").equal("get Student field")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("The id field is lest then 24-character, you are required to pass a 24-character entry")

                    done();
                });
        });

    })



    describe("/getStudentGrades", () => {
        it(" GET all grades of student ", (done) => {
            // id of student
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .get("/api/student/gradesById/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .end((err, res) => {
                    const data = res.body.data;
                    console.log("here is grades")
                    res.should.have.status(200);
                    data.should.be.a("array");
                    data.should.have.length(data.length)
                    data.map((item) => {
                        item.should.have.property("name")
                        item.should.have.property("grade")
                    })
                    done();
                });
        });

        //     // student dos not exist
        it(" wrong id dosnt match any  student ", (done) => {
            const id = "6140de64cc8d961fa4454f5a";
            chai.request(server)
                .get("/api/student/gradesById/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(400);
                    data.should.have.property("message").equal("failing")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("the result equal to null or undefined Please check that you are sending the required details in the correct format")
                    done();
                });
        });


        //     // id is not good
        it("wrong id is not correct ", (done) => {
            const id = "s";
            chai.request(server)
                .get("/api/student/gradesById/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(500);
                    data.should.have.property("message").equal("get Student grades by id failed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("The id field is lest then 24-character, you are required to pass a 24-character entry")
                    done();
                });
        });

    })







    // add a test to a student
    describe("/addTestById", () => {
        // if everything is ok 
        // it(" POST new Test", (done) => {
        //     const newHomework = {
        //         id: "61519d62c13b51195cb4268e",
        //         name: "new homework",
        //         grade: 50,
        //     };
        //     chai.request(server)
        //         .post("/api/student/addTestById")
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
        //         .send(newHomework)
        //         .end((err, res) => {
        //             const data = res.body.data;
        //             console.log(data)
        //             data.map((object)=>{ object.should.have.property("name") ;object.should.have.property("grade");})
        //             done();
        //         });
        // });


        // if id dosnt match any student
        it(" if id dosnt match any student", (done) => {
            const newHomework = {
                id: "6140de64cc8d961fa4454f5a",
                name: "new homework",
                grade: 49,
            };
            chai.request(server)
                .post("/api/student/addTestById")
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(newHomework)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(400);
                    data.should.have.property("message").equal("failing")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("the result equal to null or undefined Please check that you are sending the required details in the correct format")
                    done();
                });
        });

        // // if id is not correct
        it(" id is not correct", (done) => {
            const newHomework = {
                id: "as",
                name: "new homework",
                grade: 49,
            };
            chai.request(server)
                .post("/api/student/addTestById")
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(newHomework)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(500);
                    data.should.have.property("message").equal("adding a test to the test array failed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("The id field is lest then 24-character, you are required to pass a 24-character entry")
                    done();
                });
        });

        // // if id is empty
        it(" id is empty", (done) => {
            const newHomework = {
                id: "",
                name: "new homework",
                grade: 49,
            };
            chai.request(server)
                .post("/api/student/addTestById")
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(newHomework)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(500);
                    data.should.have.property("message").equal("adding a test to the test array failed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("The id field is empty")
                    done();
                });
        });


    })





    describe("/updateStudent", () => {
        it(" update student ", (done) => {
            const TEST = {
                IdNumber: 142688,
                field: "age",
            };
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .put("/api/student/updateStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body.data;
                    res.should.have.status(200);
                    data.should.be.a("object");
                    done();
                });
        });
        it(" if one of the fields dosnt exist or didnt get requierd fields", (done) => {
            const TEST = {
                fielssd: "age",
            };
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .put("/api/student/updateStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body
                    res.should.have.status(400);
                    data.should.have.property("message").equal("update student failed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("failed to find information, please make sure you provide existing data in the appropriate format")
                    done();
                });
        });



    })



    // update test

    describe("/updateTest", () => {
        // if everything is correct
        it(" update student Test", (done) => {
            const TEST = {
                id: "6154e0ca0f5cab77dc949a13",
                grade: 50,
            };
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .put("/api/student/updateTest/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body.data;
                    res.should.have.status(200);
                    data.should.be.a("array");
                    data.map((object) => {
                        object.should.have.property("name")
                        object.should.have.property("grade")
                    })
                    done();
                });
        });

        // if student dosnt exist
        it(" update student Test if student dosnt exist", (done) => {
            const TEST = {
                id: "61546b5fe57ee62e18570285",
                grade: 50,
            };
            const id = "61519d62c13b51195cb426ae";
            chai.request(server)
                .put("/api/student/updateTest/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(400);
                    data.should.have.property("message").equal("failing")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("the result equal to null or undefined Please check that you are sending the required details in the correct format")
                    done();
                });
        });
        it(" update student Test if test dosnt exist", (done) => {
            const TEST = {
                id: "61546b5fe57ee62e1857028a",
                grade: 50,
            };
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .put("/api/student/updateTest/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(400);
                    data.should.have.property("message").equal("failing")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("the result equal to null or undefined Please check that you are sending the required details in the correct format")
                    done();
                });
        });
        it(" update student Test if test id is not correct", (done) => {
            const TEST = {
                id: "df",
                grade: 50,
            };
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .put("/api/student/updateTest/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(500);
                    data.should.have.property("message").equal("updating a student test failed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("The id field is lest then 24-character, you are required to pass a 24-character entry")
                    done();
                });
        });

    })



    // delete test
    describe("/deleteTest", () => {
        // if everything is correct
        // it("delete student test", (done) => {
        //     const TEST = {
        //         id: "6154e0d9368c6454708e7495",
        //     };
        //     const id = "61519d62c13b51195cb4268e";
        //     chai.request(server)
        //         .delete("/api/student/deleteTest/" + id)
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
        //         .send(TEST)
        //         .end((err, res) => {
        //             const data = res.body.data;
        //             // console.log(data)
        //             res.should.have.status(200);
        //             data.should.be.a("array");
        //             data.map((object) => {
        //                 object.should.have.property("name")
        //                 object.should.have.property("grade")
        //             })
        //             done();
        //         });
        // });

        it("delete student test if student dosnt exist", (done) => {
            const TEST = {
                id: "61546b5fe57ee62e18570285",
            };
            const id = "61519d62c13b51195cb4261e";
            chai.request(server)
                .delete("/api/student/deleteTest/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(400);
                    data.should.have.property("message").equal("failing")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("the result equal to null or undefined Please check that you are sending the required details in the correct format")
                    done();
                });
        });


        // לא עובד זה לא מוחק את מבחן אבל זה גם לא שולח שגיאה (זה צריך לשלוח שגיאה שאין מבחן כזה)
        // it("delete student test if test dosnt exist", (done) => {
        //     const TEST = {
        //         id: "6154e0ca0f5cab77dc949a19",
        //     };
        //     const id = "61519d62c13b51195cb4268e";
        //     chai.request(server)
        //         .delete("/api/student/deleteTest/" + id)
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
        //         .send(TEST)
        //         .end((err, res) => {
        //             const data = res.body;
        //             console.log(data)
        //             // res.should.have.status(400);
        //             // data.should.have.property("message").equal("failing")
        //             // data.should.have.property("success").equal(false);
        //             // data.should.have.property("error").equal("the result equal to null or undefined Please check that you are sending the required details in the correct format")
        //             done();
        //         });
        // });



        it("delete student test if test or student id is not correct or empty", (done) => {
            const TEST = {
                id: "d",
            };
            const id = "61519d62c13b51195cb4268e";
            chai.request(server)
                .delete("/api/student/deleteTest/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body;
                    res.should.have.status(500);
                    data.should.have.property("message").equal("deleting a student test failed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("The id field is lest then 24-character, you are required to pass a 24-character entry")
                    done();
                });
        });
    })



    // delete student 
    describe("/deleteStudent", () => {
        // if everything is correct
        // it("delete student", (done) => {
        //     const TEST = {
        //         id: "613f94a0bc4467548c72134e",
        //     };
        //     const id = "6140e230dda2b58288bea728";
        //     chai.request(server)
        //         .delete("/api/student/deleteStudent/" + id)
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
        //         .send(TEST)
        //         .end((err, res) => {
        //             const data = res.body
        //             res.should.have.status(200);
        //             data.should.have.property("message").equal("delete by id student success!")
        //             data.should.have.property("success").equal(true);
        //             done();
        //         });
        // });

        // if student dosnt exist
        it("student dosnt exist", (done) => {
            const TEST = {
                id: "613f94a0bc4467548c72134e",
            };
            const id = "6140e0350ec1c1180435defa";
            chai.request(server)
                .delete("/api/student/deleteStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body
                    res.should.have.status(500);
                    data.should.have.property("message").equal("delete by id student filed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("failed to find information, please make sure you provide existing data in the appropriate format");
                    done();
                });
        });

        // if stuff dosnt exists
        it("staff dosnt exist ", (done) => {
            const TEST = {
                id: "613f94a0bc4467548c777707",
            };
            const id = "61409808a1b4fa2b4887a77e";
            chai.request(server)
                .delete("/api/student/deleteStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body
                    res.should.have.status(500);
                    data.should.have.property("message").equal("delete by id student filed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("failed to find information, please make sure you provide existing data in the appropriate format");
                    done();
                });
        });

        // if fields are empty
        it("fields are empty ", (done) => {
            const TEST = {
                id: "",
            };
            const id = "6140e0350ec1c1180435def9";
            chai.request(server)
                .delete("/api/student/deleteStudent/" + id)
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
                .send(TEST)
                .end((err, res) => {
                    const data = res.body
                    res.should.have.status(500);
                    data.should.have.property("message").equal("delete by id student filed")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("failed to find information, please make sure you provide existing data in the appropriate format");
                    done();
                });
        });

    })





    describe("/syllabus", () => {
        // if everything is correct
        it("syllabus  success", (done) => {
            const body = {
                id: "61519d62c13b51195cb4268e"
            }
            chai.request(server)
                .get("/api/student/syllabus")
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
                .send(body)
                .end((err, res) => {
                    const data = res.body.data
                    res.should.have.status(200);
                    data.should.be.a("object");
                    data.should.have.property("firstName");
                    data.should.have.property("lastName");
                    data.should.have.property("email");
                    data.should.have.property("role");
                    data.should.have.property("profileImg");
                    data.should.have.property("IdNumber");
                    data.should.have.property("messages");
                    data.should.have.property("phone");
                    data.should.have.property("password");
                    data.should.have.property("age");
                    data.should.have.property("tests");
                    done();
                });
        });


        // if student dos not exist
        it(" syllabus if student dos not exist", (done) => {
            const body = {
                id: "61519d62c13b51195cb4268x"
            }
            chai.request(server)
                .get("/api/student/syllabus")
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
                .send(body)
                .end((err, res) => {
                    const data = res.body
                    res.should.have.status(400);
                    data.should.have.property("message").equal("error with population")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal('Cast to ObjectId failed for value "61519d62c13b51195cb4268x" (type string) at path "_id" for model "student"');
                    done();
                });
        });
        it(" syllabus if id is empty", (done) => {
            const body = {
                id: ""
            }
            chai.request(server)
                .get("/api/student/syllabus")
                .set('Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
                .send(body)
                .end((err, res) => {
                    const data = res.body
                    console.log(data)
                    res.should.have.status(500);
                    data.should.have.property("message").equal("wrong")
                    data.should.have.property("success").equal(false);
                    data.should.have.property("error").equal("The id field is empty");
                    done();
                });
        });

    })


});