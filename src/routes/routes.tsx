import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Courses, Lesson } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/courses" />}></Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<Lesson />} />
      <Route path="*" element={<Navigate replace to="/courses" />} />
    </Routes>
  );
};
