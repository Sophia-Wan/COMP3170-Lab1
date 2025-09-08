function App() {
    return (
        <div>
            <Excerpt
                title='gey'
                body='pp'
            />
            <Excerpt
                title='geypt2'
                body='yahoo'
            />
            <Excerpt
                title='wooo'
                body='hooo'
            />
        </div>
    );
}

function Excerpt(props) {
    return (
        <div class='exerpt'>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button>Click me!</button>
        </div>
    );
}

export default App;
