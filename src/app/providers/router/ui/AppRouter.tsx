import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPageAsync} from "pages/MainPage/ui/MainPage.async";
import {AboutPageAsync} from "pages/AboutPage/ui/AboutPage.async";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                        />
                    )
                )}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;