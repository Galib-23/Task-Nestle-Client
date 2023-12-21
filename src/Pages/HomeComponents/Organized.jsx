import people from '../../assets/people.png';
const Organized = () => {
    return (
        <div className='mt-24'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={people} className="w-1/2" />
                    <div>
                        <h1 className="text-5xl font-bold text-blue-400">Time To Get Organized!</h1>
                        <p className="py-6">Do all of your personal works and manage the employees and workers of your company or business in an organized way. And get the best outcome for your organization to shine and to remove all the extra hassles that you face. Get the best outcome for your organization to shine and to remove all the extra hassles that you face.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organized;