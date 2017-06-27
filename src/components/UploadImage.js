// import React from 'react'
// import * as firebase from 'react-file-input'
// import {Button, ButtonToolbar, Glyphicon, Image, Modal} from "react-bootstrap";
// import FileInput from 'react-file-input'
//
//
// class UploadImage extends React.Component {
//     state = {                       //?? co to to jest?
//         showModal: false
//     };
//
//     constructor() {
//         super();
//         this.storageRef = firebase.storage().ref();
//     }
//
//     componentWillMount() {
//
//     }
//
//     handleFileChange = (event) => {
//
//         // File or Blob named mountains.jpg
//         let file = event.target.files[0];
//
//         // Create the file metadata
//         let metadata = {};
//
//         // Upload file and metadata to the object 'images/mountains.jpg'
//         let uploadTask = this.storageRef.child('images/' + file.name).put(file, metadata);
//
//         // Listen for state changes, errors, and completion of the upload.
//         uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//             function (snapshot) {
//                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//                 let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 alert('Loading: ' + progress + '% done, please wait');
//                 alert('Zdjęcie załadowano. Odśwież stronę internetową');
//                 // switch (snapshot.state) {
//                 //   case firebase.storage.TaskState.PAUSED: // or 'paused'
//                 //     console.log('Upload is paused');
//                 //     break;
//                 //   case firebase.storage.TaskState.RUNNING: // or 'running'
//                 //     console.log('Upload is running');
//                 //     break;
//                 // }
//             }, function (error) {
//                 alert('error, Sorry, try again');
//             // A full list of error codes is available at
//                 // https://firebase.google.com/docs/storage/web/handle-errors
//                 // switch (error.code) {
//                 //   case 'storage/unauthorized':
//                 //     // User doesn't have permission to access the object
//                 //     break;
//                 //   case 'storage/canceled':
//                 //     // User canceled the upload
//                 //     break;
//                 //   case 'storage/unknown':
//                 //     // Unknown error occurred, inspect error.serverResponse
//                 //     break;
//                 // }
//             }, function () {
//                 // Upload completed successfully, now we can get the download URL
//                 let downloadURL = uploadTask.snapshot.downloadURL;
//
//                 let user = firebase.auth().currentUser;
//
//                 user.updateProfile({
//                     photoURL: downloadURL
//                 }).then(function () {
//                 }, function (error) {
//                     // An error happened.
//                 });
//
//             });
//     };
//
//     close = () => this.setState({showModal: false});
//
//     open = () => this.setState({showModal: true});
//
//     render = () => {
//
//         return (
//             <div>
//
//                 <Image className="center-block brand-image"/>
//                 <br />
//                 <Button
//                     bsStyle="info"
//                     bsSize="medium"
//                     onClick={this.open}
//                 >
//                     Zmień zdjęcie profilowe
//                 </Button>
//
//                 <Modal show={this.state.showModal} onHide={this.close}>
//                     <Modal.Header closeButton>
//                         <Modal.Title >Edytuj zdjęcie profilowe niech stanie się magia !</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//
//
//                         <ButtonToolbar>
//                             <Button className="well" bsStyle="primary" bsSize="large" block><Glyphicon glyph="edit"/>Edytuj zdjęcie
//                                 <FileInput name="myImage"
//                                            accept=".jpeg,.jpg,.png,.gif"
//                                            placeholder="My Image"
//                                            className="inputClass"
//                                            onChange={this.handleFileChange}/>
//                             </Button>
//
//
//                         </ButtonToolbar>
//
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button onClick={this.close} bsStyle="info">Zamknij</Button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>
//         );
//     }
//
//
//
//
// }
// export default UploadImage;