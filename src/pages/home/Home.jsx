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
          
            <img id='ceo' src="/img/ceo.png" alt="" />
                  <h3>Yasin Kart</h3>
                  <p>ceo</p>
            
            
            <img src="/img/cso.png" alt="" />
                 <h3>Sophie Braun</h3>
                  <p>cso</p>
          
           
            <img src="/img/cto.png" alt="" />
                <h3>Roshan Vadassery</h3>
                  <p>cto</p>
           
           
            <img  src="/img/cmo.png" alt="" />
                 <h3>Selina Aley </h3>
                  <p>cmo</p>
            
          
            <img src="/img/ccm.png" alt="" />
                 <h3>Robin Pranke</h3>
                  <p>ccm</p>
          

        </div>
    </div>

    

    

 

</div>
    </>
  )
}


