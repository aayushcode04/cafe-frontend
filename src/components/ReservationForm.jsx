import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ReservationForm.module.css';
import axios from 'axios';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phoneNo:"",
    date:"",
    time:"",
    guest:""
  });


const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = async(e) => {
  e.preventDefault();

  try {
    console.log("Sending formData:", formData); 
    const res = await axios.post('http://localhost:5000/api/reservation', formData);
    alert('Reservation Successful !');
    console.log(res.data);

    setFormData({
      name: '',
      email: '',
      phoneNo: '',
      date: '',
      time: '',
      guest: '',
    });

    return;
    
  } catch (error) {
    console.log(error)
    alert('Something went wrong.');    
  }
}


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formBox}>
          <div className={styles.header}>
            <img 
              className={styles.logo} 
              src="/cafe-image/cafe-logo.webp" 
              alt="Cafe Logo" 
            />
            <Link className={styles.homeLink} to="/">
              <span>←</span> Back to Home
            </Link>
          </div>
          
          <h2 className={styles.title}>Make a Reservation in our Cafe</h2>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.inputField}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              className={styles.inputField}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              className={styles.inputField}
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <input
              className={styles.inputField}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              className={styles.inputField}
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <input
              className={styles.inputField}
              type="number"
              name="guest"
              value={formData.guest}
              onChange={handleChange}
              placeholder="Number of Guests"
              min="1"
              required
            />
            <button
              className={styles.submitBtn}
              type="submit"
            >
              Book Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ReservationForm;