import './App.css'
import Moove from './move.json'
import Lottie from 'lottie-react'
function App() {
 

  return (
    <>
      <nav className="navbarre">
        <img src="" alt="logo" className='logo'/>
        <div className="nav-links"> 
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>about</li>
          <li>about</li>
        </ul>
        <button className='Login'>Log in</button>
        </div>
      </nav>
      <div className='hero'>
        <div className='hero-section-left'>
        <h1>Hero Section Frexes Second Draft</h1>
        <p>
        Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email.
        </p>
        </div > 
        <div className='hero-section-right'>
        <Lottie animationData={Moove} />
        </div>
      </div>
      <div className='second-groupe'>
        <h1 className='card'>Cards</h1>
        <p>ant to receive a monthly email in your inbox with awesome free Webflow cloneables,<br/> resources and more? Please submit your email. </p>
      </div>
      <div className='second-groupe-cards'>
        <div className='cards-form'> <img src="./src/assets/Rectangle.png" alt="" className='card-img'/> <div className='card-content'><h1> Marketing</h1> <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p><h4 className='see-more'>See more</h4></div> </div>
        <div className='cards-form'><img src="./src/assets/Rectangle.png" alt="" className='card-img'/> <div className='card-content'><h1> Developement</h1> <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p><h4 className='see-more'>See more</h4></div></div>
        <div className='cards-form'><img src="./src/assets/Rectangle.png" alt="" className='card-img'/> <div className='card-content'><h1> Strategy</h1> <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p><h4 className='see-more'>See more</h4></div> </div>
      </div>
      <div className='hero'>
        <div className='hero-section-left'>
        <h1>Hero Section Frexes</h1>
        <p>
        Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email.Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email.
        </p>
        <button className='See-more-butt'>See more</button>
        </div > 
        <img src="./src/assets/Rectangle.png" alt="Animation" className='hero-section-right'/>
      </div>
      <div className='hero'>
      <img src="./src/assets/Rectangle.png" alt="Animation" className='third-section-left'/>
        <div className='third-section-right'>
        <h1>Hero Section Frexes</h1>
        <p>
        Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email.Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email.
        </p>
        <button className='See-more-butt'>See more</button>
        </div > 
       
      </div>
      <div className='section-four'>
        <div className='second-card-form'><img src="./src/assets/icon-phone-call.png" alt="Call" className='img-second-card' /><div className='second-card-content'><h2>Support</h2><p>Delivering faster and more personalized support with shared screens and cool design systems for Figma </p></div></div>
        <div className='second-card-form'><img src="./src/assets/icon-pie-chart.png" alt="" className='img-second-card' /><div className='second-card-content'><h2>Sales growth</h2><p>Delivering faster and more personalized support with shared screens and cool design systems for Figma </p></div></div>
        <div className='second-card-form'><img src="./src/assets/icon-zap.png" alt="" className='img-second-card' /><div className='second-card-content'><h2>Components driven</h2><p>Delivering faster and more personalized support with shared screens and cool design systems for Figma </p></div></div>
      </div>
      <div className='fourth-section'>
        <img src="./src/assets/Mobile login-amico 1.png" alt="" className='fourth-section-img'/>
        <div className='fourth-section-right'>
        <h2>Get in touch</h2>
        <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Object'/>
        <input type="text" placeholder='Content' className='input-content'/>
        <button>Send</button>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-left'>
          <p>We translate your ideas into the state of the art digital products. We develop and build fast, reliable experiences that stand the test of time.</p>
          <ul>
            <li><a href="">Email.</a></li>
            <li><a href="">Object.</a></li>
            <li><a href="">Content</a></li>
          </ul>
          <p>© 2023 Frexs. All rights reserved.</p>
        </div>
        <div className='footer-right'>
          <h3>Content</h3>
          <p>Home</p>
          <p>What we do</p>
          <p>Who we are</p>
          <p>Contact us</p>
        </div>
      </div>
    </>
  )
}

export default App
