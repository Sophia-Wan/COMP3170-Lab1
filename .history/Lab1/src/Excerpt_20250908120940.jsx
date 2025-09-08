function Excerpt(props) {
    return (
        <div class='exerpt'>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button>Click me!</button>
        </div>
    );
}
