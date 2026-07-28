import './Shift.css'

const Shift = ({shift = {} }) => {

    const {
    employee,
    position,
    startTime,
    endTime} = shift;

      const roleClass = position.toLowerCase(); 

  return (
   <article className={`shift-card ${roleClass}`}>
    <h4 className="shift-employee">
        {employee}
    </h4>
    <p className="shift-position">{position}</p>
    <p className="shift-time">
        {startTime} - {endTime}
    </p>
   </article>
  )
}

export default Shift