import React from 'react'
import {useSpring, animated} from 'react-spring';

const noteStyle = {
    background: '#A7E99C',
    color: 'white',
    padding: '1.5rem'

}

const embedStyle = {
    background: "transparent",
    border: ""
    
  };

function SlideCalendarCollab() {

    const slideStyle = useSpring({
        from: {
            opacity: 0,
            marginRight:-500
        },
        to:{
            opacity: 1,
            marginRight:0
        }
    });


    return (
    
    <animated.div style={slideStyle}>
        <div style={noteStyle}>
            <br></br>
            <iframe class="airtable-embed" 
                src="https://airtable.com/embed/shru3rbc7s9mbQj2i"
                frameborder="0"
                sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
                loading="lazy"
                onmousewheel=""
                width="50%" 
                height="533"
                style={embedStyle}
            />
        </div>
    </animated.div>
           
    )
}

export default SlideCalendarCollab
