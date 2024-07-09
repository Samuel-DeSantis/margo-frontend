import { createContext } from "react"

const UserContext = createContext({ username: '', auth: false })

export default UserContext