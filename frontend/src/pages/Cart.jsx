const Cart = ({ items = [] }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🛒 Your Cart</h2>

        {items.length === 0 ? (
          <p style={styles.empty}>Cart is empty</p>
        ) : (
          <>
            <ul style={styles.list}>
              {items.map((item, i) => (
                <li key={i} style={styles.item}>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>

            <div style={styles.total}>
              Total: <b>${total}</b>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    width: "350px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
  },

  heading: {
    marginBottom: "20px",
    textAlign: "center",
  },

  empty: {
    textAlign: "center",
    color: "#6b7280",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },

  total: {
    marginTop: "15px",
    textAlign: "right",
    fontSize: "16px",
  },
};

export default Cart;
