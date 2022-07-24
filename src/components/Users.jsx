import React from 'react'
import Testimonio from './Testimonio'

const Users = ({personas}) => {
    return (
        <>
            <div>
                {personas?.map(user => <Testimonio key={user.id} user={user} />)}
            </div>
        </>
    )
}
export default Users