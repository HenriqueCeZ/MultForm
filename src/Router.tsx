import {BrowserRouter,Route} from 'react-router-dom';
import {FormOne} from './pages/formstepone';
import {FormTwo} from './pages/formsteptwo';
import {FormThree} from './pages/formstepthree';
const Router = () =>{

            return (
                
                 <BrowserRouter>
                      <Route path = "/" exact component ={FormOne}/>
                      <Route path = "/step2"  component ={FormTwo}/>
                      <Route path = "/step3" component ={FormThree}/>
                 </BrowserRouter>
              )  ;

}


export default Router;