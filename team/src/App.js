import React, {useState} from 'react';
import Form from '../src/Components/Form';
import './App.css';

function App() {

  const [teamMemberInfo, setTeamMemberInfo] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [team, setTeam] = useState([]);

  function handleChange(event) {
    setTeamMemberInfo({ ...teamMemberInfo, [event.target.name]: event.target.value });
  }
 
  function handleSubmit(event) {
    event.preventDefault();
    setTeamMemberInfo({ name:'', email:'', role: ''});
  }

  function renderMemberInfo(e) {
      setTeam([...team, teamMemberInfo]);
  }

  return (
    <div className="App">
      <h1>Add A Member</h1>
      <Form
        team={team}
        teamMemberInfo={teamMemberInfo}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        renderMemberInfo={renderMemberInfo}
      />
      {team.map((member, index) => (
        <section className="member-card" key={index}>
          <h1>{member.name}</h1>
          <h1>{member.email}</h1>
          <h1>{member.role}</h1>
        </section>
      ))}
    </div>
  );
}

export default App;
