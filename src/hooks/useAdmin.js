import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const[loadingAdmin,setLoadingAdmin]=useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://lit-cove-72616.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    console.log(data);
                    setLoadingAdmin(false);
                })
        }
    }, [user])
    return [admin,loadingAdmin]
}
export default useAdmin;