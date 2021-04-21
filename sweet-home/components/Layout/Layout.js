import theme from '../../styles/layout-theme'

export default function Layout ({children}){

        return(
            <>
                <div>
                    <main>
                        { children }
                    </main>
                    <style jsx>{theme}</style>
                </div>
            </>
        );

}