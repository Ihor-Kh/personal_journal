import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton.jsx';

function JournalAddButton({ ...props }) {
    return (
        <CardButton { ...props } className='journal-add'>
            <img src="/plus.svg" alt="+"/>
            Новое воспоминание
        </CardButton>
    );
}

export default JournalAddButton;