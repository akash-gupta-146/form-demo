import { useContext, useEffect, useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { FormContext } from '../../../App';
import * as style from './../style.module.css';

function EducationalInfo(){
    const pageNumber = 2;
    const sectionName = 'Educational Info';
    const { state, dispatch } = useContext(FormContext)
    const history = useHistory()
    useEffect( ()=> {
        dispatch({type:'changeSection',sectionName, pageNumber });
        // eslint-disable-next-line
    },[])
    const [educationDetails, setEducationDetails] = useState({})
    const next = ()=>{
        dispatch({type:'saveEducationalDetails',sectionName: 'Contact Information', educationDetails: {...educationDetails}});
        history.push('/contact-info');
    }
    const prev = ()=>{
        dispatch({type:'changeSection',sectionName:'Personal Info', pageNumber:pageNumber-1 });
        history.push('/personal-info');
    }

    const uncheckPG = (e) => {
        if(e.target.checked){
            setEducationDetails({...educationDetails,pgStatus:e.target.checked});
        }else{
            setEducationDetails({...educationDetails,pgStatus:e.target.checked,PG_College:'',PG_University:'',PG_Percentage:''})
        }
    }
    return<> 
        <section className={style.formArea}>
            <div className={style.item}>
                <label  htmlFor="school_name_10th">10th standard school name</label>
                <input id="school_name_10th" type="text" value={educationDetails.school_name_10th ||  state?.educationDetails?.school_name_10th || ''} onChange={ e => setEducationDetails({...educationDetails,school_name_10th:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="percentage_10th">10th standard percentage</label>
                <input id="percentage_10th" value={educationDetails.percentage_10th || state?.educationDetails?.percentage_10th || ''} onChange={ e => setEducationDetails({...educationDetails,percentage_10th:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="school_name_12th">12th standard school name</label>
                <input id="school_name_12th" type="text" value={educationDetails.school_name_12th || state?.educationDetails?.school_name_12th || ''} onChange={ e => setEducationDetails({...educationDetails,school_name_12th:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="percentage_12th">12th standard percentage</label>
                <input id="percentage_12th" value={educationDetails.percentage_12th || state?.educationDetails?.percentage_12th || ''} onChange={ e => setEducationDetails({...educationDetails,percentage_12th:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="UG_College">UG College</label>
                <input id="UG_College" type="text" value={educationDetails.UG_College || state?.educationDetails?.UG_College || ''} onChange={ e => setEducationDetails({...educationDetails,UG_College:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="UG_University">UG University</label>
                <input id="UG_University" type="text" value={educationDetails.UG_University || state?.educationDetails?.UG_University || ''} onChange={ e => setEducationDetails({...educationDetails,UG_University:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="UG_Percentage">UG Percentage</label>
                <input id="UG_Percentage" type="number" value={educationDetails.UG_Percentage ||  state?.educationDetails?.UG_Percentage || ''} onChange={ e => setEducationDetails({...educationDetails,UG_Percentage:e.target.value})} />
            </div>
            <div className={style.item}>
                        <label htmlFor="pgStatus">Have you completed your PG?</label>
                        <input type="checkbox" id="pgStatus" value={educationDetails.pgStatus || state?.educationDetails?.pgStatus || ''} onChange={ e =>{  uncheckPG (e)}  } />
            </div>
            {
                educationDetails.pgStatus && <>
            <div className={style.item}>
                <label  htmlFor="PG_College">PG College</label>
                <input id="PG_College" type="text" value={educationDetails.PG_College || state?.educationDetails?.PG_College || ''} onChange={ e => setEducationDetails({...educationDetails,PG_College:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="PG_University">PG University</label>
                <input id="PG_University" type="text" value={educationDetails.PG_University || state?.educationDetails?.PG_University || ''} onChange={ e => setEducationDetails({...educationDetails,PG_University:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="PG_Percentage">PG Percentage</label>
                <input id="PG_Percentage" type="number" value={educationDetails.PG_Percentage || state?.educationDetails?.PG_Percentage || ''} onChange={ e => setEducationDetails({...educationDetails,PG_Percentage:e.target.value})} />
            </div>
                </>
            }
        </section>
        <div>
            <button onClick={prev} className={`btn ${style.btn}`} > Previous </button>
            <button onClick={next} className={`btn ${style.btn}`} >Save & Continue </button>
        </div>
    </>
}

export default EducationalInfo;