import React from 'react';
// import card from './cards.json'
const Cards = (props) => {
    const card = props.cards;
    // console.log(props)
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-screen mt-10 place-items-center max-w-[1250px] mx-auto'>
                {card.map((item) => {
                    return (
                        <div key={item.id} className="py-10  " >
                            <div className='w-72 h-fit  object-cover rounded-lg overflow-hidden select-none shadow-lg shadow-purple-500 '>
                                <img className='w-full h-44' src={item.image} alt={item.title} />
                                <div className='px-2 py-2 '>
                                    <div className='font-bold text-xl text-gray-800 mb-2'>{item.title}</div>
                                    <p className='text-gray-700 text-md'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cards;
