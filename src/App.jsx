import Header from "./components/Header";
import Studentlist from "./components/StudentList";
import StudentCard from "./components/StudentCard";


function App() {
  return (
    <>
    <Header header={header}/>
    <StudentCard studentcard={studentCard}/>
    <StudentList studentlist ={studentlist}/>
    </>
  );
}

export default App;