import { useState } from 'react';
import { Dropdown } from './Dropdown';
import './Dropdowns.scss'
//




const list = ["Element1", "Element2", "Element3", "Element4"];


export const Dropdowns = () => {



    const [select, setSelect] = useState(list[0]);



    const handleClick = (id: string) => {
        console.log('handleClick')
        document.getElementById(id)?.classList.toggle('dropdown__list--active')
    }


    const changeSelect = (name: string, id: string) => {
        console.log('changeSelect')
        setSelect(name);
        handleClick(id);
    }

    return (
        <div className="dropdowns ">
            <h1>Dropdown</h1>
            <Dropdown
                id='select-one'
                label='label'
                isRequired={false}
                list={list}
                activeElement={select}
                setActiveElement={setSelect}
                isError={false}
                errorMassage={'errorMassage'} />
            <Dropdown
                id='select-two'
                label='label'
                isRequired={true}
                list={list}
                activeElement={select}
                setActiveElement={setSelect}
                isError={false}
                errorMassage={'errorMassage'} />
            <Dropdown
                id='select-three'
                label='label'
                isRequired={false}
                list={list}
                activeElement={select}
                setActiveElement={setSelect}
                isError={true}
                errorMassage={'error-massage'} />
        </div>)
}

/*
<div className='dropdown dropdown--err'>
                <div onClick={e => handleClick('one')} className="dropdown__container">
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
                        <div onClick={e => { changeSelect(elem, 'one') }} key={elem + index} className="dropdown__list-element ">
                            {elem}
                        </div>))}
                </div>
                <div className='dropdown__err'>

                    Error

                </div>
            </div>










*/