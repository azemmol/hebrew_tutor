import React from 'react';
import AddVerb from '../components/VerbForm.jsx';
import ViewDictionary from '../components/ViewDictionary.jsx';

function AddToDict() {
    return (
        <div className="container fade-in">
            <h1 className='playground_header'>Dictionary Management</h1>
            
            <div className="playground_header_2">
                <p>Add new Hebrew verbs to your personal dictionary and view your collection.</p>
            </div>

            <div className="container-flex">
                <div className="card">
                    <AddVerb />
                </div>
                
                <div className="card">
                    <ViewDictionary />
                </div>
            </div>
        </div>
    )
}

export default AddToDict;