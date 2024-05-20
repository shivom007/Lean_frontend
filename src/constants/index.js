import Report from "../components/svgcomponents.jsx/Report";
import Feedback from "../components/svgcomponents.jsx/Feedback";
import Suggestion from "../components/svgcomponents.jsx/Suggestion";
import Contact from "../components/svgcomponents.jsx/Contact";



const Icons = [
    {   id: 1,
        name: 'Report an issue',
        Component : Report,
    },
    {   id: 2,
        name: 'Share Feedback',
        Component : Feedback,
    },
    {   id: 3,
        name: 'Give Suggestion',
        Component: Suggestion,
        
    },
    {   id: 4,
        name: 'Contact Us',
        Component: Contact,
        
    },
];

export default Icons;