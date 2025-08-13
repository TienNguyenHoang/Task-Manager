import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes, { Protected } from '~/routes';
import { MainLayout } from '~/layouts';
import { Fragment } from 'react/jsx-runtime';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        let Layout = MainLayout;
                        const ProtectedLayout = Protected;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    route.authenticate ? (
                                        <ProtectedLayout>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </ProtectedLayout>
                                    ) : (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    )
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
