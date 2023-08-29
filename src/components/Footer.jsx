const Footer = () =>{
    return(
        <div>
            <div className='flex list-none px-4 py-2 bg-gray-800  text-white placeholder-white-500  rounded-b border-t border-grey-800 justify-between items-center text-[11px]'>
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