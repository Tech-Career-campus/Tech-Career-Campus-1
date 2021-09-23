const StudentModel = require("../../models/studentModel");
const bcrypt = require("bcrypt");
const staffModel = require("../../models/staffModel");
const { isEmptyId } = require('../../utils/Errors')

const checkPassword = async (req, res, next) => {
    try {
        isEmptyId(req)
        const { id, currntPassword, role } = req.body
        let person;
        if (role === 'Student') {
            person = StudentModel
        }
        else if (role == 'Staff') {
            person = staffModel
        }
        if (!person){
            throw  new Error("middalware problem")
        }
        person.findById(id, async (error, result) => {
            if(error) throw error
            console.log(result)
            const isPasswordCorrect = await bcrypt.compare(currntPassword, result.password);
            if (isPasswordCorrect) {
                next()
            }
            else {
                res.send("wrong password")
            }
        })
    } catch (error) {
        res.send(error.message)
    }



}
const changePassword = (req, res) => {

    try {
        isEmptyId(req)
        let { id, newPassword, role } = req.body
        let person;
        if (role === 'Student') {
            person = StudentModel
        }
        else if (role == 'Staff') {
            person = staffModel
        }
        if (!person){
            throw  new Error("sdf")
        }
        bcrypt.genSalt(12, (err, salt) => {
            bcrypt.hash(newPassword, salt, async (err, hash) => {
                if (err) throw err
                newPassword = hash

                person.findByIdAndUpdate(id, { $set: { password: newPassword } }, (error, result) => {
                    res.json({ message: "update was success", result: result })
                })
            })
        })

    } catch (error) {
        res.send(error.message)
    }
}
module.exports = { checkPassword, changePassword }