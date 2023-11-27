import "../Profile/Profile.scss";

function Profile( {userInfo}) {

  return(
    <div className="profile">
       <h2 className="profile__title">Welcome {userInfo.name}!</h2>
    </div>
   
  )

}


export default Profile