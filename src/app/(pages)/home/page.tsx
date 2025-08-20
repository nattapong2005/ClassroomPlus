import { FaBook } from "react-icons/fa";

export default function Page() {

  

  return (
    <>
      <div className="bg-primary p-5 rounded-2xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-2xl">สวัสดีคุณ, Nattapong Nakaom</h1>
            <p className="text-gray-300 text-xl mt-1">20000-9999 การเขียนโปรแกรมไพธอนเบื้องต้น</p>
            <p className="text-gray-300 text-xl mt-1">ปวช.1 เทคโนโลยีสารสนเทศ</p>
          </div>
          <div>
            <button className="bg-white text-primary rounded-xl  px-5 py-1.5">ออกจากระบบ</button>
          </div>
        </div>
      </div>
      <div className="mt-5 ms-2 mb-3">
        <h2 className="text-2xl font-bold ">งานที่ได้รับมอบหมาย</h2>
      </div>
      <div className="bg-white p-5 rounded-xl border border-gray-300 cursor-pointer hover:shadow-md duration-300 transition-all">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-gray-200 rounded-full">
            <FaBook className="text-2xl" />
          </div>
          <div>
            <h2 className="text-blue-900 text-xl font-bold mb-2">Mr.Nattapong Nakaom โพสต์งานใหม่: เขียนโปรแกรมไพธอน บวกเลข 1-10</h2>
            <p className="text-gray-500 text-lg">โพสต์เมื่อ: 13 กุมภาพันธ์ 2029</p>
          </div>
        </div>
      </div>
    </>
  );
}