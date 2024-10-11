import React ,{createContext} from 'react'

export const DataContext = createContext()  //here we are sending all the data to the object or file wrapped around datatcontext.provider ex =  line 12 , 13 ,14

 const Usercontext = ({children}) => {  //here we will be getting app.jsx as a children since we have wrapped it around this file
        //in line 12 the value that is sent in the datacontext.provider is the value that can be accessed from anyfile
    const username = "Priyam" 

//    console.log(props.children)
    return (
        <>
        <DataContext.Provider value={username}>  
         <h1>{children}</h1>
        </DataContext.Provider>
   </>
    // <div><h1>Hello Context</h1></div>
    // <h1>{children}</h1> here in this line <App /> is rendered as a children of DataContext.provider and is getting displayed on react live server

  )
}

export default Usercontext