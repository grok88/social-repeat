import React, {useState} from "react";
import styles from "../../users/Users.module.css";

type PaginatorPropstype = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    changeCurrent: (currentPage: number) => void
    portionSize: number
    portionNumber: number;
    setPortionNumber: (portionNum: number) => void;
}
export const Paginator: React.FC<PaginatorPropstype> = ({totalUserCount, pageSize, changeCurrent, portionSize,portionNumber,setPortionNumber, currentPage}) => {

    const pageCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    // let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>}
        {
            pages.filter(p => p >=leftPortionPageNumber && p <=rightPortionPageNumber)
                .map(p => {
                return <span key={p}
                             className={currentPage === p ? styles.currentPage : ''}
                             onClick={() => changeCurrent(p)}
                >{p}</span>
            })
        }
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
    </div>
}