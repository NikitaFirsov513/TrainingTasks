import { useState } from 'react';
import './Dropdowns.scss'
//




const list = ["Element1", "Element2", "Element3", "Element4"];


export const Dropdowns = () => {



    const [select, setSelect] = useState(list[0]);



    const handleClick = (id: string) => {
        document.getElementById(id)?.classList.toggle('dropdown__list--active')
    }


    const changeSelect = (name: string) => {
        setSelect(name);
    }

    return (
        <div className="dropdowns">
            <h1>Dropdown</h1>
            <div onMouseLeave={e => handleClick('one')}  onClick={e => handleClick('one')} className='dropdown'>
                <div className="dropdown__container">
                    <label htmlFor="">
                        Label
                        <span className="dropdown__required">*</span>
                        <span className="dropdown__not-required">(Not Required)</span>
                    </label>
                    <div className="dropdown__element">
                        <input type="text" readOnly value={select} />
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6 7.45834L11.1667 12.8917C10.525 13.5333 9.47503 13.5333 8.83336 12.8917L3.40002 7.45834" stroke="#B3B3B3" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div id='one' className="dropdown__list">
                    {list.map((elem, index) => (
                        <div onClick={e => { changeSelect(elem) }} key={elem + index} className="dropdown__list-element ">
                            {elem}
                        </div>))}
                </div>
            </div>

            


        </div>)
} 