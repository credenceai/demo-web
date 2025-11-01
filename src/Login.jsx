import './Login.css'
import Icon from './Icon'; 
import { SubTitle, Button } from './Text';

export default function Login({handleClose, handleSubmit}) {
 
  return (
    <div className="col-flex-box login center">
        <Icon className='small-square' icon_name={"close"} onClick={handleClose}></Icon>
        <SubTitle text="Login" />
        <button>Continue with Google</button>

        {/* Change class → className */}
        <div className="g-signin2" data-onsuccess="onSignIn"></div>

        <SubTitle text="Or" />

        <form onSubmit={handleSubmit}>
            <Field
            class_name="input-group row-flex-box center"
            icon_name="lock"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Continue</button>
        </form>
    </div>
  );
}

function Field({ class_name, icon_name, type, id, name, placeholder, onChange }) {
  return (
    <div className={class_name}>
      <Icon icon_name={icon_name} />
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

