import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

function PopupEdit(props) {
const navigate = useNavigate();
  return (props.trigger) ? (
    <div className='popup fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-25 '>
        <div className='popupInner bg-gray-200 rounded-lg p-8 w-auto shadow-lg relative'>
            <button className="absolute top-2 right-2 bg-red-400 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none" 
            onClick={() => {
                props.setTrigger(false);
                if (props.success) {
                    navigate('/activos');
                }
            }}>
                <X size={15} />
            </button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default PopupEdit;
