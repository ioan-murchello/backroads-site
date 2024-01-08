import { useState } from 'react';
import { tours } from '../data/pageLinks';

const Modal = ({ closeModal, id }) => {
  const temp = [...tours].filter((elem) => elem.id === id);
  const { image, title, desc, country, price, date, timeOfRest } = temp[0];

  const [avatarImg,setAvatarImg] = useState(image)

  const handleCloseModal = (e) => {
     const target = e.target;
    if (
      target.classList.contains('modalLayout') ||
      target.nodeName === 'BUTTON'
    ) {
      closeModal();
    }

    if(target.classList.contains('avatar')){
        let ava = target.getAttribute('src')
        setAvatarImg(ava)
    }

  };
  return (
    <div className='modalLayout' onClick={handleCloseModal}>
      <div className='modal'>
        <div className='modal-info'>
          <h3>{title}</h3>
          <p className='desc'>{desc}</p>
          <div>{country}</div>
          <div>${price}</div>
          <h3>{date}</h3>
          <h3>{timeOfRest} Days</h3>
        </div>
        <div className='modal-images__wrapper'>
          <img src={avatarImg} alt={title} />
          <div className='modal-images'>
            <div>
              <img
                className='avatar'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCLOmfLsVZO9U5_hTf0hXnan96nlu-vtaew&usqp=CAU'
                alt='Tibet'
              />
            </div>
            <div>
              <img
                className='avatar'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtKYMAElnK7n62VOM3J6v7oZNIRzq2B4emw&usqp=CAU'
                alt=''
              />
            </div>
            <div>
              <img
                className='avatar'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0f3K8Hfo19dV53FRDeORJL5Q_z0xGaaGBiw&usqp=CAU'
                alt=''
              />
            </div>
            <div>
              <img
                className='avatar'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06p53RrmcKCtaToKfAxrjsiofLGH341tl3Q&usqp=CAU'
                alt=''
              />
            </div>
          </div>
        </div>

        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
