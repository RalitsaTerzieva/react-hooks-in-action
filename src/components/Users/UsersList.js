import {users} from '../../static.json'

export default function UsersList() {
    
    return (
    <main className="users-page">
        <div>Users List: {users.map(user =>
            <>
            <p>User id: {user.id}</p>
            <p>User name: {user.name}</p>
            <p>User img: {user.img}</p>
            <p>user notes: {user.notes}</p>
            </>
        )}</div>
    </main>
)};