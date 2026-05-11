// # Premium Next.js UI for E-Cell IITK Secretary Nomination

// ```jsx
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';

import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Target,
  Rocket,
} from "lucide-react"

export default function Page() {

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

      reset()

    } catch (error) {

      console.log(error)

      toast.success('submission failed', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
});

    } finally {

      setLoading(false)
    }
  }

  const verticals = [
    "Events",
    "Startup Development",
    "SIP",
    "Design",
    "Web Development",
    "Media & Publicity",
    "Marketing",
  ]

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
    <div className="min-h-screen bg-black relative overflow-hidden">


      {/* Background Effects */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 blur-3xl rounded-full"></div>

        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-amber-300/10 blur-3xl rounded-full"></div>

      </div>

      <div className="relative z-10 flex items-center justify-center p-4 md:p-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl"
        >

          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[35px] shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10">

              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 opacity-90"></div>

              <div className="relative z-10 px-8 py-12 md:px-14 text-center text-white">

                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-black tracking-tight"
                >
                  Entrepreneurship Cell
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-lg md:text-2xl text-orange-100"
                >
                  Secretary Nomination 2026-27
                </motion.p>

              </div>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 md:p-12 space-y-8"
            >

              {/* Basic Details */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <label className="text-white font-medium mb-3 flex items-center gap-2">
                    <User size={18} /> Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  />

                  {errors.name && (
                    <p className="text-red-400 mt-2 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Roll */}
                <div>
                  <label className="text-white font-medium mb-3 flex items-center gap-2">
                    <GraduationCap size={18} /> Roll Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter roll number"
                    {...register("roll", {
                      required: "Roll number is required",
                    })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-white font-medium mb-3 flex items-center gap-2">
                    <Mail size={18} /> IITK Mail ID
                  </label>

                  <input
                    type="email"
                    placeholder="abc@iitk.ac.in"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-white font-medium mb-3 flex items-center gap-2">
                    <Phone size={18} /> Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

              </div>

              {/* Vertical Preferences */}
              <div className="grid md:grid-cols-3 gap-6">

                {[1, 2, 3].map((num) => (
                  <div key={num}>

                    <label className="text-white font-medium mb-3 block">
                      Vertical ({num}{num === 1 ? "st" : num === 2 ? "nd" : "rd"} Preference)
                    </label>

                    <select
                      {...register(`vertical${num}`, {
                        required: "Required",
                      })}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400"
                    >

                      <option className="text-black" value="">
                        Select Vertical
                      </option>

                      {verticals.map((v) => (
                        <option className="text-black" key={v}>
                          {v}
                        </option>
                      ))}

                    </select>

                  </div>
                ))}

              </div>

             
              {/* Vision */}
              <div>

                <label className="text-white font-medium mb-3 flex items-center gap-2">
                  <Rocket size={18} /> Vision
                </label>

                <textarea
                  rows="5"
                  placeholder="Describe your vision for the club..."
                  {...register("vision", {
                    required: "Vision is required",
                  })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 resize-none outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>

              </div>


               {/* Mission */}
              <div>

                <label className="text-white font-medium mb-3 flex items-center gap-2">
                  <Target size={18} /> Mission
                </label>

                <textarea
                  rows="5"
                  placeholder="Describe your mission for E-Cell IIT Kanpur..."
                  {...register("mission", {
                    required: "Mission is required",
                  })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 resize-none outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>

              </div>


              {/* Startup Idea */}
              <div>

                <label className="text-white font-medium mb-3 block leading-7">
                  If you were to establish a Startup aimed at solving a real-world problem,
                  what would it be and what issue would it address?
                </label>

                <textarea
                  rows="7"
                  placeholder="Describe your startup idea in detail..."
                  {...register("startupIdea", {
                    required: "This field is required",
                  })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 resize-none outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>

              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                disabled={loading}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-black py-5 rounded-2xl text-xl font-bold shadow-[0_0_30px_rgba(251,146,60,0.5)] hover:shadow-[0_0_40px_rgba(251,146,60,0.8)] transition-all duration-300"
              >
                {loading ? "Submitting..." : "Submit Nomination"}
              </motion.button>

            </form>

          </div>

        </motion.div>

      </div>

    </div>
    </>
  )
}
