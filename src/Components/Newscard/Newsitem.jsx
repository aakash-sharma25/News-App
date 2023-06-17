import React from 'react'
import "../../App.css"

const Newsitem = ({article}) => {
  return (
    <div className=''>
        <div className='flex flex-wrap gap-x-20 gap-y-10 items-center justify-center '>
       { 
                article.map( (element) => 
                    <div className='flex flex-col p-3  card shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                       { 
                        element.urlToImage ? 
                        (<img src={element.urlToImage} alt='Image Not available' className='w-full image'/>)
                        :(<img src='https://us.123rf.com/450wm/koblizeek/koblizeek2211/koblizeek221100027/193599238-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg' alt='' className='w-full'/>)
                       }
                            

                            <h2 className='text-xl text-white mt-3 title'>{element.title}</h2>

                            <p className='mt-3 mb-3 text-white para'><span className='font-bold text-zinc-300 '>Source : </span> {element.source.name} at {element.publishedAt}</p>

                                <a href={element.url} className=' mt-2 p-1 text-center bg-violet-500 hover:bg-violet-600 hover:text-white transition duration-200 ease-out hover:ease-in'>Read more</a>
                           
                            
                    </div> 
                    )
        }
                    </div>
    </div>
  )
}

export default Newsitem