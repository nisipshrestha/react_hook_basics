import { useLocation, useParams } from "react-router-dom";

const Contact = () => {
    const location = useLocation();
    const param = useParams();
    console.log(location);
    /* Boolean() use to convert string, numeric value to boolean. */
    return <h1>Contact ... {param.id} {Boolean(param.id2) && param.id2}</h1>;
}
export default Contact;