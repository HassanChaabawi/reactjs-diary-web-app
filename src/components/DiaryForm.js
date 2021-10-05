import React, { useState } from 'react'

export default function DiaryForm({ addItem }) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            date: date,
            text: text
        }
        addItem(itemObject)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="diary-form">
                    <input onChange={(event) => setTitle(event.target.value)} placeholder="Add an Item" className="diary-input"/>
                    <input onChange={(event) => setDate(event.target.value)} type="date" className="diary-date-input"/>
                </div>
                <textarea onChange={(event) => setText(event.target.value)} rows="2" className="diary-textarea"/>
                <button type="submit" className="diary-button">Add Item To Diary</button>
            </form>
        </div>
    )
}
