import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notify({ message }) {
  toast.error(message);
  return (
    <ToastContainer theme="colored" autoClose={2000} position="top-right" />
  );
}
