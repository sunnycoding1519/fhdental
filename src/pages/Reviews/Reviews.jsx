import "./Reviews.css";

import { FaStar } from "react-icons/fa";

const reviews = [

{
id:1,

name:"Rahul Sharma",

image:"/reviews/review1.jpg",

review:
"My implant treatment was completely painless. The doctors were extremely professional and the clinic environment was outstanding.",

rating:5
},

{
id:2,

name:"Priya Das",

image:"/reviews/review2.jpg",

review:
"The smile makeover completely changed my confidence. Highly recommended for cosmetic dentistry.",

rating:5
},

{
id:3,

name:"Amit Kumar",

image:"/reviews/review3.jpg",

review:
"Very clean clinic with advanced technology. Excellent experience from consultation to treatment.",

rating:5
},

{
id:4,

name:"Sneha Roy",

image:"/reviews/review4.jpg",

review:
"Friendly doctors, painless treatment and premium patient care. Thank you F&H Dental Clinic.",

rating:5
},

];

function Reviews(){

return(

<section className="reviews-section" id="reviews">

<div className="container">

<div className="section-title">

<span>PATIENT TESTIMONIALS</span>

<h2>What Our Patients Say</h2>

<p>

Real experiences from patients who trusted

F&H Aligners & Implant Dental Clinic.

</p>

</div>

<div className="reviews-grid">

{

reviews.map((item)=>(

<div className="review-card" key={item.id}>

<img

src={item.image}

alt={item.name}

/>

<div className="stars">

{

[...Array(item.rating)].map((_,i)=>(

<FaStar key={i}/>

))

}

</div>

<p>

"{item.review}"

</p>

<h3>{item.name}</h3>

</div>

))

}

</div>

</div>

</section>

)

}

export default Reviews;