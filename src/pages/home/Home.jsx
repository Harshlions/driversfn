import React from 'react'
import './Home.css';
export default function Home()
{
  return (
    <>
<div className="home">
     <div className="banner">
              <img id='banner' src="/img/banner1.png" alt="" /> { /* banner */ } 
                  <img className='logo' src="/img/logo 1.svg" alt="" /> {/* logo */ }
              <h1>DRIVE SAFE</h1>
                  <h2>AND EARN!</h2>
          <div className="dicons">         
               <img id='iicon' src="/img/iicon.png" alt="" />
               <img id='aicon' src="/img/aicon.png" alt="" />
          </div>
    </div>   {/* banner end */}
      <div className="fade"></div> {/* fading effect */}
    <div className="what">
        <div className="ques">
          <h3> What is DriverSFN?</h3>
        </div>
        <img id='s50km' src="/img/50m.png" alt="" />

      <div className="desc">
          <h2>DriveSfn is the World's first Block chain based Drive-and-earn Navigation based App,
             where drivers can earn cryptocurrency tokens by driving safely and obeying the speed limits. </h2>    
     </div>

     <div className="cards">

            <div className="card1">
            <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.634766" y="0.535156" width="118.04" height="118.04" rx="59.02" fill="#FBECE4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.8251 83.849C46.1715 83.849 45.6416 83.3191 45.6416 82.6656V42.4283C45.6416 40.4675 47.2311 38.8779 49.192 38.8779H79.9616C80.4599 38.8779 80.9049 39.19 81.0743 39.6585C81.244 40.127 81.102 40.6516 80.7193 40.9705L67.6088 51.8959L80.7193 62.8213C81.102 63.1403 81.244 63.6648 81.0743 64.1332C80.9049 64.6016 80.4599 64.9138 79.9616 64.9138H53.9257C53.2722 64.9138 52.7423 64.3839 52.7423 63.7304C52.7423 63.0769 53.2722 62.5469 53.9257 62.5469H76.693L65.0026 52.805C64.7328 52.5802 64.5768 52.2471 64.5768 51.8959C64.5768 51.5447 64.7328 51.2116 65.0026 50.9867L76.693 41.2448H49.192C48.5384 41.2448 48.0085 41.7747 48.0085 42.4283V82.6656C48.0085 83.3191 47.4786 83.849 46.8251 83.849Z" fill="url(#paint0_linear_2043_5312)"/>
<defs>
<linearGradient id="paint0_linear_2043_5312" x1="47.1018" y1="52.8367" x2="82.1595" y2="63.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#E21E04"/>
<stop offset="1" stop-color="#E26104"/>
</linearGradient>
</defs>
</svg>

              <h3>Our Goal</h3>
              <p>To provide a practical solution to
    the high number of traffic accidents
    caused by speeding and to
    reduce fuel emissions,
    making the world a safer
    and environmentally cleaner place.</p>
            </div>
            <div className="card2">
            <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.634766" y="0.535156" width="118.04" height="118.04" rx="59.02" fill="#FBECE4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.8251 83.849C46.1715 83.849 45.6416 83.3191 45.6416 82.6656V42.4283C45.6416 40.4675 47.2311 38.8779 49.192 38.8779H79.9616C80.4599 38.8779 80.9049 39.19 81.0743 39.6585C81.244 40.127 81.102 40.6516 80.7193 40.9705L67.6088 51.8959L80.7193 62.8213C81.102 63.1403 81.244 63.6648 81.0743 64.1332C80.9049 64.6016 80.4599 64.9138 79.9616 64.9138H53.9257C53.2722 64.9138 52.7423 64.3839 52.7423 63.7304C52.7423 63.0769 53.2722 62.5469 53.9257 62.5469H76.693L65.0026 52.805C64.7328 52.5802 64.5768 52.2471 64.5768 51.8959C64.5768 51.5447 64.7328 51.2116 65.0026 50.9867L76.693 41.2448H49.192C48.5384 41.2448 48.0085 41.7747 48.0085 42.4283V82.6656C48.0085 83.3191 47.4786 83.849 46.8251 83.849Z" fill="url(#paint0_linear_2043_5312)"/>
<defs>
<linearGradient id="paint0_linear_2043_5312" x1="47.1018" y1="52.8367" x2="82.1595" y2="63.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#E21E04"/>
<stop offset="1" stop-color="#E26104"/>
</linearGradient>
</defs>
</svg>

              <h3>Our Goal</h3>
              
              <p>To provide a practical solution to
    the high number of traffic accidents
    caused by speeding and to
    reduce fuel emissions,
    making the world a safer
    and environmentally cleaner place.</p>
            </div>
            <div className="card3">
            <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.634766" y="0.535156" width="118.04" height="118.04" rx="59.02" fill="#FBECE4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.8251 83.849C46.1715 83.849 45.6416 83.3191 45.6416 82.6656V42.4283C45.6416 40.4675 47.2311 38.8779 49.192 38.8779H79.9616C80.4599 38.8779 80.9049 39.19 81.0743 39.6585C81.244 40.127 81.102 40.6516 80.7193 40.9705L67.6088 51.8959L80.7193 62.8213C81.102 63.1403 81.244 63.6648 81.0743 64.1332C80.9049 64.6016 80.4599 64.9138 79.9616 64.9138H53.9257C53.2722 64.9138 52.7423 64.3839 52.7423 63.7304C52.7423 63.0769 53.2722 62.5469 53.9257 62.5469H76.693L65.0026 52.805C64.7328 52.5802 64.5768 52.2471 64.5768 51.8959C64.5768 51.5447 64.7328 51.2116 65.0026 50.9867L76.693 41.2448H49.192C48.5384 41.2448 48.0085 41.7747 48.0085 42.4283V82.6656C48.0085 83.3191 47.4786 83.849 46.8251 83.849Z" fill="url(#paint0_linear_2043_5312)"/>
<defs>
<linearGradient id="paint0_linear_2043_5312" x1="47.1018" y1="52.8367" x2="82.1595" y2="63.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#E21E04"/>
<stop offset="1" stop-color="#E26104"/>
</linearGradient>
</defs>
</svg>

              <h3>Our Goal</h3>
              <p>To provide a practical solution to
    the high number of traffic accidents
    caused by speeding and to
    reduce fuel emissions,
    making the world a safer
    and environmentally cleaner place.</p>
        </div>

     </div>
     </div> 

     <div className="motivation">

        <h1>Our Motivation</h1>
        <hr />
       <p>It's a well known fact that in many countries bad driving incurs a penalty of some kind.
In most cases this comes in the form of a financial cost to the
driver. What if this same notion was flipped on it's head, what if we could financially reward motorists for good driving? It’s been proven time and again that the carrot works better than a stick. Think of DriveSfn as the carrot, which incentivises drivers to be more responsible, by taking the financial stick
being used by law enforcement agencies all over the world and turning into a $DriveS shaped carrot,
welcome to DriveSfn…
</p> 

     </div>

     <div className="diffrences">

        <div className="sq1">
        <img src="/img/sf1.png" alt="" />
       <p>Emphasis is on driving safely, not to encourage driving.

          Considers environmental benefits.

          Rewards safely driven miles only.

          Navigation based interface.

          Aimed at reducing fuel consumtion.

          Aimed at reducing road traffic accidents.

          Aimed at reducing fuel emissions.

</p>
        </div>
     <div className="rect1">

     <img src="/img/logo2.png" alt="" />

      </div>   
    <div className="rect2">

    <img src="/img/od2e.png" alt="" />

    </div>
   </div>

    <div className="statistics">

      <h1>STATISTICS</h1>

      <img src="/img/Ocar.png" alt="" />
      <img id='sp' src="/img/speedlimit.png" alt="" />
      <div className="drects">
      <div className="drect1">
          <h1>1,300,294 km</h1>
          <p>Total Driven Distance </p>
      </div>
      <div className="drect2">
          <h1>780,176.4 km</h1>
          <p>Safe Distance Driven </p>
      </div>
      <div className="drect3">
          <h1>60%</h1>
          <p>Percentage safe drives</p>
      </div>
      <div className="drect4">
        <h1>2,345,973 <h2>$DriveS </h2></h1>
        <p>SAFE DRIVING REWARDS TO DATE</p>
      </div>
      </div>
    </div>

    <div className="roadmap">
      
      <h1>ROADMAP</h1>

      <div className="rcards">

        <div className="rcard1">

          <h1>PHASE 1</h1>

        </div>
        <div className="rcard2">

        <h1>PHASE 2</h1>


        </div>
        <div className="rcard3">

        <h1>PHASE 3</h1>


        </div>
        <img id='road' src="/img/road.png" alt="" />
        <img id='sp45' src="/img/sp45.png" alt="" />
        <img id='sp50' src="/img/50m.png" alt="" />

        <div className="rcard4">

        <h1>PHASE 4</h1>


        </div>
        <div className="rcard5">

            <h1>further</h1>

        </div>

      </div>
      </div>
    
    <div className="ourteam">
      <h1>OUR TEAM</h1>
        <div className="pos">
          <div className="ceo">
            <img src="/img/ceo.png" alt="" />
                  <h3>Yasin Kart</h3>
                  <p>ceo</p>
            
                  </div>
                  <div className="cso">
            <img src="/img/cso.png" alt="" />
                 <h3>Sophie Braun</h3>
                  <p>cso</p>
                  </div>
           <div className="cto">
            <img src="/img/cto.png" alt="" />
                <h3>Roshan Vadassery</h3>
                  <p>cto</p>
                  </div>
             <div className="cmo">  
           
            <img  src="/img/cmo.png" alt="" />
                 <h3>Selina Aley </h3>
                  <p>cmo</p>
                  </div>   
          <div className="ccm">
            <img src="/img/ccm.png" alt="" />
                 <h3>Robin Pranke</h3>
                  <p>ccm</p>
                  </div>

        </div>
    </div>

      <div className="joinin">
        <h1>Drive Safely and Earn</h1>
      <div className="sicons">
        <svg id='twitter' width="66" height="53" viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* twitter */}
<path d="M65.3758 6.25165C62.9291 7.31806 60.3414 8.0268 57.6926 8.35602C60.484 6.70107 62.5711 4.0805 63.5586 0.990711C60.9448 2.53989 58.085 3.63083 55.103 4.21634C53.2747 2.26544 50.9015 0.909131 48.2918 0.323626C45.682 -0.26188 42.9564 -0.049518 40.4691 0.933121C37.9817 1.91576 35.8475 3.62325 34.3438 5.83376C32.8402 8.04427 32.0364 10.6556 32.0372 13.3285C32.0372 14.3848 32.1266 15.4004 32.3461 16.3673C27.0414 16.1074 21.8512 14.7315 17.1151 12.3296C12.3789 9.92775 8.20335 6.55396 4.86138 2.42884C3.1492 5.36139 2.61987 8.83584 3.38118 12.1447C4.14248 15.4536 6.13718 18.3481 8.95909 20.2388C6.84827 20.1823 4.782 19.6194 2.93448 18.5976V18.7438C2.93802 21.8209 4.00227 24.8028 5.94808 27.1876C7.89389 29.5724 10.6024 31.2144 13.6178 31.8373C12.477 32.1377 11.3014 32.2853 10.1217 32.276C9.2745 32.2911 8.42812 32.2148 7.59725 32.0485C8.45883 34.6933 10.1197 37.0062 12.3511 38.6686C14.5825 40.331 17.2747 41.2613 20.0571 41.3313C15.3371 45.0202 9.51591 47.0214 3.52394 47.0148C2.4304 47.0148 1.38158 46.966 0.332764 46.832C6.43006 50.7585 13.5352 52.8356 20.7888 52.812C45.3263 52.812 58.7414 32.4995 58.7414 14.8926C58.7414 14.3035 58.721 13.7348 58.6926 13.1701C61.3226 11.2891 63.5874 8.9446 65.3758 6.25165Z" fill="#B9BABA"/>
        </svg>
        <svg id='dis' width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<path d="M55.8732 15.9649C48.3066 10.3034 41.0578 10.462 41.0578 10.462L40.3168 11.3083C49.3121 14.0071 53.4923 17.9754 53.4923 17.9754C40.6229 10.8897 24.2299 10.9404 10.8438 17.9754C10.8438 17.9754 15.1826 13.7952 24.707 11.0964L24.1779 10.4614C24.1779 10.4614 16.9818 10.3028 9.36246 15.9643C9.36246 15.9643 1.74316 29.6689 1.74316 46.5481C1.74316 46.5481 6.18786 54.1674 17.882 54.5379C17.882 54.5379 19.8398 52.2096 21.4271 50.1991C14.7068 48.1887 12.1672 44.0085 12.1672 44.0085C16.389 46.6501 20.6582 48.3037 25.9778 49.3528C34.6332 51.1345 45.3991 49.3028 53.4396 44.0085C53.4396 44.0085 50.7941 48.2946 43.8625 50.2524C45.4498 52.2102 47.355 54.4852 47.355 54.4852C59.0478 54.1154 63.4925 46.4961 63.4925 46.5487C63.4925 29.6695 55.8732 15.9649 55.8732 15.9649ZM22.7492 41.6282C19.7859 41.6282 17.3523 39.0354 17.3523 35.8075C17.5687 28.0777 27.9843 28.1017 28.1468 35.8075C28.1462 39.0354 25.7652 41.6282 22.7492 41.6282ZM42.0627 41.6282C39.0993 41.6282 36.6657 39.0354 36.6657 35.8075C36.9036 28.0926 47.1892 28.0894 47.4603 35.8075C47.4596 39.0354 45.0787 41.6282 42.0627 41.6282Z" fill="black"/>
</g>
        </svg>
 
         <svg id='ins' width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2" clip-path="url(#clip0_2163_4512)">
<path d="M44.9229 0H20.5479C15.1606 0 9.99408 2.14006 6.18475 5.94939C2.37541 9.75873 0.235352 14.9253 0.235352 20.3125L0.235352 44.6875C0.235352 50.0747 2.37541 55.2413 6.18475 59.0506C9.99408 62.8599 15.1606 65 20.5479 65H44.9229C50.3101 65 55.4766 62.8599 59.286 59.0506C63.0953 55.2413 65.2354 50.0747 65.2354 44.6875V20.3125C65.2354 14.9253 63.0953 9.75873 59.286 5.94939C55.4766 2.14006 50.3101 0 44.9229 0V0ZM59.1416 44.6875C59.1416 52.5281 52.7635 58.9062 44.9229 58.9062H20.5479C12.7072 58.9062 6.3291 52.5281 6.3291 44.6875V20.3125C6.3291 12.4719 12.7072 6.09375 20.5479 6.09375H44.9229C52.7635 6.09375 59.1416 12.4719 59.1416 20.3125V44.6875Z" fill="black"/>
<path d="M32.7354 16.25C28.4256 16.25 24.2923 17.962 21.2449 21.0095C18.1974 24.057 16.4854 28.1902 16.4854 32.5C16.4854 36.8098 18.1974 40.943 21.2449 43.9905C24.2923 47.038 28.4256 48.75 32.7354 48.75C37.0451 48.75 41.1784 47.038 44.2258 43.9905C47.2733 40.943 48.9854 36.8098 48.9854 32.5C48.9854 28.1902 47.2733 24.057 44.2258 21.0095C41.1784 17.962 37.0451 16.25 32.7354 16.25ZM32.7354 42.6562C30.0427 42.653 27.4613 41.582 25.5574 39.678C23.6534 37.774 22.5823 35.1926 22.5791 32.5C22.5791 26.8978 27.1372 22.3438 32.7354 22.3438C38.3335 22.3438 42.8916 26.8978 42.8916 32.5C42.8916 38.0981 38.3335 42.6562 32.7354 42.6562Z" fill="black"/>
<path d="M50.2044 17.1968C51.4002 17.1968 52.3697 16.2274 52.3697 15.0315C52.3697 13.8357 51.4002 12.8662 50.2044 12.8662C49.0085 12.8662 48.0391 13.8357 48.0391 15.0315C48.0391 16.2274 49.0085 17.1968 50.2044 17.1968Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2163_4512">
<rect width="65" height="65" fill="white" transform="translate(0.235352)"/>
</clipPath>
</defs>
         </svg>

          <svg id='tele' width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2348 32.6157L43.3239 24.0005L31.2487 35.5965L30.6803 40.9013L33.9689 37.7213L44.7104 46.4533L50.1203 17.5293L20.0269 30.0421L27.2348 32.6157Z" fill="#B9BABA"/>
<path d="M59.3336 0H5.96555C3.03081 0 0.628418 2.4008 0.628418 5.3336V58.6664C0.628418 61.5992 3.03081 64 5.96555 64H59.3336C62.2684 64 64.6707 61.5992 64.6707 58.6664V5.3336C64.6707 2.4008 62.2684 0 59.3336 0ZM49.0724 52.1664C49.0724 52.1664 48.0093 54.984 45.0858 53.6328L34.2755 44.8464L27.3437 51.5496C27.3437 51.5496 26.8017 51.9848 26.2077 51.7112C26.2077 51.7112 25.697 51.6592 25.0566 49.524C24.4201 47.3808 21.1788 36.1176 21.1788 36.1176L10.4477 32.2872C10.4477 32.2872 8.80022 31.6672 8.64412 30.3152C8.48321 28.964 10.5045 28.2296 10.5045 28.2296L53.1575 10.4904C53.1575 10.4904 56.6655 8.8576 56.6655 11.5608L49.0724 52.1664Z" fill="#B9BABA"/>
          </svg>

        </div>
      </div>
</div>
    </>
  )
}


