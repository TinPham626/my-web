import React from 'react'

export default function Frame({ image, alt, header, text }) {
    return (
    <section class="container">
      <img src={image} alt={alt} />
      <div class="text">
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
