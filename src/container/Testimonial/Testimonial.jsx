// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
// import './Testimonial.scss';

// const Testimonial = () => {
//     const [brands, setBrands] = useState([])
//     const [testimonial, setTestimonial] = useState([])
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleClick = (index) => {
//         setCurrentIndex(index)
//     }

//     useEffect(() => {
//         const testimonialQuery = '*[_type == "testimonial"]';
//         const brandsQuery = '*[_type == "brands"]';

//         client.fetch(testimonialQuery)
//             .then((data) => {
//                 setTestimonial(data)
//             })
//         client.fetch(brandsQuery)
//             .then((data) => {
//                 setBrands(data)
//             })
//     }, [])

//     const test = testimonial[currentIndex]

//     return (
//         <>
//             {testimonial.length && (
//                 <>
//                     <div className='app__testimonial-item app_flex'>
//                         <img src={urlFor(test.imgurl)} alt="testimonial" />
//                         <div className='app__testimonial-content'>
//                             <p className='p-text'>{test.feedback}</p>
//                             <div>
//                                 <h4 className='bold-text'>{test.name}</h4>
//                                 <h5 className='bold-text'>{test.company}</h5>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='app__testimonial-btns app__flex'>
//                         <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1)}>
//                             <HiChevronLeft />
//                         </div>
//                         <div className='app__flex' onClick={() => handleClick(currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1)}>
//                             <HiChevronRight />
//                         </div>
//                     </div>
//                 </>
//             )}

//             <div className='app__testimonials-brands app__flex'>
//                 {brands.map((brand) => (
//                     <motion.div
//                         whileInView={{ opacity: [0, 1] }}
//                         transition={{ duration: 0.5, type: 'tween' }}
//                         key={brand._id}
//                     >
//                         <img src={urlFor(brand.imgUrl)} alt={brand.name} />
//                     </motion.div>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default AppWrap(
//     MotionWrap(Testimonial, 'app__testimonial'),
//     'testimonial',
//     'app__primarybg'
// )
