import React from 'react';

export default function NoteItem(props) {
    const {note} = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eaque rerum possimus voluptas incidunt molestias eius est ab reprehenderit unde, odit voluptates pariatur commodi dolor, doloremque vitae sapiente, animi dolores! Eum officiis nulla veniam.</p>
                </div>
            </div>
        </div>
    )
}
