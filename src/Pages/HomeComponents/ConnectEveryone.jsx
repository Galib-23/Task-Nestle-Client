import connect from '../../assets/connect.png';
const ConnectEveryone = () => {
    return (
        <div className="mt-36">
            <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">CONNECT EVERYONE IN ONE PLACE</h2>
            <p className='text-center'>
            Connecting all company employees through a unified media platform can significantly enhance communication, <br /> collaboration, and overall productivity within an organization. By leveraging a centralized <br /> medium, businesses can break down communication barriers, foster a sense of community, <br /> and streamline information flow across all departments and hierarchies.
            </p>
            <p></p>
            <div className='flex flex-col items-center mt-20'>
                <img className='w-[750px]' src={connect} alt="" />
            </div>
        </div>
    );
};

export default ConnectEveryone;