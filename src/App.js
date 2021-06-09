import React from "react"; 
import Lefside from "./Component/LFTsideBAR/Lefside";
//import {Header} from "./Component/Header/Header";
function App(){
 return(
   <>
    <div>
      <section>
      {/* leftsidebar */}
       <Lefside />
       {/*End leftsidebar */}
       </section>
       <section>
         {/* <Header/> */}
         </section>
      </div>   
   </>
 )
}
export default App;
