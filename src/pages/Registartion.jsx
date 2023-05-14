import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Registration.module.css';
import Quiz from '../components/Quiz';

function Registration() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://math-course-p926y4f5x-baiel1922.vercel.app/course/topic/${id}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className={styles.registrationContainer}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.section}>
        <h3 className={styles.sectionHeading}>Examples</h3>
        <ul className={styles.list}>
          {data.examples?.map((item, i) => (
            <li className={styles.listItem} key={item.id}>
              {item.text}
              {item.example_photos?.map(photo=>{
                return(
                  <img src={photo.photo} key={photo.id} alt="" />
                )
              })}
            </li>
            
          ))}
        </ul>
      </div>
      <div>
            
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionHeading}>Quizzes</h3>
        <Quiz/>
        <ul className={styles.list}>
          {data.quizes?.map((item, i) => (
            <li className={styles.listItem} key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Registration;

