import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Courses, Lesson } from '../pages';


export const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Courses />} />
    <Route path="/lesson" element={<Lesson />} />
    <Route path="*" element={<Navigate to="/" />} />
   </Routes>
  )
}