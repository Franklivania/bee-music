import { useEffect, useState } from 'react';
import './SideNav.scss';
import data from '../../Data/SideNav.json';
import ToggleButton from '../ToggleButton/ToggleButton';
import logo from '../../assets/logo.png';

export default function SideNav() {
    const [selectedLink, setSelectedLink] = useState(() => {
        const storedLink = localStorage.getItem('sd-btn');
        return storedLink !== null ? parseInt(storedLink, 10) : 1; // Initialize with 1 for the first iteration
    });

    const handleLinkClick = (index: number) => {
        setSelectedLink(index);
    }

    useEffect(() => {
        localStorage.setItem('sd-btn', selectedLink.toString());
    }, [selectedLink]);

    const [expand, setExpand] = useState(false);

    function expandNav() {
        setExpand(!expand);
    }

    return (
        <div id="sidenav" className={`sidenav ${expand ? 'active' : ''}`}>
            <header>
                {!expand && <img src={logo} alt="bee-music" id='logo' />}
                <ToggleButton onClick={expandNav} className='expand'>
                    <i className={`fa-solid fa-${expand ? 'outdent' : 'indent'}`}></i>
                </ToggleButton>
            </header>

            <div id="sd-content" className={`sd-content ${expand ? 'active' : ''}`}>
                {data.map((section, sectionIndex) => (
                    <section key={sectionIndex} className={selectedLink === sectionIndex ? 'active' : ''}>
                        {!expand && <p>{section.title}</p>}
                        {section.content.map(item => (
                            <ToggleButton
                                {...item}
                                key={item.id}
                                icon={item.icon}
                                title={!expand ? item.title : undefined}
                                className={`sd-btn`}
                                onClick={() => handleLinkClick(item.id)}
                                isActive={selectedLink === item.id}
                            />
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
}
