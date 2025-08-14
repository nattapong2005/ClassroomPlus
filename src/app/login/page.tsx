import React from 'react'

const Login = () => {
  return (
    <>
      <section className='flex justify-center items-center min-h-screen'>
        <div className="w-full max-w-xl mx-3 sm:mx-auto p-10 bg-white shadow-lg rounded-xl">
          <div className="text-center mb-2">
            <h1 className='text-4xl font-bold text-primary'>เข้าสู่ระบบ Classroom+</h1>
          </div>
          <div className="text-center mb-2">
            <i><p className='text-gray-600 font-medium'>"ยกระดับการเขียนโค้ดด้วย AI และ Feedback ที่มีคุณภาพ"</p></i>
          </div>
          <div className="mb-5">

          </div>
          <form action="">
            <div className="mb-5">
              <label className="block mb-2 text-base font-medium text-primary">อีเมล</label>
              <input type='email' className="bg-gray-50 border border-gray-300 focus:border-primary transition-all duration-500 delay-200 focus:delay-150 text-gray-900 text-sm rounded-lg block w-full p-3 ease-in-out focus:ring-primary/30 focus:outline-none focus:ring-1" placeholder="กรอกอีเมล" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-base font-medium text-primary">รหัสผ่าน</label>
              <input type='password' className="bg-gray-50 border border-gray-300 focus:border-primary transition-all duration-500 delay-200 focus:delay-150 text-gray-900 text-sm rounded-lg block w-full p-3 ease-in-out focus:ring-primary/30 focus:outline-none focus:ring-1" placeholder="กรอกรหัสผ่าน" required />
            </div>
            <div className='mb-5'>
              <button className='w-full py-3 bg-primary hover:bg-primary/80 text-white rounded-lg cursor-pointer'>เข้าสู่ระบบ</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login