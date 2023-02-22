import { Dispatch } from "react";
import { arrowSVGDown } from "../../icons/icons";

type TDropdownProps = {
    id: string;
    label: string;
    isRequired: boolean;
    list: string[];
    activeElement: string;
    setActiveElement: Dispatch<string>;
    isError: boolean;
    errorMassage: string;
}


export const Dropdown = ({ id, label, isRequired, list, activeElement, setActiveElement, isError, errorMassage }: TDropdownProps) => {


    const handleClick = (id: string) => {
        console.log('handleClick')
        document.getElementById(id)?.classList.toggle('dropdown__list--active')
    }


    const changeSelect = (name: string, id: string) => {
        console.log('changeSelect')
        setActiveElement(name);
        handleClick(id);
    }

    return (<div className={'dropdown ' + (isError && 'dropdown--err')}>
        <div onClick={e => handleClick(id)} className="dropdown__container" >
            <label htmlFor="">
                {label}
                {isRequired ? (
                    <span className="dropdown__required">*</span>
                ) : (
                    <span className="dropdown__not-required">(Not Required)</span>
                )}
            </label>
            <div className="dropdown__element">
                <input type="text" readOnly value={activeElement} />
                <span>
                    {arrowSVGDown}
                </span>
            </div>
        </div>
        <div id={id} className="dropdown__list">
            {list.map((elem, index) => (
                <div onClick={e => { changeSelect(elem, id) }} key={elem + index} className="dropdown__list-element ">
                    {elem}
                </div>))}
        </div>
        <div className='dropdown__err'>
            {errorMassage}
        </div>
    </div >);
}