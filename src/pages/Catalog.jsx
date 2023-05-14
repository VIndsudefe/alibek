import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';
import { useParams } from 'react-router-dom';

function Catalog(props) {
  const [units, setUnits] = useState([]);
  const  {courseId}  = useParams();
  useEffect(() => {
    fetch(`https://math-course-p926y4f5x-baiel1922.vercel.app/course/course/${courseId}`)
      .then(response => response.json())
      .then(data => setUnits(data.units))
      .catch(error => console.error(error));
  }, []);
  const unitList = units.map(unit => (
    <div
      className={styles.card}
      style={{ background: `${unit.cover}`, backgroundSize: 'cover', backgroundColor: 'red' }}
      key={unit.id}
    >
      <Link className={styles.link} to={`/unit/${unit.id}`}>
        <div>
          <h2 className={styles.h2}>{unit.title}</h2>
          <p>{unit.text}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className={styles.container2}>
      <div className={styles.leftPart}>
        <div className={styles.tex1}>
          Математика
          <p className={styles.description}>класс {props.location?.state?.title}</p>
        </div>
        <div className={styles.tex1}>
          Об курсе
          <p className={styles.description}>очень интересно</p>
        </div>
      </div>
      <div className={styles.rightPart}>{unitList}</div>
    </div>
  );
}

export default Catalog;
