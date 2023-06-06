import './App.css';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [memberList, setMemberList] = useState([]);
  const [duzenlenecekUye,setDuzenlenecekUye] = useState(null)
  const editMember = () => {
    setDuzenlenecekUye({

    })
  }
  const handleFormSubmit = (formData) => {
    if (memberList.find(member => member.email === formData.email)) {
      alert('Team member already exists!');
      return;
    }
    setMemberList([...memberList, formData]);
  };

  return (
    <div className="App">
      <Form onSubmit={handleFormSubmit} />

      <h2>Team Members:</h2>
      {memberList.map((submission) => (
        <div className="team-members">
          <p><b>Name:</b> {submission.name}</p>
          <p><b>Email:</b> {submission.email}</p>
          <p><b>City:</b> {submission.location}</p>
          <p><b>Role:</b> {submission.role}</p>
          <button >Edit</button>
        </div>

      ))}
    </div>
  );
}

export default App;
