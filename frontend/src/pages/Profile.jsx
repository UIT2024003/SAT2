import React from "react";

const Profile = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          style={styles.image}
        />

        <h2 style={styles.name}>Alvina Afsheen</h2>
        <p style={styles.role}>B-Tech Student • Web & IoT Enthusiast</p>

        <div style={styles.info}>
          <p><span>Email</span> alvinaafsheen2@gmail.com</p>
          <p><span>Location</span> Amravati, Maharashtra</p>
          <p><span>Skills</span> React, IoT, SQL, Web Development</p>
        </div>

        <button style={styles.button}>Edit Profile</button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "16px",
    width: "360px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
  },

  image: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px",
    border: "4px solid #4f46e5",
  },

  name: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  role: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "24px",
  },

  info: {
    textAlign: "left",
    fontSize: "14px",
    marginBottom: "24px",
    lineHeight: "1.8",
  },

  button: {
    width: "100%",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Profile;
