import { useContext, useEffect, useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { FormContext } from '../../../App';
import * as style from './../style.module.css';

function PersonalInfo(){
    const pageNumber = 1;
    const sectionName = 'Personal Info';
    const { state, dispatch } = useContext(FormContext)
    const history = useHistory()
    useEffect( ()=> {
        dispatch({type:'changeSection',sectionName, pageNumber });
        // eslint-disable-next-line
    },[])

    const [first_name,setfirst_name] = useState('');
    const [last_name,setlast_name] = useState('');
    const [sex,setSex] = useState('');
    const [age,setAge] = useState('');
    const [interests,setInterests] = useState('');

    const next = ()=>{
        const firstname = first_name || state?.personalInfo?.first_name;
        const lastname = last_name || state?.personalInfo?.last_name;
        const sexF = sex || state?.personalInfo?.last_name;
        const ageF = age || state?.personalInfo?.age;
        const interestsF = interests || state?.personalInfo?.interests
        dispatch({type:'savePersonalInfo',sectionName: 'Education Details', personalInfo: {first_name:firstname,last_name:lastname,sex:sexF,age:ageF,interests:interestsF} });
        history.push('/educational-info');
    }
    return <><section className={style.formArea}>
        <div className={style.item}>
            <label htmlFor="first_name">First Name</label>
            <input value={first_name || state?.personalInfo?.first_name || ''} onChange={e => setfirst_name(e.target.value)} id="first_name" name="first_name" placeholder="Akash"/>
        </div>
        <div className={style.item}>
            <label htmlFor="last_name">Last Name</label>
            <input value={last_name || state?.personalInfo?.last_name || ''} onChange={e => setlast_name(e.target.value)}  id="last_name" name="last_name" placeholder="Gupta"/>
        </div>
        <div className={style.item}>
            <label htmlFor="sex">
                Sex
            </label>
            <select id="sex" value={sex || state?.personalInfo?.sex || ''} onChange={e => setSex(e.target.value)} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className={style.item}>
            <label htmlFor="age">Age</label>
            <input  id="age" value={age || state?.personalInfo?.age || ''} onChange={e => setAge(e.target.value)}  type="number" placeholder="25"  />
        </div>
        <div className={style.item}>
            <label htmlFor="interests">Interests</label>
            <textarea value={interests || state?.personalInfo?.interests || ''} onChange={e => setInterests(e.target.value)}  placeholder="Please add comma seperated values" />
        </div>
    </section>
    <div>
        <button onClick={next} className={`btn ${style.btn}`} >Next </button>
    </div>
    </>
}

export default PersonalInfo;