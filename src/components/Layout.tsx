import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <h1>Number Fetcher App</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2023 Number Fetcher App</p>
            </footer>
        </div>
    );
};

export default Layout;