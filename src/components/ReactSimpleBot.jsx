import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import userImage from '../assets/user_default.png';
import SiteInfo from './SiteInfo';

function ReactSimpleBot() {

    const [pageHeight, setPageHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setPageHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const chatBotStyle = {
        backgroundColor: '#f0f0f0',
        borderRadius: '0px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const bubbleStyle = {
        backgroundColor: '#f0f0f0', // Change the background color of chat bubbles
        color: '#000000', // Change the text color of chat bubbles
        borderRadius: '0px', // Apply border radius to chat bubbles
    };
    return (
        <ChatBot
            steps={[
                {
                    id: '1',
                    message: 'What is your name?',
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'Hi {previousValue}, nice to meet you!',
                    trigger: "ask_conversion_topic"
                },
                {
                    id: 'ask_conversion_topic',
                    message: " select want you want to know.",
                    trigger: "conversion_topic"
                },
                {
                    id: 'ask_conversion_topic',
                    options: [
                        {
                            label: "Know about site",
                            value: "site_info",
                            trigger: "site_info"
                        },
                        {
                            label: "Get Project Ideas.",
                            value: "project_idea",
                            trigger: "project_idea"
                        }
                    ]
                },
                {
                    id: 'site_info',
                    component: (
                        <SiteInfo
                            value="site_info"
                        />
                    ),
                    trigger: "ask_conversion_topic",
                },
                {
                    id: 'project_idea',
                    message: "project _idea's are here.",
                    trigger: "ask_conversion_topic"
                }
            ]}
            style={chatBotStyle}
            width=""
            height={`${pageHeight}px`}
            botAvatar={userImage}
            userAvatar={userImage}
            userDelay={1000}
            bubbleStyle={bubbleStyle}
        />
    )
}

export default ReactSimpleBot