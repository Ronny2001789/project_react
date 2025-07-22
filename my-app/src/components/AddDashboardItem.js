import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase";
import './Dashboard.css';


function Dashboard() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const dashboardRef = collection(db, "dashboardItems");

  // 📖 READ
  const fetchItems = async () => {
    const snapshot = await getDocs(dashboardRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ✅ CREATE or ✏️ UPDATE
  const handleSubmit = async () => {
    try {
      if (editingId) {
        const itemRef = doc(db, "dashboardItems", editingId);
        await updateDoc(itemRef, {
          title,
          value: parseInt(value)
        });
        setEditingId(null);
        alert("Item updated!");
      } else {
        await addDoc(dashboardRef, {
          title,
          value: parseInt(value),
          createdAt: new Date()
        });
        alert("Item added!");
      }
      setTitle("");
      setValue("");
      fetchItems();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed: " + error.message);
    }
  };

  // ✏️ Set item to edit
  const handleEdit = (item) => {
    setTitle(item.title);
    setValue(item.value);
    setEditingId(item.id);
  };

  // 🗑️ DELETE
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "dashboardItems", id));
      alert("Item deleted!");
      fetchItems();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Delete failed.");
    }
  };

  return (
    <div className="dashboard-container">
  <h2>{editingId ? "Edit" : "Add"} Dashboard Item</h2>

  <div className="form-group">
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type="number"
      placeholder="Value"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <button onClick={handleSubmit}>
      {editingId ? "Update" : "Add"}
    </button>
  </div>

  <h3 style={{ textAlign: "center", marginTop: "40px", color: "#38bdf8" }}>
    Dashboard Items
  </h3>

  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <span>
          <strong>{item.title}</strong>: {item.value}
        </span>
        <div>
          <button
            onClick={() => handleEdit(item)}
            style={{
              backgroundColor: "#10b981",
              boxShadow: "0 0 6px #6ee7b7",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            style={{
              marginLeft: "8px",
              backgroundColor: "#ef4444",
              boxShadow: "0 0 6px #f87171",
            }}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}

export default Dashboard;
