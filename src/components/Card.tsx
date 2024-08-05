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
    const formattedDate = format(new Date(item.criadoEm), 'dd/MM/yyyy HH:mm');

    return (
        <div className='card-custom'>
            <img style={{ width: '100%', height: 'auto' }} src={item.imagens.resolucaoPadrao.url} alt={item.usuario.id} />
            <div className='card-custom-info'>
                <div style={{ textAlign: 'center' }}>
                    <div>@{item.usuario.username}</div>
                    <div><FontAwesomeIcon icon={faHeart} size="lg" style={{ margin: '15px 5px 0 0' }} />{item.upvotes}</div>
                    <div><FontAwesomeIcon icon={faComment} style={{ margin: '15px 5px 0 0' }} />{item.comentarios}</div>
                    <div><FontAwesomeIcon icon={faCalendarDays} style={{ margin: '15px 5px 0 0' }} />{formattedDate}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
