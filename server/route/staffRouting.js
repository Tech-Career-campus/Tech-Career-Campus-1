const express = require("express");
const router = express.Router();
const staffController = require("../controller/staffController")
const {authRole} = require('../controller/authentication/auth');

router.get('/', staffController.getAllStaff);
router.get('/getStaffById', staffController.getStaffById);
router.delete('/',authRole("Staff"), staffController.deleteStaffById);
router.put('/:id',authRole("Staff"), staffController.updateStaffById);

module.exports = router;

// router.get('/student/',authRole("Staff"),staffController.getStudentsByStaff)
// const getStudentsByStaff = async (req, res) => {
//     try {
//         await StaffModel.findById(req.body.id)
//             .populate('students')
//             .then(staff => {
//                 res.status(201).json({ massage: 'The student is ', data: staff.students.map((student) => student ) })
//             })
//             .catch(err => {
//                 res.status(500).json({ massage: 'error with population', data: err });
//             })
  
//     }
//     catch (err) {
//         res.status(500).json({ massage: "wrong", error: err })
//     }
//   }