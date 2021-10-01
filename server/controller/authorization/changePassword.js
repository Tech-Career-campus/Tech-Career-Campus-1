const StudentModel = require("../../models/studentModel");
const bcrypt = require("bcrypt");
const StaffModel = require("../../models/staffModel");
const { isEmptyId ,nullVariable} = require('../../utils/Errors')
const { SendEmails} = require('../../utils/SendEmails')


const checkPassword = async (req, res, next) => {
    try {
 
        isEmptyId(req.body._id)
        const { _id, currentPassword, role } = req.body
        let person;
        if (role === 'Student') {
            person = StudentModel
        }
        else if (role === 'Staff') {
            person = StaffModel
        }
        //Checks if person is not equal to null or undefined
        nullVariable(person);
        
        person.findById(_id, async (err, result) => {
            console.log(currentPassword)
            if(err) throw err;
            const isPasswordCorrect = await bcrypt.compare(currentPassword, result.password);
            if (!isPasswordCorrect) {
                next()
            }
            else {
                res
                .status(401)
                .json({
                    success:false,
                    message: "wrong password",
                    data:result

                });
            }
        })
    } catch (err) {
        res
        .status(500)
        .json({ 
            success:false,
            message: "wrong",
            error: err.message
        });
    }



};

const changePassword = (req, res) => {

    try {
        console.log(req.body._id)
        isEmptyId(req.body._id)
        const { newPassword, role } = req.body
        let person;
        if (role === 'Student') {
            person = StudentModel
        }
        else if (role === 'Staff') {
            person = StaffModel
        }

        
        //Checks if person is not equal to null or undefined
        nullVariable(person);
        SendEmails(req,res);
        bcrypt.genSalt(12, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(newPassword, salt, async (err, hash) => {
                if (err) throw err;
                newPassword = hash

                person.findByIdAndUpdate(id, { $set: { password: newPassword } }, (err, result) => {
                    if(err) throw err;
                    res
                    .status(201)
                    .json({ 
                        success:true,
                        message: "update was success",
                        result: result
                     })
                })
            })
        })

    } catch (err) {
        res
        .status(500)
        .json({
            success:true,
             message: "update was filad",
              error: err.message 
       })
    }
};
module.exports = { checkPassword, changePassword }