import { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Perbaiki import Navigate menjadi useNavigate

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah perilaku default form (reload halaman)
    dispatch(addUser({ id: newId, name, email, phone }));
    navigate("/"); // Gunakan navigate untuk berpindah halaman
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border rounded bg-secondary text-white p-5 shadow">
        <h2 className="text-center mb-4">Create New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label d-block text-start">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)} // Update state name
              value={name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label d-block text-start">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label d-block text-start">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="enter phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
