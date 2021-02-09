import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // anotherway to make the slide depends on useeffect
  useEffect(() => {
    if (index >= people.length) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(people.length - 1);
    }
  }, [index]);

  //autoslide
  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      //deh 3shan lma 2dos 3l button w y7sl rerender w useeffet tsht8l mt3odsh t3ml setTimeOut gded kol shwia
      clearInterval(autoSlide);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          // a way to make the slide
          // if (index >= people.length) {
          //   setIndex(0);
          // } else if (index < 0) {
          //   setIndex(people.length - 1);
          // }
          // let position = 'nextSlide';
          // if (personIndex === index) {
          //   position = 'activeSlide';
          // }

          // anotherway depends on useeffect
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          //lw h3mlha bl transformation fel css
          // if (personIndex === index - 1 || index < 0) {
          //   position = 'lastSlide';
          // }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4 className={name}></h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
              <button
                className="prev"
                onClick={() => {
                  setIndex(index - 1);
                }}
              >
                <FiChevronLeft />
              </button>
              <button
                className="next"
                onClick={() => {
                  setIndex(index + 1);
                }}
              >
                <FiChevronRight />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;
