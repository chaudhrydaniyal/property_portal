import { useRoutes } from "react-router-dom";
import { ThemeRoutes } from "./routes/Router";
import { loginRoutes } from "./routes/Router";

import { Suspense, useContext } from "react";
import { Context } from "./Context/Context";




const App = () => {

  const context = useContext(Context)
  console.log("context", context.user)
  const routing =  useRoutes(context.user?ThemeRoutes:loginRoutes);

  return(  
    <div className="dark">{routing}</div>
  )

};

export default App;
