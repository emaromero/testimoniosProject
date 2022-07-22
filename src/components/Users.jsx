import React from 'react'
import Testimonio from './Testimonio'

const Users = ({result}) => {
    return (
        <>
            <div>
                {result?.map(user => <Testimonio key={user.id} user={user} />)}
            </div>
        </>
        
    )
}
export default Users