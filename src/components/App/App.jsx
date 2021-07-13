import React,{useState} from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App =() => {
     const [headerText,setHeaderText]  = useState('Name It!');
     const [headerExpanded,setHeaderExpanded] = useState(true);
     const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
            setHeaderExpanded(!inputText);
            setSuggestedNames(inputText ? name(inputText) : []);
        };

return (
    <div>
        <Header headerExpanded={headerExpanded} headTitle={headerText}/>
        <SearchBox onInputChage={handleInputChange} />
        <ResultsContainer suggestedNames={suggestedNames} />
    </div>
    );
}


export default App;
