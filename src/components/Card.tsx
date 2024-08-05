import React from 'react';
import '../App.css';
import { ApiResponse } from '../types';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

export interface Props {
    item: ApiResponse;
}

const Card: React.FC<Props> = ({ item }) => {
    // Checking if values ​​exist
    const formattedDate = item.criadoEm ? format(new Date(item.criadoEm), 'dd/MM/yyyy HH:mm') : 'N/A';
    const imageUrl = item.imagens?.resolucaoPadrao?.url;
    const username = item.usuario?.username ?? 'Unknown';
    const userId = item.usuario?.id ?? 'Unknown';
    const link = item.link ?? '#';
    const upvotes = item.upvotes ?? 0;
    const comentarios = item.comentarios ?? 0;

    return (
        <>
            {imageUrl &&
                <a href={link} target='_blank' rel='noopener noreferrer' className='card-custom'>
                    <img  src={imageUrl} alt={userId} />
                    <div className='card-custom-info'>
                        <div style={{ textAlign: 'center' }}>
                            <div>@{username}</div>
                            <div><FontAwesomeIcon icon={faHeart} size='lg' style={{ margin: '15px 5px 0 0' }} />{upvotes}</div>
                            <div><FontAwesomeIcon icon={faComment} size='lg' style={{ margin: '15px 5px 0 0' }} />{comentarios}</div>
                            <div><FontAwesomeIcon icon={faCalendarDays} size='lg' style={{ margin: '15px 5px 0 0' }} />{formattedDate}</div>
                        </div>
                    </div>
                </a>
            }
        </>
    );
};

export default Card;
