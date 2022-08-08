import React from 'react';
import Image from 'next/image';
import { AiFillFacebook } from 'react-icons/ai';

import styles from '../styles/Join.module.css';

const ContactCard = ({ img, name, link }) => {
    return (
        <a href={link} className={styles.moderator} target='_blank'>
            <Image src={img} alt={name} layout='fill' objectFit='cover'/>
            <div className={styles.desc}>
                <h1>{name}</h1>
                <AiFillFacebook size={50} style={{ border: '3px solid var(--color-yellow)', borderRadius: '5px'} } />
            </div>
        </a>
    )
}

export default ContactCard;