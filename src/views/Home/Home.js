
import I18n from './../../utils/I18n';
import "./Home.css"


function Home(){

  const usersCount = 2;

   return (
       <div className="container"> 
           <h1>{I18n ("welcomeM")}</h1>
           <p>{I18n ("introM")}</p>
           <h3>{I18n ("joiningM", "<attend>", usersCount)}</h3>
           <h2>{I18n ("moralM")}</h2>

           <select 
            defaultValue={localStorage.getItem('lang')}
            onChange={(e) =>{
               localStorage.setItem('lang', e.target.value);
               window.location.reload();
            }}>
               <option value="en"> English</option>
               <option value="hi"> Hindi</option>
               <option value="mr"> Marathii</option>
          </select>

   
       </div>
   )
}

export default Home