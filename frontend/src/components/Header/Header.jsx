import React, {useEffect} from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  useEffect(()=> {
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    <div className="header" data-aos="fade-up" >
      <div className="hero-content">
        {/* <h1>אין יום כמו היום להתחיל להתאמן</h1>
        <p> במרכז הכושר שלנו, מחכה לך לא רק אימון, אלא חוויה שלמה שמתמקדת בבריאות הנפש והגוף. הצטרפי אל קהילת נשים תומכת שבונה כוח, עצמאות וביטחון בכל פגישה. כל חדר כושר שלנו מעוצב בקפידה כדי להעניק לך את הסביבה המושלמת להתפתחות אישית ולהשגת יעדים בדרך שתעשה לך טוב ביותר. מאמנות מוסמכות ומקצועיות מלוות אותך בכל שלב, עם תכניות מותאמות אישית שתוכננו להבטיח שתרגישי את ההתקדמות וההצלחה כבר מהאימון הראשון.</p> */}
        {/* <a href="#join" className="cta-button">הצטרפי עכשיו</a> */}
      </div>
    </div>
    
  )
}

export default Header
