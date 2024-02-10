import { useNavigation } from "react-router-dom";

const Loader = () => {
    const navigation = useNavigation();
    return (
        <div className="text-center">
            {
                navigation.state === 'loading' && <span className="loading loading-spinner loading-lg"></span>
            }
        </div>
    );
};

export default Loader;