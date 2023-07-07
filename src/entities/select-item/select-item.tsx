import { FC } from "react"
import c from './select-item.module.css'

type SelectItemProps = {
  item: any
  chooseValue: any
}

export const SelectItem: FC<SelectItemProps> = ({ item, chooseValue }) => {
  return (
    <div className={c.select_block_item} onClick={() => chooseValue(item.value)}><p>{item.value} {item.job ? item.job : ''}</p><span className={c.select_block_item_tag}></span></div>)
}