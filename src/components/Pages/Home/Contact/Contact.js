import React from 'react';
import './Contact.css'

import { FaAddressBook } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr'
import { FaUserCircle } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
const Contact = () => {
    return (
        <div>
            <div className='pb-10 bg-slate-200'>
                <h1 className='text-3xl text-orange-500 font-cursive mx-auto text-center font-bold'>Contact Us</h1><br />

                <div className='ml-12 flex justify-evenly'>


                    <div>
                        <h2 className='text-2xl font-bold text-orange-500'><FaAddressBook></FaAddressBook> Address</h2>
                        <span className='font-semibold '>Rajbari,Dhaka 12/1204,Niklo Town <br />
                            /new kochukhet,Bangladesh
                        </span>
                        <h2 className='text-2xl font-bold text-orange-500'><BsTelephoneFill></BsTelephoneFill> Phone No</h2>
                        <span className=' font-semibold'>
                            +880 1783780066 <br />
                            +880 1407941658
                        </span>
                    </div>
                    <div  data-aos="fade-up">
                        <h2 className='text-2xl font-bold text-orange-500'><GrMail></GrMail> Mail</h2>
                        <span className=' font-semibold'>
                            Your Mail.dhaka@gmail.com <br />
                            Houserent.rajbari@domain.com
                        </span>
                        <h2 className='text-2xl font-bold text-orange-500'><FaUserCircle></FaUserCircle> Social Account</h2>
                        <div className='text-3xl flex gap-4'>
                            <div className='social-link1'>
                                <a href="https://www.facebook.com/sabbir.sh66"><BsFacebook></BsFacebook></a>
                            </div>
                            <div className='social-link2'>
                                <a href="https://www.instagram.com/sabbir____00/"><ImLinkedin></ImLinkedin></a>
                            </div>
                            <div className='social-link3 text-4xl'>
                                <a href="https://twitter.com/sabbir_hossen66"><AiFillTwitterCircle></AiFillTwitterCircle></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;