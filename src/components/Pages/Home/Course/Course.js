import React from 'react';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';

const Course = ({course}) => {
    const {_id,name,Class,students,details,image,ratings}=course;
    return (
        <div>
             <div>
            <div class="card bg-[#28334AFF] text-[#FBDE44FF] shadow-xl transition ease-in-out delay-150 hover:-translate-y-1">
            <figure><img className="mt-2" src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                 <div className="flex justify-between">
                    <div>
                       <p>{Class}</p>
                       
                    </div>
                    <div>
                      <p>Students: {students}</p>
                    </div>
                    
                 </div>
                 <div>
                            <Rating  initialRating={ratings} emptySymbol={<AiFillStar/>} fullSymbol={<AiFillStar style={{color:'goldenrod'}}/>}
                  readonly
                  >
              </Rating>
                  </div>
              
                <div class="tooltip tooltip-right w-16 text-justify" data-tip={`${details}`}>     
                  <p>A</p>
                </div>
                 <button class="btn btn-secondary">Add to Cart</button>
                 
            </div>
            </div>
        </div>
        </div>
    );
};

export default Course;