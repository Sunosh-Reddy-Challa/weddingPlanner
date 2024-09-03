// {import React, { useState } from 'react';

// function WriteEarning() {
//   const [showAlert, setShowAlert] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const setDefault = () => {
//     setShowAlert(false);
//   };

//   const [earningData, setEarningData] = useState({
//     amount: '',
//     paymentmode: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEarningData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const authToken = localStorage.getItem('token');
//       const response = await fetch('http://localhost:4000/api/auth/writeEarning', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'authtoken': authToken,
//         },
//         body: JSON.stringify(earningData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const json = await response.json();

//       if (json.success) {
//         setShowAlert(true);
//       } else {
//         console.log(json);
//         alert(`Error: ${json.message ? json.message : 'Unknown error'}`);
//       }
//     } catch (error) {
//       console.error('Error writing earning:', error);
//       alert(`Error: ${error.message}`);
//     } finally {
//       setLoading(false);
//       setEarningData({
//         amount: '',
//         paymentmode: '',
//       });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div>
//         {showAlert && (
//           <div className="alert alert-success alert-dismissible fade show" role="alert">
//             <h3>
//               <strong>Success:</strong> Earning Details Submitted
//             </h3>
//             <button type="button" onClick={setDefault} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//           </div>
//         )}
//       </div>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <h1 className="text-center mb-4">Write Earning</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="amount" className="form-label">
//                 Amount
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="amount"
//                 name="amount"
//                 value={earningData.amount}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="paymentmode" className="form-label">
//                 Payment Mode
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="paymentmode"
//                 name="paymentmode"
//                 value={earningData.paymentmode}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="d-flex justify-content-center">
//               <button type="submit" className="btn" disabled={loading}>
//                 {loading ? 'Loading...' : 'Submit'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WriteEarning;
import React, { useState } from 'react';

function WriteEarning() {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const setDefault = () => {
    setShowAlert(false);
  };

  const [earningData, setEarningData] = useState({
    amount: '',
    paymentmode: '',
    date: '', // Add date to state
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEarningData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const authToken = localStorage.getItem('token');
      const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/writeEarning', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken,
        },
        body: JSON.stringify(earningData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      if (json.success) {
        setShowAlert(true);
      } else {
        console.log(json);
        alert(`Error: ${json.message ? json.message : 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error writing earning:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
      setEarningData({
        amount: '',
        paymentmode: '',
        date: '', // Reset date
      });
    }
  };

  return (
    <div className="container mt-5">
      <div>
        {showAlert && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h3>
              <strong>Success:</strong> Earning Details Submitted
            </h3>
            <button type="button" onClick={setDefault} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )}
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Write Earning</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="amount"
                name="amount"
                value={earningData.amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="paymentmode" className="form-label">
                Payment Mode
              </label>
              <input
                type="text"
                className="form-control"
                id="paymentmode"
                name="paymentmode"
                value={earningData.paymentmode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={earningData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WriteEarning;
