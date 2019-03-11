import React from 'react'

const Screen = ({info}) => {

    const userList= info.length ? (
        info.map(user=>{
            return (
                <div className="container" key={user.id}>
                  <p> Name: {user.name} <br></br>Roll-Number:{user.roll}</p>
                </div>

           )
           })
           ) : (
                <div className="container">Empty</div>
            );
 return (
    <div>
      {userList}
    </div>
  )
}

export default Screen
