const findCourseInformation = (req) => {
  return {
    _id: req.body.course_id,
    CourseInformation: {
      $elemMatch: {
        _id: req.body.courseInformationId,
      },
    },
  };
};

const updateClassesQuery = (req) => {
  return {
    _id:req.body.classId,
    days: {
      $elemMatch: {
        _id:req.body.dayId,
      },
    },
  };
};
module.exports = {
  findCourseInformation,
  updateClassesQuery,
};
