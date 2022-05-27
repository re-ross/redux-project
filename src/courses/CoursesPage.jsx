import React, { useState } from "react";

const CoursesPage = () => {
  const [course, setCourse] = useState({ title: "" });
  const handleChange = (e) => {
    const newCourse = { ...course, title: e.target.value };
    setCourse(newCourse);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(course.title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
};

export default CoursesPage;
