import './BodyLayout.css';

function BodyLayout({ children }) {
    return (
        <div className='body'>
            { children }
        </div>
    );
}

export default BodyLayout;