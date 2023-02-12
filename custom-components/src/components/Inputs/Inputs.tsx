import './Inputs.scss'


export const Inputs = () => {


    return (
        <div className='inputs'>
            <h1>Inputs</h1>
            <div className='inputs__container'>
                <label htmlFor="">
                    Label
                    <span className='inputs__container-not-required'>(Not Required)</span>
                    <span className='inputs__container-required'>*</span>
                </label>
                <input  type="text" placeholder='Placeholder'/>
            </div>
            <div className='inputs__container'>
                <label htmlFor="">
                    Label
                    <span className='inputs__container-not-required'>(Not Required)</span>
                    <span className='inputs__container-required'>*</span>
                </label>
                <input disabled type="text" placeholder='Placeholder'/>
            </div>
        </div>)
}