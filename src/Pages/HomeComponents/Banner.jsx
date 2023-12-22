import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <img className='w-2/3' src={bannerImg} />
                    <div className='flex flex-col items-center'>
                        <h1 className="text-5xl text-center font-bold">Task Management Made Easy !</h1>
                        <p className="py-6 text-center">Handle your tasks and the tasks of your employees from one platform. Accomplish the hardest tasks in the best possible way.</p>
                        <Link to='/login'>
                            <button className="btn text-2xl btn-outline text-blue-400">Let&apos;s Explore!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;