import { useContext, useEffect } from 'react';
import { FormContext } from '../../App';
import * as style from './style.module.css';

function Header(){

    const { state, dispatch } = useContext(FormContext)
    return <header className={style.header}>
        
        <a href="/"> 🏠  <b>Home</b></a>
        <b>{ state.sectionName || 'Personal form' }</b>
        {/* <span>Clear</span> */}
    </header>
}

export default Header;