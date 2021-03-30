import './Contact.css';

const Contact = (props) => (

    <div className="Contact">
        <img
            alt="avatar"
            className="avatar"
            src={props.avatarUrl}
            width="48"
            height="48"
        />

        <div className="status">
            <h3 className="name">{props.name}</h3>
            <div className={props.statusText === "online" ? "status-online" : "status-offline"}></div>
            <p className="status-text">{props.statusText === "online" ? "online" : "offline"}</p>
        </div>
    </div>
)
;
export default Contact;

