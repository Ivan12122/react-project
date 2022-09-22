import {Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom"
import './styles/index.scss';
import {classNames} from "shared/lib/classNemes/classNames";
import {useTheme} from "app/providers/ThemProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;