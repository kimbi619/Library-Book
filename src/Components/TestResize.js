
import React, { useEffect} from 'react'

const TestResize = () => {

    
    useEffect(() => {
        const doc = document.querySelector('.div');
        doc.addEventListener('mousedown',mousedown);
        const resize = document.querySelector('.border-right')
        resize.addEventListener('mousedown', resizer);
        
        let isRezing = false;

        function mousedown(e){
            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);
    
            function mousemove(e){
                if(!isRezing){
                    doc.style.top = e.clientY+'px';
                    doc.style.left = e.clientX+'px';
                }
            }
    
            // remove all mouse move event to set current position
            function mouseup(){
                window.removeEventListener('mousedown', mousedown);
                window.removeEventListener('mousemove', mousemove);
            }

        }
        

        // declaring resize function 

        function resizer(e){
            isRezing = true;
            let prevX = e.clientX
            
            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);

            function mousemove(e){
                const rec = doc.getBoundingClientRect();
                doc.style.width = rec.width -(prevX - e.clientX) + 'px';

            }
            prevX = e.clientX;

            function mouseup(){
                window.removeEventListener('mousedown', mousedown);
                window.removeEventListener('mousemove', mousemove);
                isRezing = false;
            }

        }
    })


   
    return (
        <div className="div"><div className="border-right"></div></div>
    )
}

export default TestResize
