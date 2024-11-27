function Content() {
    const title = 'Product 1';
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, architecto!';

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button>Buy</button>
        </div>
    );
}

export default Content