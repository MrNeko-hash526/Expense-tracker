import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import CharAvatar from '../Cards/CharAvatar';
import { SIDE_MENU_DATA } from '../../utils/data';

function SideMenu({activeMenu}) {
   const {user, clearUser} = useContext(UserContext);
   const navigate = useNavigate();
   const [imageError, setImageError] = useState(false);

   // Online avatar image URL
   const defaultAvatarUrl = "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745";

   const handleClick = (route) => {
        if (route === "logout"){
            handelLogout();
            return;
        }

        navigate(route);
   };

   const handelLogout = () => {
    clearUser();
    localStorage.clear();
    navigate("/login", { replace: true });
   };

   const handleImageError = () => {
    setImageError(true);
   };
   
  return (
    <div className='w-64 h-[calc(100vh-61px)] bg-white rounded-r border-gray-200/50 p-5 sticky top-[61px] z-20'> 
   <div className='flex flex-col items-center justify-center gap-3 mt-3 mb-7'>
    {(user?.profileImageUrl && !imageError) ? (
        <img
            src={user.profileImageUrl}
            alt="profile image"
            className="w-20 h-20 bg-slate-400 rounded-full object-cover"
            onError={handleImageError}
        />
    ) : user?.fullName ? (
        // Use CharAvatar if user has a name
        <CharAvatar
            fullName={user.fullName}
            width="w-20"
            height="h-20"
            style="text-xl"
        />
    ) : (
        // Use online avatar as ultimate fallback
        <img
            src={defaultAvatarUrl}
            alt="default avatar"
            className="w-20 h-20 bg-slate-400 rounded-full object-cover"
        />
    )}
        <h5 className='text-gray-950 font medium rounded-full'>
        {user?.fullName|| "User"}
        </h5>
    </div>   

   { SIDE_MENU_DATA.map((item,index) => (
        <button
           key={`menu_${index}`}
           className={`w-full flex items-center gap-4 text-[15px] ${
             activeMenu === item.label ? " bg-primary  text-white" : ""
           } py-3 px-6 rounded-lg mb-3`}
            onClick={() => handleClick(item.path)}
        >
            <item.icon className='text-xl' />
            {item.label}
        </button>
    ))}  

    </div>
  )
}

export default SideMenu;