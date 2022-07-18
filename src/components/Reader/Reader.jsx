import { useState, useEffect, useRef } from "react";
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publications } from './Publication';
import { Container } from "./Reader.styled";

const LS_KEY = 'reader_item_index';

export const Reader = ({ items }) => {
    const isMounted = useRef(false);
    const [index, setIndex] = useState(0);

    const changeIndex = value => {
        setIndex(prevIndex => prevIndex + value);
    };

    useEffect(() => {
        const savedState = localStorage.getItem(LS_KEY);
        if (savedState) {
            setIndex(Number(savedState));
        }
    }, []);
    
    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem(LS_KEY, index);
        }
        isMounted.current = true;
    }, [index]);
    
    const totalItems = items.length;
    const currentItem = items[index];

        return (
            <Container>
                <Controls
                    onChange={changeIndex}
                    total={totalItems}
                    current={index + 1}
                />
                <Progress total={ totalItems } curent={ index + 1 } />
                <Publications item={currentItem} />
            </Container>
        );

}