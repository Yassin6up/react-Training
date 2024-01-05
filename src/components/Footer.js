

function Footer(props){


    return (
        <>
        <div className="footer">
        <hr></hr>
            <p>Created by: {props.name}</p>    
            <a href={"mailto:yassn@gmail.com"}>{props.email}</a><br/>
            <a target="_blank" rel="noopener noreferrer" href='#' >Github</a>
            {' | '}
            
            © 2021 Copyright: {props.title} .<br/>
            Powered by <a target="_blank" rel="noopener noreferrer" href='https://www.reactjs.org/'>
                ReactJS</a>.
                </div>
                </>
                );
}

export default Footer