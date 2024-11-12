import React, { createContext, useState } from 'react'
export const Accountcontext = createContext(null);
const Accountprovider = ({children}) => {
    const [account,setAccount] = useState();
    const [person,setperson] = useState({});
  return (
    <Accountcontext.Provider
    value={{account,setAccount,person,setperson}}>
      {children}
    </Accountcontext.Provider>
  )
}

export default Accountprovider
