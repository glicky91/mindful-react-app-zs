import { Container, Button } from "reactstrap";
import { useState, useEffect } from "react";
import "../App.css";

const suggestions = [
    "What made you smile today?",
    "What small victory are you celebrating today?",
    "What are you looking forward to tomorrow?",
    "What are you grateful for in this moment?",
    "What kindness did someone show you today?",
    "What did you learn today that you're grateful for?",
    "Who are three people you are grateful to have in your life?",
    "What is one thing you're grateful for about your home?",
    "What are three things you are grateful for today?",
    "Briefly describe 5 highlights of your day.",
    "Describe in detail your favorite meal you've had. What was the experience like?",
    "What is one thing that made you laugh today?",
    "Describe what you're grateful for about your pet.",
    "What hobbies are you grateful to have in your life?",
    "What is one thing you're grateful for about where you live.",
    "What's you're favorite outdoor activity that you're grateful for being able to do.",
    "What creative expression are you grateful for?",
    "What is one thing you're proud of yourself for today?",
    "Descirbe something that always brings a smile to your face.",
    "Describe something you appreciate about yourself.",
];

export default function ShowPrompts() {
    const [prompt, setPrompt] = useState("");

    useEffect(() => {
        handleShowPrompt();
    }, []);

    const handleShowPrompt = () => {
        const randomIndex = Math.floor(Math.random() * suggestions.length);
        setPrompt(suggestions[randomIndex]);
    };

    return (
        <Container>
            <div style={{ textAlign: "center" }}>
                <Button
                    variant="outline-primary"
                    onClick={handleShowPrompt}
                    style={{ backgroundColor: "blue" }}
                >
                    New Prompt
                </Button>
                {prompt && <p className="PromptText">{prompt}</p>}
            </div>
        </Container>
    );
}