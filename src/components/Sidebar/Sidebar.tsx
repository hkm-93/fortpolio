import { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSectionChange, onThemeChange }: { onSectionChange: (section: string) => void, onThemeChange: (theme: string) => void }) => {
    const [active, setActive] = useState('loweffort');
    
    const handleClick = (section: string) => {
        setActive(section);
        onSectionChange(section);
        switch (section) {
            case 'worklife':
                onThemeChange('theme-worklife');
                break;
            case 'loweffort':
                onThemeChange('theme-loweffort');
                break;
            case 'gigachad':
                onThemeChange('theme-gigachad');
                break;
            default:
                onThemeChange('theme-loweffort');
        }
    };
    
    return (
        <div className="sidebar">
            <a
                className={`navigation worklife ${active === 'worklife' ? 'active' : ''}`}
                href="#worklife"
                onClick={() => handleClick('worklife')}
                data-text="Perfect"
            >
            </a>
            <a
                className={`navigation loweffort ${active === 'loweffort' ? 'active' : ''}`}
                href="#loweffort"
                onClick={() => handleClick('loweffort')}
                data-text="Delayed"
            >
            </a>
            <a
                className={`navigation gigachad ${active === 'gigachad' ? 'active' : ''}`}
                href="#gigachad"
                onClick={() => handleClick('gigachad')}
                data-text="Exercise"
            >
            </a>
        </div>
    );
}

export default Sidebar;