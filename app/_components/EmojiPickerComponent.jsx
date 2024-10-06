"use client"
import React, {useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
function EmojiPickerComponent({children, setEmojiIcon}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <div onClick={()=>setOpen(!open)}>
            {children}
        </div>
        {open && <div className="absolute">
            <EmojiPicker
            emojiStyle='facebook'
             onEmojiClick={(e)=>{
                setEmojiIcon(e.emoji)
                setOpen(false)
            }}/>
        </div>}
    </div>
  )
}

export default EmojiPickerComponent
