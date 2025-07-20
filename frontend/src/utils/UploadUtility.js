import ImageKit from "@imagekit/react";

const uploadImageToImageKit = async (file) => {
    try {
        // Create FormData for direct upload
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', `profile_${Date.now()}.jpg`);
        formData.append('folder', '/profiles');
        formData.append('useUniqueFileName', 'true');
        formData.append('publicKey', process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY);
        
        const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(process.env.REACT_APP_IMAGEKIT_PRIVATE_KEY + ':')
            },
            body: formData
        });
        
        const result = await response.json();
        
        if (result.url) {
            console.log('ImageKit upload result:', result);
            return {
                imageUrl: result.url,
                fileId: result.fileId,
                thumbnailUrl: result.thumbnailUrl
            };
        } else {
            throw new Error(result.message || 'Upload failed');
        }
    } catch (error) {
        console.error('ImageKit upload failed:', error);
        throw error;
    }
};

export default uploadImageToImageKit;