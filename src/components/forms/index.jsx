import { useContext } from 'react';
import { FormContext } from '../../App';
import EducationalInfo from './educational_info';
import PersonalInfo from './personal_info';
import * as style from './style.module.css';
import { BrowserRouter,Switch,Route, Link } from "react-router-dom";
import ContactInfo from './contact_info';
import ViewInfo from './view';

function Form(){
    const { state, dispatch }= useContext(FormContext)
    return <section className={style.form}>
       <BrowserRouter>
            <Switch>
                <Route path = "/" exact>
                    <Link to="/personal-info" className={`btn btn-large center ${style.center}`} >Click to add details</Link>
                </Route>
                <Route path="/personal-info" exact>
                    <PersonalInfo />
                </Route>
                <Route path="/educational-info" exact>
                    <EducationalInfo />
                </Route>
                <Route path="/contact-info" exact>
                    <ContactInfo />
                </Route>
                <Route path="/view-info" exact>
                    <ViewInfo />
                </Route>
            </Switch>

            <div className={style.progressBar}>
                <div className={style.badge}>{ (state.activePage*100)/4} %</div>
                <div className={style.bar} style={{width:`${(state.activePage*100)/4}%`}}></div>
            </div>

        </BrowserRouter>
    </section>
}

export default Form;