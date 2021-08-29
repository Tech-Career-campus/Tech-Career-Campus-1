const express = require("express");
const app = express();
const router = express.Router();
const isToken = require('../controller/authorization/isToken');

const routeStudent = require("./studentRouting");
const routeCourse = require("./courseRouting");
const routeStaff = require("./staffRouting");
const routeForum = require("./forumRouting");
const routeSchedule = require("./classScheduleRouting");
const routeEvent = require("./eventsRouting");

const mainRout = (req,res)=>{

        app.use("/student", routeStudent);
        app.use("/course", routeCourse);
        app.use("/staff", routeStaff);
        app.use("/forum", routeForum);
        app.use("/event", routeEvent);
        app.use("/class" ,routeSchedule);

};

module.exports = mainRout;