

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
    // get a student by id






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
    //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIyLCJqb2QiOiJTdGFmZiIsInJlc3BvbnNpYmxlIjoiIiwibWVzc2FnZXMiOltdLCJfaWQiOiI2MTUyMDljZDg0MzJjMzg4ZDhkYmQyZjIiLCJmaXJzdE5hbWUiOiLXmdem15fXpyIsImxhc3ROYW1lIjoi16fXodeZ15QiLCJlbWFpbCI6Iml0emhha0BnbWFpbC5jb20iLCJwaG9uZSI6IjUxNjQ4OTk2NSIsInBhc3N3b3JkIjoiJDJiJDEyJEVqNUNSZUNEcTVZNG1NNy42T3guWnVBaW51ZE1QYjEzaS9ENGZSdlVSWVhaRUVvWHJlNDZxIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6IiIsIklkTnVtYmVyIjoiIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwiX192IjowLCJpYXQiOjE2MzI4NDAzOTYsImV4cCI6MTYzMjkyNjc5Nn0.zDNJFvmYVo02XAqUtp8qVRymNacZAzOpA32XFsOOfaw')
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
        it(" update student Test", (done) => {
            const TEST = {
                age:16,
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
                    // data.should.be.a("object");
                    done();
                });
        });
    // it(" if one of the fields dosnt exist or didnt get requierd fields", (done) => {
    //     const TEST = {
    //         fielssd: "age",
    //     };
    //     const id = "61519d62c13b51195cb4268e";
    //     chai.request(server)
    //         .put("/api/student/updateStudent/" + id)
    //         .set('Authorization',
    //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTI3NTUxLCJleHAiOjE2MzMwMTM5NTF9.7wPMnC-QgMJYp_87o_WWFHBOkMWQcewwrwoqaa5lMgI')
    //         .send(TEST)
    //         .end((err, res) => {
    //             const data = res.body.data
    //             console.log(data)
    //             // res.should.have.status(400);
    //             // data.should.have.property("message").equal("adding a test to the test array failed")
    //             // data.should.have.property("success").equal(false);
    //             // data.should.have.property("error").equal("The id field is empty")
    //             done();
    //         });
    // });



    })

    // post new test
    // if everything is ok 
    // it(" POST new Test", (done) => {
    //   const newHomework = {
    //     id: "6140de64cc8d961fa4454f50",
    //     name: "new homework",
    //     grade: 10000,
    //   };
    //   chai.request(server)
    //     .post("/api/student/addTestById")
    //     .set('Authorization',
    //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIyLCJqb2QiOiJTdGFmZiIsInJlc3BvbnNpYmxlIjoiIiwibWVzc2FnZXMiOltdLCJfaWQiOiI2MTUyMDljZDg0MzJjMzg4ZDhkYmQyZjIiLCJmaXJzdE5hbWUiOiLXmdem15fXpyIsImxhc3ROYW1lIjoi16fXodeZ15QiLCJlbWFpbCI6Iml0emhha0BnbWFpbC5jb20iLCJwaG9uZSI6IjUxNjQ4OTk2NSIsInBhc3N3b3JkIjoiJDJiJDEyJEVqNUNSZUNEcTVZNG1NNy42T3guWnVBaW51ZE1QYjEzaS9ENGZSdlVSWVhaRUVvWHJlNDZxIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6IiIsIklkTnVtYmVyIjoiIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwiX192IjowLCJpYXQiOjE2MzI4NDAzOTYsImV4cCI6MTYzMjkyNjc5Nn0.zDNJFvmYVo02XAqUtp8qVRymNacZAzOpA32XFsOOfaw')
    //     .send(newHomework)
    //     .end((err, res) => {
    //       const data = res.body;
    //       console.log(data)
    //       res.should.have.status(200);
    //     //   data.should.be.a("array");
    //       done();
    //     });
    // });


    // post new test for student
    // if id of student dosnt exist
    // it(" POST new Test", (done) => {
    //     const newHomework = {
    //       id: "6140de64cc8d961fa4454f5a",
    //       name: "new homework",
    //       grade: 10000,
    //     };
    //     chai.request(server)
    //       .post("/api/student/addTestById")
    //       .set('Authorization',
    //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIyLCJqb2QiOiJTdGFmZiIsInJlc3BvbnNpYmxlIjoiIiwibWVzc2FnZXMiOltdLCJfaWQiOiI2MTUyMDljZDg0MzJjMzg4ZDhkYmQyZjIiLCJmaXJzdE5hbWUiOiLXmdem15fXpyIsImxhc3ROYW1lIjoi16fXodeZ15QiLCJlbWFpbCI6Iml0emhha0BnbWFpbC5jb20iLCJwaG9uZSI6IjUxNjQ4OTk2NSIsInBhc3N3b3JkIjoiJDJiJDEyJEVqNUNSZUNEcTVZNG1NNy42T3guWnVBaW51ZE1QYjEzaS9ENGZSdlVSWVhaRUVvWHJlNDZxIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6IiIsIklkTnVtYmVyIjoiIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwiX192IjowLCJpYXQiOjE2MzI4NDAzOTYsImV4cCI6MTYzMjkyNjc5Nn0.zDNJFvmYVo02XAqUtp8qVRymNacZAzOpA32XFsOOfaw')
    //       .send(newHomework)
    //       .end((err, res) => {
    //         const data = res.body;
    //         console.log(data)
    //         res.should.have.status(400);
    //         data.should.be.a("object");
    //         data.should.have.property("success").equal(false)
    //         data.should.have.property("message").equal("failing")
    //         data.should.have.property("error").equal("the result equal to null or undefined Please check that you are sending the required details in the correct format")
    //         done();
    //       });
    //   });


    // post new test for student
    //  if fields is wrong
    // it(" POST new Test", (done) => {
    //     const newHomework = {
    //       id: "6140de64cc8d961fa4454f5a",
    //       name: "new homework",
    //       grade: 10000,
    //     };
    //     chai.request(server)
    //       .post("/api/student/addTestById")
    //       .set('Authorization',
    //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIyLCJqb2QiOiJTdGFmZiIsInJlc3BvbnNpYmxlIjoiIiwibWVzc2FnZXMiOltdLCJfaWQiOiI2MTUyMDljZDg0MzJjMzg4ZDhkYmQyZjIiLCJmaXJzdE5hbWUiOiLXmdem15fXpyIsImxhc3ROYW1lIjoi16fXodeZ15QiLCJlbWFpbCI6Iml0emhha0BnbWFpbC5jb20iLCJwaG9uZSI6IjUxNjQ4OTk2NSIsInBhc3N3b3JkIjoiJDJiJDEyJEVqNUNSZUNEcTVZNG1NNy42T3guWnVBaW51ZE1QYjEzaS9ENGZSdlVSWVhaRUVvWHJlNDZxIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6IiIsIklkTnVtYmVyIjoiIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwiX192IjowLCJpYXQiOjE2MzI4NDAzOTYsImV4cCI6MTYzMjkyNjc5Nn0.zDNJFvmYVo02XAqUtp8qVRymNacZAzOpA32XFsOOfaw')
    //       .send(newHomework)
    //       .end((err, res) => {
    //         const data = res.body;
    //         console.log(data)
    //         res.should.have.status(400);
    //         data.should.be.a("object");
    //         // data.should.have.property("success").equal(false)
    //         // data.should.have.property("message").equal("adding a test to the test array failed")
    //         // data.should.have.property("error").equal("you need to send 2 field name and grade ")
    //         done();
    //       });
    //   });


    // update student test
    // it(" update student Test", (done) => {
    //   const TEST = {
    //     id: "6140a5fa3bbac599481df5f3",
    //     grade: 9
    //   };
    //   const id = "61409808a1b4fa2b4887a77e";
    //   chai.request(server)
    //     .put("/api/student/updateStudent/" + id)
    //     .set('Authorization',
    //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIyLCJqb2QiOiJTdGFmZiIsInJlc3BvbnNpYmxlIjoiIiwibWVzc2FnZXMiOltdLCJfaWQiOiI2MTUyMDljZDg0MzJjMzg4ZDhkYmQyZjIiLCJmaXJzdE5hbWUiOiLXmdem15fXpyIsImxhc3ROYW1lIjoi16fXodeZ15QiLCJlbWFpbCI6Iml0emhha0BnbWFpbC5jb20iLCJwaG9uZSI6IjUxNjQ4OTk2NSIsInBhc3N3b3JkIjoiJDJiJDEyJEVqNUNSZUNEcTVZNG1NNy42T3guWnVBaW51ZE1QYjEzaS9ENGZSdlVSWVhaRUVvWHJlNDZxIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6IiIsIklkTnVtYmVyIjoiIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwiX192IjowLCJpYXQiOjE2MzI4NDAzOTYsImV4cCI6MTYzMjkyNjc5Nn0.zDNJFvmYVo02XAqUtp8qVRymNacZAzOpA32XFsOOfaw')
    //     .send(TEST)
    //     .end((err, res) => {
    //       const data = res.body.data;
    //       res.should.have.status(200);
    //       data.should.be.a("object");
    //       done();
    //     });
    // });


    // delete test by id
    //     it(" delete student Test", (done) => {
    //       const TEST = {
    //         id: "6150842974662b111c205fd6",
    //         grade: 9
    //       };
    //       const id = "61409808a1b4fa2b4887a77e";
    //       chai.request(server)
    //         .delete("/api/student/deleteTest/" + id)
    //    .set('Authorization',
    //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIyLCJqb2QiOiJTdGFmZiIsInJlc3BvbnNpYmxlIjoiIiwibWVzc2FnZXMiOltdLCJfaWQiOiI2MTUyMDljZDg0MzJjMzg4ZDhkYmQyZjIiLCJmaXJzdE5hbWUiOiLXmdem15fXpyIsImxhc3ROYW1lIjoi16fXodeZ15QiLCJlbWFpbCI6Iml0emhha0BnbWFpbC5jb20iLCJwaG9uZSI6IjUxNjQ4OTk2NSIsInBhc3N3b3JkIjoiJDJiJDEyJEVqNUNSZUNEcTVZNG1NNy42T3guWnVBaW51ZE1QYjEzaS9ENGZSdlVSWVhaRUVvWHJlNDZxIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6IiIsIklkTnVtYmVyIjoiIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwiX192IjowLCJpYXQiOjE2MzI4NDAzOTYsImV4cCI6MTYzMjkyNjc5Nn0.zDNJFvmYVo02XAqUtp8qVRymNacZAzOpA32XFsOOfaw')
    //         .send(TEST)
    //         .end((err, res) => {
    //           const data = res.body.data;
    //           res.should.have.status(200);
    //         //   console.log(data);
    //           // data.should.be.a("object");
    //           done();
    //         });
    //     });


    // delete student by id
    //     it(" delete student נט ןג", (done) => {
    //       const TEST = {
    //         id: "6150842974662b111c205fd6",
    //         grade: 9
    //       };
    //       const id = "61409808a1b4fa2b4887a77e";
    //       chai.request(server)
    //         .delete("/api/student/deleteTest/" + id)
    //         .send(TEST)
    //    .set('Authorization',
    //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIyLCJqb2QiOiJTdGFmZiIsInJlc3BvbnNpYmxlIjoiIiwibWVzc2FnZXMiOltdLCJfaWQiOiI2MTUyMDljZDg0MzJjMzg4ZDhkYmQyZjIiLCJmaXJzdE5hbWUiOiLXmdem15fXpyIsImxhc3ROYW1lIjoi16fXodeZ15QiLCJlbWFpbCI6Iml0emhha0BnbWFpbC5jb20iLCJwaG9uZSI6IjUxNjQ4OTk2NSIsInBhc3N3b3JkIjoiJDJiJDEyJEVqNUNSZUNEcTVZNG1NNy42T3guWnVBaW51ZE1QYjEzaS9ENGZSdlVSWVhaRUVvWHJlNDZxIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6IiIsIklkTnVtYmVyIjoiIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yN1QxODoxMzozMy4xNzJaIiwiX192IjowLCJpYXQiOjE2MzI4NDAzOTYsImV4cCI6MTYzMjkyNjc5Nn0.zDNJFvmYVo02XAqUtp8qVRymNacZAzOpA32XFsOOfaw')
    //         .end((err, res) => {
    //           const data = res.body.data;
    //           res.should.have.status(200);
    //         //   console.log(data);
    //           // data.should.be.a("object");
    //           done();
    //         });
    //     });




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

    // update student // קונטרולר לא עובד לחכות ששואנש תענה
    // describe("/update student", () => {
    //     it("update student success ", (done) => {

    //             const TEST = {
    //                 field: "age",
    //                 new:25
    //             };
    //             const id = "61519d62c13b51195cb4268e";
    //             chai.request(server)
    //                 .put("/api/student/updateStudent/" + id)
    //                 .set('Authorization',
    //                     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
    //                 .send(TEST)
    //                 .end((err, res) => {
    //                     const data = res.body.data
    //                     console.log(data)
    //                     // res.should.have.status(200);
    //                     // data.should.have.property("message").equal("success")
    //                     // data.should.have.property("success").equal(true);
    //                     done();
    //                 });
    //     })

    // })



    // delete student 
    describe("/deleteStudent", () => {
        // if everything is correct
        // it("delete student", (done) => {
        //     const TEST = {
        //         id: "613f94a0bc4467548c72134e",
        //     };
        //     const id = "61519d62c13b51195cb4268e";
        //     chai.request(server)
        //         .delete("/api/student/deleteStudent/" + id)
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
        //         .send(TEST)
        //         .end((err, res) => {
        //             const data = res.body
        //             // console.log(data)
        //             res.should.have.status(200);
        //             data.should.have.property("message").equal("success")
        //             data.should.have.property("success").equal(true);
        //             done();
        //         });
        // });

        // if student dosnt exist
        // it("student dosnt exist", (done) => {
        //     const TEST = {
        //         id: "613f94a0bc4467548c777707",
        //     };
        //     const id = "61519d62c13b51195cb4268a";
        //     chai.request(server)
        //         .delete("/api/student/deleteStudent/" + id)
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
        //         .send(TEST)
        //         .end((err, res) => {
        //             const data = res.body
        //             console.log(data)
        //             res.should.have.status(500);
        //             data.should.have.property("message").equal("delete by id student filed")
        //             data.should.have.property("success").equal(false);
        //             data.should.have.property("error").equal("failed to find information, please make sure you provide existing data in the appropriate format");
        //             done();
        //         });
        // });

        // if stuff dosnt exists
        // it("staff dosnt exist ", (done) => {
        //     const TEST = {
        //         id: "613f94a0bc4467548c777707",
        //     };
        //     const id = "61409808a1b4fa2b4887a77e";
        //     chai.request(server)
        //         .delete("/api/student/deleteStudent/" + id)
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
        //         .send(TEST)
        //         .end((err, res) => {
        //             const data = res.body
        //             console.log(data)
        //             res.should.have.status(500);
        //             data.should.have.property("message").equal("delete by id student filed")
        //             data.should.have.property("success").equal(false);
        //             data.should.have.property("error").equal("failed to find information, please make sure you provide existing data in the appropriate format");
        //             done();
        //         });
        // });

        // if fields are empty
        // it("fields are empty ", (done) => {
        //     const TEST = {
        //         id: "",
        //     };
        //     const id = "61519d62c13b51195cb4268e";
        //     chai.request(server)
        //         .delete("/api/student/deleteStudent/" + id)
        //         .set('Authorization',
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjIzLCJqb2QiOiLXqtek16fXmdeTIiwicmVzcG9uc2libGUiOiLXkNeX16jXkNeZ16oiLCJtZXNzYWdlcyI6WyI2MTUxYzMwZTc1NjBmMjc4ODhjZTQ5MzYiLCI2MTUxZDVmN2E3MzQ2MzRlOGM4MDZjYzQiXSwiX2lkIjoiNjEzZjk0YTBiYzQ0Njc1NDhjNzIxMzRlIiwicm9sZSI6IlN0YWZmIiwicHJvZmlsZUltZyI6ImltYWdlc1xcMTYzMjkxMjE0ODE0OF9naXJsYXZhdGFyLmpwZyIsIklkTnVtYmVyIjoiIiwiY291cnNlcyI6W10sImV2ZW50cyI6WyI2MTUzMzBhMTliOWMxMTM5ZTg4MzVmYzgiXSwic3R1ZGVudHMiOltdLCJmaXJzdE5hbWUiOiJub3lhIiwibGFzdE5hbWUiOiLXp9eV16fXlCIsImVtYWlsIjoidGFsaWdlcmdyZUBnbWFpbC5jb20iLCJwaG9uZSI6IjA1NDYyNjU1NzUiLCJwYXNzd29yZCI6IiQyYiQxMiQycndtUHUuYlBHL3V5dEEuMWxWRXouVlRGTXNhd1JzekU3WjVUSW11WFkwaFJ5VGU1OVRxaSIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMTNUMTg6MTI6NDguNTIyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjlUMTA6NDI6MjguMjcxWiIsIl9fdiI6MywiaWF0IjoxNjMyOTE0NTc5LCJleHAiOjE2MzMwMDA5Nzl9.8Ynd3gBC5HIxUqusVKQQGe8jnZAn0EB0Hs4_KE5VlSo')
        //         .send(TEST)
        //         .end((err, res) => {
        //             const data = res.body
        //             console.log(data)
        //             res.should.have.status(500);
        //             data.should.have.property("message").equal("delete by id student filed")
        //             data.should.have.property("success").equal(false);
        //             data.should.have.property("error").equal("The id field is empty");
        //             done();
        //         });
        // });

    })
});