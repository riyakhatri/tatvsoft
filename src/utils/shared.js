import { Role } from "./enum";

const LocalStorageKeys={
    USER:"user",
};
const NavigationItems=[
    {
        name:"Users",
        route:'./User',
        access:[Role.Admin],
    },
    {
        name:"Categories",
        route:'./User',
        access:[Role.Admin],
    },
    {
        name:"Books",
        route:'./User',
        access:[Role.Admin],
    },
    {
        name:"Update Profile",
        route:'./User',
        access:[Role.Admin,Role.Buyer,Role.Seller],
    },
];
const hasAccess=(pathname,user)=>{
    const navItem=NavigationItems.find((navItem)=>pathname.includes(navItem.route));
    if(navItem){
        return(
            !navItem.access || !!(navItem.access && navItem.access.includes(user.RoleId))

        );
    }
    return true;
};

export default{
    hasAccess,
    NavigationItems,
    LocalStorageKeys,
};