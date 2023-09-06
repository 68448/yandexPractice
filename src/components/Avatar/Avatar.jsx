import React from 'react';
import image1 from '../../images/photo1.jpg'
import image2 from '../../images/photo2.jpg'
import video from '../../videos/video.mp4'

const Avatar = () => {
    return (
        <>        
            <div className='flex gap-3 justify-center mt-11'>
                <div>
                    <img src={image1} className='max-h-96' alt='Я на перфой фотографии'/>
                </div>
                <div>
                    <img src={image2} className='max-h-96' alt='Я на 2 фотографии'/>
                </div>
            </div>
            <div className='mt-10 text-center'>
                <p className='text-xl'>Меня зовут Никита, мне 24 года, занимаюсь Frontend разработкой уже болеее 3 лет</p>
                <p className='text-xl'>
                    Начал свой путь в программировании с универа, учился в МИРЭА по направлению "Программная инженирия", а затем "Прикладная информатика"<br></br>
                    С того времени полюбил разработку за возможность создавать своими руками самые разные вещи.<br></br>
                    Ко фронту пришел на 3 курсе из-за желания начать зарабатывать на своем образовании.<br></br>
                    Начинал с разработки сайтов и в данный момент занимаюсь разработкой интрефейсов на React                   
                </p>
                <a href="https://github.com/68448/yandexPractice" target='_blank'>Ссылка на репозиторий</a>
            </div>
            <div className='mt-10'>
                <video width="750" height="500" controls className='mx-auto'>
                    <source src={video} type="video/mp4"/>
                </video>
                
            </div>
        </>
    );
};

export default Avatar;