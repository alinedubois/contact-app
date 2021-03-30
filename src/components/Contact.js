import logo from "../logo.svg";
import './Contact.css';

const status = true;
const statusText = true;

const Contact = (props) => (

        <div className="Contact">

                <div className= "avatar">
                    {props.img}
                </div>

                <div className="status">

                    {props.status ? "online" : "offline"}

                    <div className= "name">
                        <h3>{props.name}</h3>
                    </div>

                    <div className="status-online">
                        {props.status ? "online" : "offline"}
                    </div>

                    <p className="status-text">
                        {props.statusText ? "online" : "offline"}
                    </p>

                </div>

        </div>

);
export default Contact;

