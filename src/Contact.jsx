import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
    });

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My Name is ${data.fullname}. My mobile Number is ${data.phone} and Email is ${data.email}, Here is want to say ${data.msg}`)
  }

  const InputEvent = (event) =>{
      const name = event.target.name;
      const value = event.target.value;

      setData((preVal) =>{
          return{
            ... preVal,
            [name]: value,
          }
      })
  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact US</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Fullname</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="exampleFormControlInput1"
                  name='fullname'
                  value={data.fullname}
                  onChange={InputEvent} 
                  placeholder="Enter your Fullname" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input 
                  type="number" 
                  class="form-control" 
                  id="exampleFormControlInput1"
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent} 
                  placeholder="Mobile Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="exampleFormControlInput1"
                  name='email'
                  value={data.email}
                  onChange={InputEvent} 
                  placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea 
                  class="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  name='msg'
                  value={data.msg}
                  onChange={InputEvent}>
                </textarea>
              </div>
              <div class="col-12">
                <button 
                  type="submit" 
                  class="btn btn-outline-primary">Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
