import './Carousel.css';
import React, {useState, useEffect, useRef} from 'react';
import {GrPrevious, GrNext} from  'react-icons/gr';

const Carousal = ({children, slideShow}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselTimeRef = useRef(null);

    useEffect(() => {

        if (slideShow && slideShow > 0) {
            carouselTimeRef.current = setInterval(() => {
                nextShow();
            }, Math.floor(slideShow * 1000));
        }

        return () => clearInterval(carouselTimeRef.current);
    }, []);

    const prevShow = () => {
        if (!children) return;
        setCurrentIndex(prev => (children.length + prev - 1) % children.length);
    }

    const nextShow = () => {
        if (!children) return;
        setCurrentIndex(prev => (prev + 1) % children.length);
    }

    return (
        <div className='carousel'>
            {children && children[currentIndex]}
            <div className='prev-btn' onClick={prevShow}>
                <GrPrevious />
            </div>
            <div className='next-btn' onClick={nextShow}>
                <GrNext />
            </div>
        </div>
    );
}
 
export default Carousal;