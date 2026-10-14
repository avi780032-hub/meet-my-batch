// import StudentCard from "./StudentCard";


function StudentsList({students}) {
    return (
        <section className="section students" id="students">
            <div className="container">
                <h2 className="section-title">Cycle 3-Batch</h2>
                <p className="section-subtitle">
                    Meet our 8 amazing student
                </p>
                <div className="students-grid">
                    {students.map((students)=>(
                        <StudentsList key={students._id} students={students}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default StudentList;