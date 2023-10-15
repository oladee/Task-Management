const Footer = ({lightMode}) =>{

    const normal = 'flex px-4 py-2 placeholder-white-500  rounded-b justify-between items-center text-[11px]'

    return(
        <div>
            <div className={lightMode ? `bg-white text-black ${normal} ` : `${normal} bg-gray-800 text-white`} >
                <p >0 item left</p>
                <div className='flex'>
                    <p>All</p>
                    <p className='mx-2'>Active</p>
                    <p>Completed</p>
                </div>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default Footer