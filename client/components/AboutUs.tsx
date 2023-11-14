import React from 'react'

const AboutUs = () => {
  return (
    <div className="about">
      <h4>About Us</h4>
      <div className="about-box1">
        <img src={`../../Public/about1.jpg`} alt="About us" />
        <p>
          We believe that a chair is not just a piece of furniture; <br />
          It&apos;s a statement of comfort, design, and quality. Our journey
          began with a simple idea - to create a space where everyone can find
          the perfect chair that suits their unique style and enhances their
          daily life.
        </p>
      </div>
      <div className="about-box2">
        <img src={`../../Public/about2.jpg`} alt="About us" />
        <div className='text-container'>
          <p>
            At the heart of our philosophy is a deep passion for comfort. We
            understand that your chair is more than just a place to sit;
            it&apos;s where you unwind after a long day, work on your projects,
            or enjoy quality time with your loved ones. That&apos;s why we
            curate a diverse collection of chairs, each handpicked for its
            exceptional comfort and ergonomic design.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
