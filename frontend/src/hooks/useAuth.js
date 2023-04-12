import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    console.log("UseAuth"+token);
    // let token = ""
    // token = localStorage.getItem("token")
    if(token){
        const decoded = jwtDecode(token)
        const {username, email, mobile, fields} = decoded.UserInfo
        return {username, email, mobile, fields}
    }
    return {username:'', email:'',mobile:'', fields:[]}
}

export default useAuth