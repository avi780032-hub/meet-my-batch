

function StudentCard({name ,emoji,city,funfact,skills}) {
    return (
        <div className="card">
            <div className="emoji">"emoji"</div>
            <h2>{name}</h2>
            <p>{city}</p>
            <p>{funfact}</p>
            <div className="skills">
                {skills.map ((skills)=>
                <span className="skills">skill</span>
                )}
            </div>

        </div>
       
    )
}
export default StudentCard;