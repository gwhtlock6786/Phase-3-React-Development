import { Link } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  const { id, name, role } = employee;
  return (
    <div>
      {/* <img src={image} alt={name} /> */}
      <h3>{name}</h3>
      <p>{role}</p>
      <Link to={`/employee-list/${id}`}>View Details</Link>
    </div>
  );
};

export default EmployeeCard;
