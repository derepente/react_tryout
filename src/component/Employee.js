function Employee(probs) {

    return (
    
        <>
    <h3>Employee {probs.name}</h3>
    <p>{probs.role ? probs.role : 'No role'}</p>
    {probs.role ? <p class="role">{probs.role}</p> : <p class="norole">No Role</p>}
    </>
    )
}

export default Employee;