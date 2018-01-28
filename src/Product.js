import React from 'react';

export default function Product(props) {
  const { name, link, desc } = props;
  const id = name.toLowerCase().replace(' ', '-');
  const imageId = `${id}-img`;
  const imagePath = `resources/images/${name.toLowerCase().replace(' ', '_')}.png`;
  return (
    <section id={id} className="product">
        <h1 className="center-text uppercase">{name}</h1>
        <a href={link}>
          <img id={imageId} src={imagePath} />
        </a>
        <p>{desc}</p>
    </section>
  );
}
