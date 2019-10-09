import React from 'react';
import '../App.css';

function Form({ teamMemberInfo, handleChange, handleSubmit, renderMemberInfo}) {

    return (

        <section className='form'>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    <br />
                    Name: {''}
                    <input 
                        type='text'
                        name='name'
                        value={teamMemberInfo.name}
                        onChange={event => handleChange(event)}
                    />

                    Email: {''}
                    <input 
                        type='email'
                        name='email'
                        value={teamMemberInfo.email}
                        onChange={event => handleChange(event)}
                    />

                    Role: {''}
                    <input 
                        type='text'
                        name='role'
                        value={teamMemberInfo.role}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <button onClick={renderMemberInfo}>Add Team Member</button>
                
            </form>

        </section>   
                                        
    )
}

export default Form;