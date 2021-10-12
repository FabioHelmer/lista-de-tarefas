import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react';

type Props = {
    item: Item,
}

export const ListItem = ({ item }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done)


    const changeCheckd = (check: boolean, item: Item) => {
        setIsChecked(check)
        item.done = check
    }

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => changeCheckd(e.target.checked, item)}
            />
            <label htmlFor="">{item.name}</label>
        </C.Container>
    );
}