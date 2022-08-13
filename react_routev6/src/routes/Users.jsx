import { getAllUsers } from "../users"
import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";

export function Users(){
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const users = getAllUsers();
    const filter = searchParams.get("filter") ?? "";/** ?? "" para no caer en pasar undefined ya que no se puede pasar undefined */

    const handleFilter = (e) => {
        setSearchParams({filter: e.target.value});
    }

    return(
        <div>
            <h1>Users</h1>
            <input 
                vaule={filter} 
                onChange={handleFilter} 
                type="text" 
                placeholder="filter"
            />
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
                <ul>
                    {users.filter(user => {
                        if(!filter) return true

                        const name = user.name.toLowerCase();
                        return name.includes(filter.toLowerCase())
                    }).map(user => <li key={user.id}>
                        <h2>
                            <NavLink style={({isActive}) => isActive ?{color: "red"} : {} } 
                                to={user.id.toString() + location.search}>
                                    {user.name}
                            </NavLink>
                        </h2>
                    </li>
                    )}
                </ul>
                <article>
                    <Outlet />
                </article>
            </div>
        </div>
    )
}