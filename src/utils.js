import { toast } from 'react-toastify';

const ToastHandler = (type, message,timeToClose) => {
  if (type === 'error') {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  } else if (type === 'warn') {
    toast.warn(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  } else if (type === 'success') {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  } else if (type === 'info') {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    }
    else if (type=== 'nav'){
      toast.info(message, {
        position: "bottom-right",
        autoClose: timeToClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
 
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getCostPrice = (sellingPrice,discountPercentage) => {
  return Math.floor((sellingPrice * 100) / (100 - discountPercentage), 10);
}

const getFinPrice = (cart) => {
  return cart.reduce(
    ({ finSP, finCP,totalCubes }, { price, qty, discountPercentage: dp }) => ({
      finSP: finSP + price * qty,
      finCP: getCostPrice(price, dp) * qty + finCP,
      totalCubes: totalCubes + qty
    }),
    { finSP: 0, finCP: 0, totalCubes:0 }
  );
}

const getOrderDate = () => {
  const formatDate = (date) => {
    const options = {
      month: 'long',
      day: 'numeric',
      year: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
  }
  
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  return formattedDate
}

export {getRandomNumber,getCostPrice,getFinPrice,getOrderDate}
export default ToastHandler