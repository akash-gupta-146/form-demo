import { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { FormContext } from '../../../App';
import * as style from './../style.module.css';

function ContactInfo(){
    const pageNumber = 3;
    const sectionName = 'Contact Infornation';
    const { state, dispatch } = useContext(FormContext)
    const history = useHistory()
    useEffect( ()=> {
        dispatch({type:'changeSection',sectionName, pageNumber });
    },[])
    const [contactDetails, setContactDetails] = useState({})
    const next = ()=>{
        dispatch({type:'saveContactDetails',sectionName, contactDetails: {...contactDetails }});
        history.push('/view-info');
    }
    const prev = ()=>{
        dispatch({type:'changeSection',sectionName:'Educational Info', pageNumber:pageNumber-1 });
        history.push('/educational-info');
    }
    return<> 
        <section className={style.formArea}>
            <div className={style.item}>
                <label  htmlFor="email">Email</label>
                <input id="email" type="email" value={contactDetails.email || state?.contactDetails?.email ||''} onChange={ e => setContactDetails({...contactDetails,email:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="phone">Phone</label>
                <input id="phone" type="tel" value={contactDetails.phone || state?.contactDetails?.phone || ''} onChange={ e => setContactDetails({...contactDetails,phone:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="address">Address</label>
                <textarea value={contactDetails.address || state?.contactDetails?.address || ''} onChange={ e => setContactDetails({...contactDetails,address:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="city">City</label>
                <input id="city" type="text" value={contactDetails.city || state?.contactDetails?.city||''} onChange={ e => setContactDetails({...contactDetails,city:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="state">State</label>
                <input id="state" type="text" value={contactDetails.state|| state?.contactDetails?.state||''} onChange={ e => setContactDetails({...contactDetails,state:e.target.value})} />
            </div>
            <div className={style.item}>
                <label  htmlFor="country">Country</label>
                <input id="country" type="text" value={contactDetails.country || state?.contactDetails?.country ||''} onChange={ e => setContactDetails({...contactDetails,country:e.target.value})} />
            </div>
        </section>
        <div>
            <button onClick={prev} className={`btn ${style.btn}`} > Previous </button>
            <button onClick={next} className={`btn ${style.btn}`} >Save & Continue </button>
        </div>
    </>
}

export default ContactInfo;