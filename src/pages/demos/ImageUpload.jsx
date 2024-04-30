import { useCallback, useState } from "react";
import Typography from "@mui/material/Typography";
import MainCard from "../../components/MainCard";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../../api/image";
import {
  errorNotification,
  successNotification,
} from "../../services/notification";

const ImageUpload = () => {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileName = file.name;

    setFileName(fileName);

    if (!file.type.startsWith("image/")) {
      errorNotification(`The file ${fileName} is not an image.`);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    uploadFile(formData)
      .then((response) => {
        console.log(response);
        successNotification(`File ${fileName} uploaded successfully.`);
      })
      .catch((error) => {
        console.log(error);
        errorNotification(`Failed to upload the ${fileName} file.`);
      });
  }, []);

  const MyDropzone = () => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    return (
      <div
        {...getRootProps()}
        style={{
          width: "100%",
          textAlign: "center",
          border: "1px dashed #ccc",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the picture here ...</p>
        ) : (
          <p>Drag and drop picture here, or click to select picture</p>
        )}
      </div>
    );
  };

  return (
    <MainCard title="Image Upload" codeHighlight>
      <Typography variant="body2" gutterBottom>
        <MyDropzone />
      </Typography>
    </MainCard>
  );
};

export default ImageUpload;
