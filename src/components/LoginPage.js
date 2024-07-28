import React from 'react';

const LoginPage = () => {
  return (
    <>
      <nav className="bg-gray-100 p-3 rounded-md w-full">
        <ol className="list-reset flex ml-20" style={{marginLeft:"240px"}}>
          <li className="mr-2">
            <a href="#" className="text-gray-600 hover:text-gray-700">Home</a>
          </li>
          <li className="mr-2">
            <span className="text-gray-500"></span>
          </li>
          <li className="mr-2">
            <a href="#" className="text-gray-600 hover:text-gray-700">Personal</a>
          </li>
          <li className="mr-2">
            <span className="text-gray-500"></span>
          </li>
          <li className="mr-2">
            <a href="#" className="text-gray-600 hover:text-gray-700">Arvest Online Banking</a>
          </li>
          <li className="mr-2">
            <span className="text-gray-500"></span>
          </li>
          <li className="text-black-500">Online Banking</li>
        </ol>
      </nav>
      <div className="ml-10 mt-10" style={{display:"flex",marginLeft:"10rem"}}>
        <div className="border-l-4 border-blue-800 pl-2" style={{ width: '200px' }}>
          <h2 className="font-semibold text-blue-800">ONLINE BANKING</h2>
          <div className="border-t-2 border-red-600 mt-2"></div>
          <ul className="mt-2">
            <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-700">Forgot my Password</a></li>
            <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-700">Forgot my Login ID</a></li>
          </ul>

        </div>
        <h1 style={{marginLeft:"5rem",backgroundColor:"#003366",height:"50px",width:"50%",color:"white",fontSize:"20px"}}>ONLINE BANKING</h1>
      </div>
      <div className="flex justify-center items-start mt-4" style={{ marginLeft: '6rem' }}>
      <div className="p-4" style={{ width: '30%',height:"20%" }}>
        <p className="mb-2">Please enter your Login ID to log in to online banking.</p>
        <label className="block mb-2" htmlFor="loginId">Login ID *</label>
        <input 
          type="text" 
          id="loginId" 
          className="w-full p-2 border border-gray-300 rounded mb-4" 
          
        />
        <button className="w-full bg-red-600 text-white p-2 rounded"style={{padding:"10px 10px",width:"80px"}} >Submit</button>
      </div>
      <div className="p-4 bg-gray-100" style={{ width: '22%',height:"15%",marginBottom:"30px" }}>
        <div className="flex items-center mb-2">
          <div className="w-1/6 flex justify-center items-center" >
            <img 
              src="https://via.placeholder.com/50" 
              alt="Help Icon" 
              className="rounded-full bg-red-500 p-2" 
            />
          </div>
          <div className="w-5/6 text-blue-800" >
            <strong >Need help?</strong>
          </div>
        </div>
        <p>For assistance completing this form, call <strong className="text-red-600">(844) 225-8347</strong>.</p>
        <p className="mt-2">
          Monday - Friday: <br />
          7:00 a.m. - 8:00 p.m. CT<br />
          Saturday:<br />
          8:00 a.m. - 5:00 p.m. CT
        </p>
        <p className="mt-2">
          <a href="#" className="text-blue-600 underline">Reset your password online.</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
