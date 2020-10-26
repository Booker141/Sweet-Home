import theme from '../../styles/layout-theme'

export default class Layout extends React.Component{

    constructor(props){
        super(props);
        this.props = props;
    }
    
    render(){
        const { children } = this.props;
        return(
            <div>
                <main>
                    { children }
                </main>
                <style jsx>{theme}</style>
            </div>
        );
    }

}