import useAuth from "../../../hooks/useAuth";

const Profile = () => {

const {user} = useAuth();
console.log(user)

    return (
        <div className="md:ml-20 lg:ml-60">
            <div className="max-w-md p-8 sm:flex sm:space-x-2 ">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={user?.photoURL || 'https://i.ibb.co/s21kx6n/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg'} alt="" className="object-cover object-center w-20 h-20 rounded-full dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{user?.displayName}</h2>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="dark:text-gray-600 text-lg">{user?.email}</span>
			</span>
		</div>
	</div>
</div>
        </div>
    );
};

export default Profile;