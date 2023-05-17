import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Unitld.module.css';

const UnitId = () => {
  const { unitId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://math-course-p926y4f5x-baiel1922.vercel.app/course/unit/${unitId}`)
      .then(resp => resp.json())
      .then(resp => setData(resp));
  }, [unitId]);

  console.log(data);

  return (
    <div className={styles.unitId}>
      <div className={styles.title}>{data.title}</div>
      <ul>
        {data.topics?.map(item => (
          <li key={item.id}>
            <Link to={`/registr/${item.id}`} className={styles.link}>
              {item.title}
            </Link>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnitId;
