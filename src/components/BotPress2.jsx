import React, { useEffect } from 'react';
import './Bot.css';

const BotPress = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        script.async = true;

        const initializeBotpress = () => {
            if (window.botpressWebChat) {
                window.botpressWebChat.init({
                    composerPlaceholder: "Chat with project guide",
                    botConversationDescription: "This chatbot was built surprisingly fast with Botpress",
                    botId: "335d99f3-5701-4491-b60d-c4909cb019b5",
                    hostUrl: "https://cdn.botpress.cloud/webchat/v1",
                    messagingUrl: "https://messaging.botpress.cloud",
                    clientId: "335d99f3-5701-4491-b60d-c4909cb019b5",
                    webhookId: "3263a5ee-fa62-4b6b-adef-08c7b7451041",
                    lazySocket: true,
                    themeName: "dusk",
                    botName: "project guide",
                    frontendVersion: "v1",
                    useSessionStorage: true,
                    enableConversationDeletion: true,
                    themeColor: "#30a46c"
                });
            }
        };

        script.onload = initializeBotpress;
        document.body.appendChild(script);

        return () => {
            // Remove the script on cleanup to avoid re-adding it
            document.body.removeChild(script);
        };
    }, []);

    return <div id="webchat" />;
};

export default BotPress;
