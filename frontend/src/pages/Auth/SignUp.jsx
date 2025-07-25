import React ,{useState , useContext} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import ProfilPhotoSelector from '../../components/Inputs/ProfilPhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/UserContext';
import uploadImageToImageKit from '../../utils/UploadUtility'; 

const SignUp = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState(null);    

    const { updateUser } = useContext(UserContext);

    const navigate = useNavigate();
    
    const handleSignUp = async (e) => {
        e.preventDefault();

        let profileImageUrl = "";

        if (!fullName) {
            setError('Please enter your full name');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!password) {
            setError('Please enter your password');
            return;
        }
        setError("");

        try {
            // upload profile picture to ImageKit if selected
            if (profilePic) {
                console.log('Uploading image to ImageKit...');
                const imgUploadRes = await uploadImageToImageKit(profilePic);
                
                profileImageUrl = imgUploadRes.imageUrl;
                
                console.log('ImageKit upload response:', imgUploadRes);
                console.log('Profile image URL:', profileImageUrl);
            }
            
            const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
                fullName,
                email,
                password,
                profileImageUrl
            });
            
            const { token, user } = response.data;

            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                updateUser(user);
                navigate('/dashboard', { replace: true });
            }
        } catch (err) {
            console.error('Signup error:', err);
            if (err.response && err.response.data.message) {
                setError(err.response.data.message || 'Sign up failed, please try again');
            } else {
                setError('An unexpected error occurred, please try again later');
            }
        }
    };


  return (
    <AuthLayout>
        <div className='lg:w-[100%] h-auto mid:h-full mt-0 md:mt-20 flex flex-col justify-center'>
            <h3 className='text-xl font-semibold text-black'>
                Create a New Account
            </h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Join us today and start managing your finances effectively!          
            </p>

            <form onSubmit={handleSignUp}>

                <ProfilPhotoSelector image={profilePic} setImage={setProfilePic} />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                        value={fullName}
                        onChange={({ target }) => setFullName(target.value)}
                        label="Full Name"
                        placeholder='Enter your full name'
                        type='text'
                    />

                    <Input
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email Address"
                        placeholder='Enter your email address'
                        type='email'
                    />
                <div className='col-span-2'>
                    <Input
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        label="Password"
                        placeholder='Enter your password'
                        type='password' 
                    />
                    
                </div>    
            </div>
                { error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <button
                type='submit'
                className="btn-primary">
                Sign Up
                </button>

                <p className='text-13px text-slate-800 mt-3'>
                    Already have an account? 
                    <Link className='font-medium text-primary underline' to = "/login">
                    Login
                    </Link> 
                </p>
                          
        </form>
       </div>
    </AuthLayout>

  )
}


export default SignUp