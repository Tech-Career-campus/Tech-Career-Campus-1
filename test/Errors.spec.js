const assert = require('chai').assert;
const expect = require('chai').expect;

const {nullError,isEmptyId,nullVariable} = require('../server/utils/Errors');

// describe('the nullError() Gets 2 objects and and return a result if ter is information and return error if the result equal to null',()=>{
//     it('nullError() return obj', ()=>{
//         const res = {
//             status:()=>{},
//             json:()=>{return {}}
//         }
//         const data = {}   
//         const result  = nullError(data,res);
//        expect(result, {});
//     });
 
//     it('nullError() get 2 arguments type of obj', ()=>{
//      const res = {
//          status:()=>{},
//          json:()=>{}
//      }
//      const req = {}   
//      const result  = nullError(req,res);
//      expect(res, req).to.be.an('object')
//   })
 
//   it('nullError() get 2 arguments another value that is not an object', ()=>{
//      const res = ""
//      const req = ""   
//      const result  = nullError(req,res);
//      expect(result , null)
//   })
 
//   it('nullError() Without arguments', ()=>{
//      const result  = nullError();
//      expect(result , null)
//   })
 
//  });