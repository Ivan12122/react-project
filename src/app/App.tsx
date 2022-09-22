import {Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom"
import './styles/index.scss';
import {classNames} from "shared/lib/classNemes/classNames";
import {useTheme} from "app/providers/ThemProvider";
import {MainPageAsync} from "pages/MainPage/ui/MainPage.async";
import {AboutPageAsync} from "pages/AboutPage/ui/AboutPage.async";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;