const logout = (req,res)=>{
    res.redirect('/')
}
module.exports = logout;


// לבדיקה במועד מאוחר יותר 

// const h=[];
// const logout = (req,res)=>{
//     const header = req.header("Authorization");
//     h.filter(token=> token !== req.body.payload)
//     res.redirect('/api/login')
// }
// module.exports = logout;