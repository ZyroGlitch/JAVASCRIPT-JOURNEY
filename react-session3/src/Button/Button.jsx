import style from './Button.module.css'

function Button() {
    const style = {
        width: "200px",
        height: "50px",
        background: "green",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Verdana, Geneva, Tahoma, sans - serif",
    }

    return (

        // External Styling
        // <button className="button">CLICK ME</button>

        // Module Styling
        // <button className={style.button}>CLICK ME</button>

        // Inline Styling
        <button style={style}>CLICK ME</button>
    );
}

export default Button