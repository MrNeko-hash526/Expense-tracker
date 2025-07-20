import { API_PATHS } from "./apiPaths";
import  axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
    try {
        const formData = new FormData();
        formData.append('image', imageFile);
        
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        return {
            imageUrl: response.data.imageUrl // Should be full URL or relative path
        };

    } catch (error) {
        console.error('Image upload failed:', error);
        throw error;
    }
};

export default uploadImage;