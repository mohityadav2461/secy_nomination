"use client"

import { useState } from "react";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';



export default function Form() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()



  const onSubmit = async (data) => {

  setLoading(true)

  try {

    const res = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    

    reset()
    toast.success('Submitted succusfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
});

  } catch (error) {

    console.log(error)

  } finally {

    setLoading(false)
  }
}

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-100 via-white to-orange-50 flex items-center justify-center p-5">
      
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-orange-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8">
          <h1 className="text-4xl font-bold text-center">
            Entrepreneurship Cell IIT Kanpur
          </h1>

          <p className="text-center mt-3 text-orange-100 text-lg">
            Secretary Nomination Form
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.name && (
              <p className="text-red-600 mt-1 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Roll Number */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Roll Number
            </label>

            <input
              type="text"
              placeholder="Enter roll number"
              {...register("roll", {
                required: "Roll number is required",
              })}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.roll && (
              <p className="text-red-600 mt-1 text-sm">
                {errors.roll.message}
              </p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Department
            </label>

            <input
              type="text"
              placeholder="Enter your department"
              {...register("department", {
                required: "Department is required",
              })}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.department && (
              <p className="text-red-600 mt-1 text-sm">
                {errors.department.message}
              </p>
            )}
          </div>

          {/* Year */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Year
            </label>

            <select
              {...register("year", {
                required: "Please select year",
              })}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>

            {errors.year && (
              <p className="text-red-600 mt-1 text-sm">
                {errors.year.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              IITK Email
            </label>

            <input
              type="email"
              placeholder="example@iitk.ac.in"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.email && (
              <p className="text-red-600 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Why */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Why do you want to become Secretary?
            </label>

            <textarea
              rows="5"
              placeholder="Write your motivation and vision..."
              {...register("motivation", {
                required: "This field is required",
                minLength: {
                  value: 20,
                  message: "Minimum 20 characters required",
                },
              })}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>

            {errors.motivation && (
              <p className="text-red-600 mt-1 text-sm">
                {errors.motivation.message}
              </p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Relevant Experience
            </label>

            <textarea
              rows="4"
              placeholder="Mention leadership roles, startups, projects, etc."
              {...register("experience")}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-[1.02] transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg"
          >
            {loading ? "Submitting..." : "Submit Nomination"}
          </button>
        </form>
      </div>
    </div>
    </>
  )
}