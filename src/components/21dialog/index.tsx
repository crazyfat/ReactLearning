import React, { useState } from 'react';

// @ts-ignore
const Dialog = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="dialog-overlay">
            <div className="dialog-content">
                <div className="dialog-header">
                    <h2>{title}</h2>
                    <button onClick={onClose}>关闭</button>
                </div>
                <div className="dialog-body">{content}</div>
            </div>
        </div>
    );
};

const App = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div>
            <button onClick={openDialog}>打开对话框</button>
            <Dialog
                isOpen={dialogOpen}
                onClose={closeDialog}
                title="示例对话框"
                content="这是一个示例对话框内容。"
            />
        </div>
    );
};

export default App;
