import React, { FC } from 'react';
import { Collapse } from '@mui/material';
import c from './drop-down-item.module.css'
import arrow from '../../../public/svg/arrow_red.svg'
type DropDownItemProps = {
    header: string,
    text: string
}

export const DropDownItem: FC<DropDownItemProps> = ({ header, text }) => {

    const [open, setOpen] = React.useState(false);
    const openAnswer = () => {
        setOpen(!open);
    };
    return (
        <section className={c.item}>
            <div className={c.item_header}>
                <div className={c.item_header_text} onClick={openAnswer}>{header}</div>
                <div className={open ? c.item_header_btn_hidden : c.item_header_btn} onClick={openAnswer}>
                    <img src={arrow} alt="open text" />
                </div> 
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className={c.item_text}>
                    <p className={c.item_text_content}>{text}</p>
                    <div className={c.item_text_btn}>
                        <img src={arrow} alt="open text" onClick={openAnswer} /></div>
                </div>
            </Collapse>
        </section>
    )
}