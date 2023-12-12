const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {



    return (
        <div className="idCard">
            <img src={picture} alt="Profile Picture" />
        <strong> First Name:</strong> {firstName}
        <strong> Last Name:</strong> {lastName}
        <strong> Gender:</strong> {gender}
        <strong> Height:</strong> {height}
        <strong> Birth:</strong> {birth}  

        </div>
    )
}

export default IdCard