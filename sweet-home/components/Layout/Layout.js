import Header from '../Header/Header'
import Footer from '../Footer/Footer'


export default class Layout extends Component{

    constructor(props){
        super(props);
        this.props = props;
    }
    
    render({ children }){
        
        return(
            <div>
                <Header />
                <main>
                    { children }
                </main>
                <Footer />
            </div>
        );
    }

}