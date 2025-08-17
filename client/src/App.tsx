import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react/jsx-runtime';

import { AuthProvider } from '~/Context';
import routes from '~/routes';
import { MainLayout } from '~/layouts';
import type { JSX } from 'react';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Routes>
                        {routes.map((route, index) => {
                            const Page: ({ title }: { title: string }) => JSX.Element = route.component;
                            let Layout = MainLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            let isGuard = false;
                            let RouteGuard = Layout;

                            if (route.guest) {
                                isGuard = true;
                                RouteGuard = route.guest;
                            } else if (route.protected) {
                                isGuard = true;
                                RouteGuard = route.protected;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        isGuard ? (
                                            <RouteGuard>
                                                <Layout>
                                                    <Page title={route.title} />
                                                </Layout>
                                            </RouteGuard>
                                        ) : (
                                            <Layout>
                                                <Page title={route.title} />
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
