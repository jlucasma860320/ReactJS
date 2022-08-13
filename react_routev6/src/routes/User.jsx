import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../users";

export function User(){
    const params = useParams();
    const user = getUser(parseInt(params.userId));
    const navigate = useNavigate();
    

    const handleDelete = () =>{ 
        deleteUser(user.id);
        navigate("/users");
    }

    if(!user){
        return <div><h2>El Usuario No Existe!</h2></div>
    }
    return(
    <div>
        <h2>{user.name}</h2>
        <div>
            <strong>Phone: </strong> {user.phone}
        </div>
        <div>
            <strong>Website: </strong> {user.website}
        </div>
        <br />
        <button onClick={handleDelete}>Delete</button>
    </div>
    )
}