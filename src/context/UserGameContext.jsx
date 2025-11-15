import { createContext , useContext , useState } from "react";

const UserGameContext = createContext();

export const UserGameProvider = ({ children }) =>{
    const [userAddedGames , setUserAddedGames] = useState([
        {
            id: 1,
            name: "Grand Theft Auto VI",
            price: 999,
            availability: "pc , xbox",
            background_image:
              "https://images.dwncdn.net/images/t_app-icon-l/p/c3c7360a-55f0-4366-a8a8-da2190e900e7/57866846/gta-6-logo",
            parent_platforms: [],
          }
    ]);
    

    return(
       <UserGameContext.Provider value={{userAddedGames , setUserAddedGames}}>
           {children}

       </UserGameContext.Provider>

    );
};

export const useUserGames = () => useContext(UserGameContext);