import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingUser = users.find((user) => user.id === parseInt(id));

  const [name, setName] = React.useState(existingUser ? existingUser.name : "");
  const [email, setEmail] = React.useState(
    existingUser ? existingUser.email : ""
  );
  const [phone, setPhone] = React.useState(
    existingUser ? existingUser.phone : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (existingUser) {
      dispatch(updateUser({ id: existingUser.id, name, email, phone }));
      navigate("/");
    }
  };

  if (!existingUser) {
    return <div>User not found</div>;
  }

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update User
        </button>
      </form>
    </div>
  );
};

export default Update;
