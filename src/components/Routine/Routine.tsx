import './Routine.css';
import '../theme.css';
import { milestonesWorkLife, milestonesLowEffort, milestonesGigaChad } from '../../data/milestones.ts';
import { useEffect, useRef } from 'react';
import Sidebar from "../Sidebar/Sidebar.tsx";

const Routine = (
    { selectedSection, setSelectedSection, theme, setTheme }:
        { selectedSection: string, setSelectedSection: (section: string) => void, theme: string, setTheme: (theme: string) => void}) => {
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('appear');
                    } else {
                        entry.target.classList.remove('appear');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        textRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        
        return () => {
            textRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);
    
    const getMilestones = () => {
        switch (selectedSection) {
            case 'worklife':
                return milestonesWorkLife; // Replace with actual data for 'worklife'
            case 'loweffort':
                return milestonesLowEffort; // Replace with actual data for 'loweffort'
            case 'gigachad':
                return milestonesGigaChad; // Replace with actual data for 'gigachad'
            default:
                return [];
        }
    };
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="routine-container">
            <Sidebar onSectionChange={setSelectedSection} onThemeChange={setTheme}/>
            <div className="container">
                <div className="vertical glow" style={{ height: '1750px' }}></div>
                {getMilestones().map((milestone, index) => (
                    <div key={index} className={`milestone-container ${milestone.time ? '' : 'milestone-container-adjustment'}`} style={{ top: milestone.top }}>
                        <div className="time-label">{milestone.time}</div>
                        <div className={`${milestone.time ? 'milestone glow' : ''}`}></div>
                        <div
                            className={`text-label ${milestone.time ? '' : 'text-label-small'}`}
                            ref={(el) => (textRefs.current[index] = el)}
                        >
                            {milestone.text.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Routine;