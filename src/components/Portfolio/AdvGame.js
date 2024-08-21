import './AdvGame.css';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { createPost, continueStory, getPosts } from '../api';

function AdvGame() {
    const [conversationHistory, setConversationHistory] = useState([]); // State variable for conversation history
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        name: '',
        background: '',
        setting: '',
        plot: '',
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [storyContent, setStoryContent] = useState(''); // State variable for the most recent story content
    const [loading, setLoading] = useState(false); // State variable for loading indicator
    const [userInput, setUserInput] = useState(''); // State for handling user input in conversation
    const [sessionId, setSessionId] = useState(null); // State to track the current session ID

    useEffect(() => {
        getPosts()
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(posts)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    };

    const handleUserInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        console.log('Creating a new story with data:', newPost);

        setLoading(true); // Set loading to true when the request is sent

        try {
            const response = await createPost({
                name: newPost.name,
                background: newPost.background,
                setting: newPost.setting,
                plot: newPost.plot,
                user_input: userInput
            });

            console.log('Response from Django:', response);

            if (response.status === 201) {
                // Successful creation
                setResponseMessage(response.data.message);
                setStoryContent(response.data.content); // Set the initial story content
                setConversationHistory([{
                    role: 'user',
                    content: userInput
                }, {
                    role: 'assistant',
                    content: response.data.content
                }]); // Initialize the conversation history with the first exchange
                setSessionId(response.data.post.id); // Save the session ID for continuing the story
                setPosts((prevPosts) => [...prevPosts, response.data.post]);
                setNewPost({ name: '', background: '', setting: '', plot: '' });
                setUserInput(''); // Clear the user input after sending
            } else {
                // Handle unexpected status codes
                console.error('Unexpected response:', response);
                setResponseMessage('Unexpected response. Please try again.');
            }
        } catch (error) {
            console.error('Error sending data:', error);
            setResponseMessage('Failed to create post. Please try again.');
        } finally {
            setLoading(false); // Set loading to false when the request is complete
        }
    };

    const handleNext = async (e) => {
        e.preventDefault();

        console.log('Continuing the story with input:', userInput);

        if (!sessionId) {
            console.error('No session found. Please create a new story first.');
            setResponseMessage('No session found. Please create a new story first.');
            return;
        }

        setLoading(true); // Set loading to true when the request is sent

        try {
            const response = await continueStory({
                session_id: sessionId, // Pass the session ID to continue the story
                user_input: userInput,
                conversation_history: [...conversationHistory, { role: 'user', content: userInput }] // Append the new user input to the conversation history
            });

            console.log('Response from Django:', response);

            if (response.status === 201) {
                // Successful continuation
                setResponseMessage(response.data.message);
                setStoryContent(response.data.content); // Replace storyContent with the new content
                setConversationHistory([...conversationHistory, { role: 'user', content: userInput }, { role: 'assistant', content: response.data.content }]); // Update conversation history with the new input and AI response
                setUserInput(''); // Clear the user input after sending
            } else {
                // Handle unexpected status codes
                console.error('Unexpected response:', response);
                setResponseMessage('Unexpected response. Please try again.');
            }
        } catch (error) {
            console.error('Error sending data:', error);
            setResponseMessage('Failed to send input. Please try again.');
        } finally {
            setLoading(false); // Set loading to false when the request is complete
        }
    };

    return (
        <div className="adv-game__container">
            <h4 className="adv-game__heading">AI Powered Adventure Game</h4>
            <p className="adv-game__description">
                Welcome! This is an AI-powered RPG style adventure game that writes itself as you play! Create your character and setting to get started!
            </p>
            <div className="adv-game__body-section">
            <form>
                <div className="adv-game__input-section">
                    <div className="adv-game__input-container">
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            required
                            name="name"
                            value={newPost.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="adv-game__input-container">
                        <TextField
                            id="background"
                            label="Character Background"
                            variant="outlined"
                            required
                            name="background"
                            value={newPost.background}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="adv-game__input-container">
                        <TextField
                            id="setting"
                            label="Setting"
                            variant="outlined"
                            required
                            name="setting"
                            value={newPost.setting}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="adv-game__input-container">
                        <TextField
                            id="plot"
                            label="Plot"
                            variant="outlined"
                            name="plot"
                            value={newPost.plot}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="adv-game__submit" onClick={handleCreate} disabled={loading}>
                        {loading ? 'Creating...' : 'Create'}
                    </button>
                </div>

                {storyContent && (
                    <div>
                        <form>
                        <TextField
                            label="Next Action"
                            variant="outlined"
                            color="warning"
                            focused
                            required
                            value={userInput}
                            onChange={handleUserInputChange} // Update the user input state
                            disabled={loading}
                            style={{margin:'10px'}}
                        />
                        <button className="adv-game__next-action-button" onClick={handleNext} disabled={loading}>
                            {loading ? 'Processing...' : 'Next'}
                        </button>
                        </form>
                    </div>
                )}</form>
            </div>
            
            <div className="adv-game__story-content" style={{fontSize:'24px'}}>
                {loading ? <span className="loading-indicator">Loading...</span> : storyContent}
            </div> {/* Display loading indicator or story content */}
            {responseMessage && <div className="adv-game__response-message">{responseMessage}</div>}
        </div>
    );
}

export default AdvGame;
