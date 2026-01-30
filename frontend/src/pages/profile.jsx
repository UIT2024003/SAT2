import React from "react";

const Profile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          style={styles.image}
        />

        <h2 style={styles.name}>Alvina Afsheen</h2>
        <p style={styles.role}>B-Tech Student | Web & IoT Enthusiast</p>

        <div style={styles.info}>
          <p><strong>Email:</strong> alvinaafsheen2@gmail.com</p>
          <p><strong>Location:</strong> Amravati, Maharashtra</p>
          <p><strong>Skills:</strong> React, IoT, SQL, Web Development</p>
        </div>

        <button style={styles.button}>Edit Profile</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    margin: "10px 0 5px",
  },
  role: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "20px",
  },
  info: {
    textAlign: "left",
    fontSize: "14px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Profile;
