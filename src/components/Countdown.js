import '@/styles/cards.css'
import { useEffect } from 'react';

export default function Countdown() {

    useEffect(() => {

        const futureDate = new Date(2024, 0, 19); // January 19, 2024

        const days = document.querySelector(".days").querySelector(".flip-card");
        const hours = document.querySelector(".hours").querySelector(".flip-card");
        const minutes = document.querySelector(".minutes").querySelector(".flip-card");
        const seconds = document.querySelector(".seconds").querySelector(".flip-card");


        function getTimeRemaining() {
            const now = new Date();
            const diff = futureDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            return {
                diff,
                days,
                hours,
                minutes,
                seconds
            };
        }


        function initializeClock(futureDate) {
            function updateClock() {
                const t = getTimeRemaining(futureDate);
                addFlip(days, t.days);
                addFlip(hours, t.hours);
                addFlip(minutes, t.minutes);
                addFlip(seconds, t.seconds);

                if (t.diff <= 0) {
                    clearInterval(timeinterval);
                }
            }

            updateClock();
            const timeinterval = setInterval(updateClock, 1000);
        }

        const addFlip = (card, time) => {
            // ** confirm time has changed
            const currTime = card.querySelector(".top-half").innerText;
            if (time == currTime) return;

            let t = time <= 9 ? `0${time}` : time;
            const topHalf = card.querySelector(".top-half");
            const bottomHalf = card.querySelector(".bottom-half");
            const topFlip = document.createElement("div");
            const bottomFlip = document.createElement("div");

            // ** add animation, populate with current time
            topFlip.classList.add("top-flip");
            topFlip.innerText = currTime;

            bottomFlip.classList.add("bottom-flip");

            // ** animation begins, update top-half to new time
            topFlip.addEventListener("animationstart", () => {
                topHalf.innerText = t;
            });

            // ** animation ends, remove animated div, update bottom animation to new time
            topFlip.addEventListener("animationend", () => {
                topFlip.remove();
                bottomFlip.innerText = t;
            });

            // ** animation ends, update bottom-half to new time, remove animated div
            bottomFlip.addEventListener("animationend", () => {
                bottomHalf.innerText = t;
                bottomFlip.remove();
            });

            card.appendChild(topFlip);
            card.appendChild(bottomFlip);
        };

        initializeClock(futureDate);

    }, [])


    return (

        <main>
            <div className='cards'>

                <div className='card days'>
                    <div className='flip-card'>
                        <div className='top-half'>00</div>
                        <div className='bottom-half'>00</div>
                    </div>
                    <p>Days</p>
                </div>

                <div className='card hours'>
                    <div className='flip-card'>
                        <div className='top-half'>00</div>
                        <div className='bottom-half'>00</div>
                    </div>
                    <p>Hours</p>
                </div>

                <div className='card minutes'>
                    <div className='flip-card'>
                        <div className='top-half'>00</div>
                        <div className='bottom-half'>00</div>
                    </div>
                    <p>Minutes</p>
                </div>

                <div className='card seconds'>
                    <div className='flip-card'>
                        <div className='top-half'>00</div>
                        <div className='bottom-half'>00</div>
                    </div>
                    <p>Seconds</p>
                </div>

            </div>
        </main>

    )
}