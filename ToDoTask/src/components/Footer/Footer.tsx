
import { Dispatch, SetStateAction } from "react";
import { ITask } from "../../App";

interface IFooterProps {
    col: number;
    setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export const Footer = ({ col, setTasks }: IFooterProps) => {
    const clearAll = () => {
        setTasks([]);
    }

    return (
        <div className="app__footer">
            <div className="app__footer-elem">
                <p>{col} item selected</p>
            </div>
            <div onClick={e => clearAll()} className="app__footer-elem">
                <p>Clear All</p>
            </div>
        </div>)
}