import {useContext} from 'react'
import UserContext from '../Context/UserContext'

 function Profile() {
    
    const {user}:any = useContext(UserContext)

   if(!user) return <div>Please login</div>

   return <div>Welcome {user.username}</div>
}

export default Profile
