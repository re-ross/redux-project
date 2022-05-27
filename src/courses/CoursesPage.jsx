import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import * as courseActions from "./../redux/actions/courseActions";
import PropTypes from "prop-types";

const CoursesPage = ({ courses }) => {
  const [course, setCourse] = useState({ title: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newCourse = { ...course, title: e.target.value };
    setCourse(newCourse);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(courseActions.createCourse(course));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
      {courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = ({ courses }) => {
  return {
    courses,
  };
};

export default connect(mapStateToProps)(CoursesPage);
