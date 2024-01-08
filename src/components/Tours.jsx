
import { tours } from '../data/pageLinks';
import Title from './Title';

const Tours = ({ openModal, setTourIndex }) => {
  const toggleIndex = i => {
  
    setTourIndex(i)
  }
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const {
            id,
            image,
            date,
            title,
            desc,
            country,
            timeOfRest,
            price,
            icon,
          } = tour;
          
          return (
            <article key={id} className='tour-card' onClick={() => {
              toggleIndex(id)
              openModal()
            }}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{desc}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{timeOfRest} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours