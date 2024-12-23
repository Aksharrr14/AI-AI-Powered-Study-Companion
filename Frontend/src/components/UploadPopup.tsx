import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #666',
  boxShadow: 5,
  pt: 2,
  px: 4,
  pb: 3,
};

function FileUpload() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event:any) => {
    setSelectedFile(event.target.files[0]);
    console.log("File Selected:", event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log("Uploading File:", selectedFile);
      // Add upload logic here, e.g., send the file to the server using fetch or Axios
    } else {
      alert("No file selected");
    }
  };

  return (
    <Box>
      <input 
        type="file"
        onChange={handleFileChange}
        style={{ display: 'block', marginBottom: '10px', marginTop: '50px'}}
      />
      <div className='flex justify-center'>
      <Button 
        variant="contained"
        onClick={handleFileUpload}
        disabled={!selectedFile}
        style={{
          marginTop: 25,
        }}
      >
        Upload File
      </Button>
      </div>
    </Box>
  );
}

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{ color: 'white' }} onClick={handleOpen}>
        Add Study Material
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
        <h1 id="parent-modal-description" className="text-lg mb-2 text-indigo-600 font-roboto text-center">
          Choose a file to upload from your device
        </h1>
          <FileUpload />
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
