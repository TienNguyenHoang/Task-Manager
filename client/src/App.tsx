import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react/jsx-runtime';

import { AuthProvider } from '~/Context';
import routes, { Protected } from '~/routes';
import { MainLayout } from '~/layouts';

function App() {
    return (
        <Router>
            <AuthProvider>
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
            </AuthProvider>
            <ToastContainer
                position="top-right"
                autoClose={3000} // 3s tự đóng
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />
        </Router>
    );
}

export default App;
