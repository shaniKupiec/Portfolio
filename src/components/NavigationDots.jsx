import React from "react";

const navbarNames = [
    "home",
    "about",
    "work",
    "skills",
    "contact",
];
export default function NavigationDots({ active }) {
    return (
        <div className="app__navigation">
            {navbarNames.map((item, index) => {
                return (
                    <a
                        href={`#${item}`}
                        key={item + index}
                        className={`app__navigation-dot ${active === item ? 'active' : '' }`}
                    />
                );
            })}
        </div>
    );
}
