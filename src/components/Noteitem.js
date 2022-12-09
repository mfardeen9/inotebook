import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam alias cupiditate, aperimpedit ipsum ad, harum consectetur laboriosam, voluptates ea et! Quis animi aliquid </p>
                   
                </div>
            </div>
        </div>

    )
}

export default Noteitem