import './Button.css';

function Button({text}) {

    // const [text, setText] = useState('Сохранить');
    //
    // const clicked = () => {
    //     setText('Закрыть');
    //     console.log('clicked');
    // };

    return (
        <button className='button accept'>{text}</button>
    );
}

export default Button;