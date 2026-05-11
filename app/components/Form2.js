
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

export default function Form2() {

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

      const result = await res.json()

      console.log(result)

      alert("Nomination Submitted Successfully!")

      reset()

    } catch (error) {

      console.log(error)

      alert("Submission Failed")

    } finally {

      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-amber-50 flex items-center justify-center p-5">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-orange-200"
      >

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-8 text-white relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -right-20"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">
            Entrepreneurship Cell
          </h1>

          <p className="text-center mt-3 text-orange-100 text-lg relative z-10">
            Secretary Nomination 2026-27
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 md:p-10 space-y-8"
        >

          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            />

            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">
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
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.roll && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.roll.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              IITK Mail ID
            </label>

            <input
              type="email"
              placeholder="example@iitk.ac.in"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Phone No.
            </label>

            <input
              type="tel"
              placeholder="Enter phone number"
              {...register("phone", {
                required: "Phone number is required",
              })}
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.phone && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Vertical Preferences */}
          <div className="grid md:grid-cols-3 gap-5">

            {/* First Preference */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Vertical (1st Preference)
              </label>

              <select
                {...register("vertical1", {
                  required: "Required",
                })}
                className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select</option>
                <option>Events</option>
                <option>Startup Development</option>
                <option>SIP</option>
                <option>Design</option>
                <option>Web Development</option>
                <option>Media & Publicity</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* Second Preference */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Vertical (2nd Preference)
              </label>

              <select
                {...register("vertical2", {
                  required: "Required",
                })}
                className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select</option>
                <option>Events</option>
                <option>Startup Development</option>
                <option>SIP</option>
                <option>Design</option>
                <option>Web Development</option>
                <option>Media & Publicity</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* Third Preference */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Vertical (3rd Preference)
              </label>

              <select
                {...register("vertical3", {
                  required: "Required",
                })}
                className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select</option>
                <option>Events</option>
                <option>Startup Development</option>
                <option>SIP</option>
                <option>Design</option>
                <option>Web Development</option>
                <option>Media & Publicity</option>
                <option>Marketing</option>
              </select>
            </div>

          </div>

          {/* Mission */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Mission
            </label>

            <textarea
              rows="4"
              placeholder="Describe your mission..."
              {...register("mission", {
                required: "Mission is required",
              })}
              className="w-full border border-gray-300 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Vision */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Vision
            </label>

            <textarea
              rows="4"
              placeholder="Describe your vision..."
              {...register("vision", {
                required: "Vision is required",
              })}
              className="w-full border border-gray-300 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Startup Question */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 leading-7">
              If you were to establish a Startup aimed at solving a real-world
              problem, what would it be and what issue would it address?
            </label>

            <textarea
              rows="6"
              placeholder="Describe your startup idea..."
              {...register("startupIdea", {
                required: "This field is required",
              })}
              className="w-full border border-gray-300 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-orange-300 transition-all duration-300 disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Nomination"}
          </motion.button>

        </form>
      </motion.div>
    </div>
  )
}