import { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { FormContext } from '../../../App';
import * as style from './../style.module.css';

function ViewInfo(){
    const pageNumber = 4;
    const sectionName = 'Form Review';
    useEffect( ()=> {
        dispatch({type:'changeSection',sectionName, pageNumber });
    },[])
    const { state, dispatch } = useContext(FormContext)
    const history = useHistory()
    let categories = Object.keys(state);

    const getCategoryDetails = (category) => {
        let fields = Object.keys( state[category] );
        return fields?.map( field => {
            if(state[category][field])
            return <div style={{margin:'10px'}}>
                <span style={{minWidth:'200px',display:'inline-block'}}>{field.toUpperCase()} </span> : <span>{ state[category][field] }</span>
            </div>
            else
                return <></>
        })
    }
    const prev = ()=>{
        dispatch({type:'changeSection',sectionName:'Contact Info', pageNumber:pageNumber-1 });
        history.push('/contact-info');
    }

    const getCategory = () => {
        return categories.map( category =>{
            if(typeof state[category] === 'object' ){
                console.log(category, 'sdsdddssdd')
                return <div>
                    <h3 style={{color:'teal'}}>{ category.toUpperCase() }</h3>
                    {getCategoryDetails(category)}
                </div>
            }
        })
    }
    return<> 
        <section className={style.formArea}>
            { getCategory() }
        </section>
        <div>
            <button onClick={prev} className={`btn ${style.btn}`} > Previous </button>
        </div>
    </>
}

export default ViewInfo;