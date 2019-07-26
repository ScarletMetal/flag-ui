import React, {useState} from "react"
import {Modal, Button, Icon} from "semantic-ui-react";
import {VideoProps} from "../videoProps";
import {YoutubePlayer} from "../youtube-player";


interface ModalProps extends VideoProps {
    open: boolean,
    setOpen: (open: boolean) => void;
}

export const VideoModal = (props: ModalProps) => {
    return <Modal open={props.open}>
        <Modal.Header>{props.title}</Modal.Header>

        <Modal.Content>
            <div>
                <YoutubePlayer {...props}/>
            </div>
        </Modal.Content>

        <Modal.Actions>
            <Button inverted color="red" onClick={() => {
                props.setOpen(false);
            }}><Icon name={"window close"}/>Close</Button>
        </Modal.Actions>

    </Modal>
};
