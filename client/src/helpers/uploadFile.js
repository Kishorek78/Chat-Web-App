const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`;

// console.log("process.env.REACT_APP_CLOUDINARY_CLOUD_NAME", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "Chat-web-file");

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        // Check if the response is ok before parsing JSON
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}

export default uploadFile;
