import ImageKit from "@imagekit/react";

const uploadImageToImageKit = async (file) => {
    try {
        console.log('Environment variables check:');
        console.log('Public Key:', process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY);
        console.log('Private Key exists:', !!process.env.REACT_APP_IMAGEKIT_PRIVATE_KEY);
        console.log('URL Endpoint:', process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT);

        // Create FormData for direct upload
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', `profile_${Date.now()}.jpg`);
        formData.append('folder', '/profiles');
        formData.append('useUniqueFileName', 'true');
        
        // Make sure public key is properly set
        const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
        const privateKey = process.env.REACT_APP_IMAGEKIT_PRIVATE_KEY;
        
        if (!publicKey || !privateKey) {
            throw new Error('ImageKit credentials not found in environment variables');
        }
        
        formData.append('publicKey', publicKey);
        
        // Fix the authorization header - remove the colon at the end
        const authString = `${privateKey}:`;
        const base64Auth = btoa(authString);
        
        console.log('Auth string length:', authString.length);
        
        const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${base64Auth}`
            },
            body: formData
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('ImageKit error response:', errorText);
            throw new Error(`Upload failed with status ${response.status}: ${errorText}`);
        }
        
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