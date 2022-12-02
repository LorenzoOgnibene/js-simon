const milliseconds = document.getElementById('ms');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
let conditionTimer = false;
let millisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;


start.addEventListener('click', function(){
   

    if(!conditionTimer){
        conditionTimer = true;
        const timer = setInterval(() => {
            milliseconds.innerHTML = millisecond += 10;
           
            if(millisecond == 90){
                millisecond = 0;
                second++;
                
            }else if(second == 60){
                minute++;
                second = 0;
                
            }else if(minute == 60){
                minute = 0;
                hour++;
            }

            seconds.innerHTML = second;
            minutes.innerHTML = minute;
            hours.innerHTML = hour;
        }, 90);  

        pause.addEventListener('click', function(){
            clearInterval(timer);
            conditionTimer = false;
        })
        
        reset.addEventListener('click', function(){
            milliseconds.innerHTML = 0;
            seconds.innerHTML = 0;
            minutes.innerHTML = 0;
            hours.innerHTML = 0;
            second = 0;
            millisecond = 0;
            minute = 0;
            hour = 0;
        })
    }

})