import alltasks from '../../assets/alltasks.png';
const Window = () => {
    return (
        <div className='flex flex-col items-center mt-32'>
            <h2 className="text-4xl font-bold text-blue-400 mb-7">All features in one place !</h2>
            <div className="mockup-window border border-base-300 w-1/2">
                <div className="flex flex-col justify-center items-center p-8 border-t border-base-300">
                    <img className='w-96' src={alltasks} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Window;