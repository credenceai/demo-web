import './App.css';
import { Title, SubTitle, History} from './Text';
import Evidence from './Evidence';
import response from '/data/response.json';


function App() {
    return (
    <div>
        <div className='body row-flex-box'>
            <div className="body-left col-flex-box left-align">
                <SubTitle text="History" />
                <History id="1" claim="The WHO declared new 
                reports on new tests and treatments in development for bacterial infections" />
            </div>
            <div className= "body-center">
                <Title className = "homepage" text="CredenceAI" />
                <textarea id='claim'
                    placeholder="Type your news statement here..."
                />

                <button>Submit</button>
                <div >
                    <Evidence response={response} />

                </div>
                
            </div>
        </div>
        
        
    </div>
    );

}

export default App;
