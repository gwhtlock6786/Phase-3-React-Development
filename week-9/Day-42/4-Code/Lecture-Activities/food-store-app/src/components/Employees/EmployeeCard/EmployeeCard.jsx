import "./EmployeeCard.css";

const EmployeeCard = ({ employee }) => {

    const {
            firstName,
            lastName,
            email,
            phoneNumber,
            department,
            certifications = [],
        } = employee;

  return (
    <div className="employee-card">

        <h3>{firstName} {lastName}</h3>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{department}</p>

        <div className="certifications">
            {certifications.map((cert, index) => (
                <span key={index} className="cert-badge">{cert}</span>
            ))}
        </div>
    </div>
  )
}

export default EmployeeCard

 